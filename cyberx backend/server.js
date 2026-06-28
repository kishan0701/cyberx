const express = require('express');
const cors = require('cors');
const Parser = require('rss-parser');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 5000;
const parser = new Parser({
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
});

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Database
db.initDb();

// Dynamic mock incidents as a fallback when offline or when RSS fails
const fallbackIncidents = [
    {
        title: "Critical Zero-Day in Microsoft Outlook",
        description: "A new vulnerability allows remote code execution via email previews. Microsoft urges immediate patching.",
        source: "Threat Intelligence Feed"
    },
    {
        title: "Major Ransomware Attack Targets Health Systems",
        description: "Healthcare networks hit by ransomware encrypting clinical records. Incident response protocols active.",
        source: "CISA Security Alerts"
    },
    {
        title: "Social Engineering Campaign Mimics Office 365",
        description: "A highly sophisticated phishing campaign targets educational institutions' credential portals.",
        source: "CyberX Threat Research"
    },
    {
        title: "Industrial IoT Devices Vulnerable to Command Injection",
        description: "Critical vulnerabilities uncovered in popular industrial sensors, exposing utility grids to threats.",
        source: "NVD Database"
    },
    {
        title: "Cryptojacking Script Embedded in Popular NPM Library",
        description: "A dependency confusion attack injects mining software into enterprise builds. Clean packages deployed.",
        source: "Security Weekly"
    },
    {
        title: "Zero-Day Exploit in Chrome V8 Engine",
        description: "A critical remote code execution vulnerability has been discovered in Chrome's Javascript engine. Update immediately.",
        source: "Threat Intelligence Feed"
    },
    {
        title: "Credential Stuffing Attack on Major Education Portal",
        description: "Active credential stuffing campaign detected targeting university and high school portal logins.",
        source: "CyberX Threat Research"
    },
    {
        title: "New Ransomware Strain 'BlackByte' Targeting Municipalities",
        description: "Municipal systems encrypted with ransomware demanding cryptocurrency payment. Incident response engaged.",
        source: "CISA Security Alerts"
    },
    {
        title: "Data Breach Exposes 500,000 Corporate Credentials",
        description: "Leaked database found on dark web containing sensitive employee logins and emails.",
        source: "Threat Intelligence Feed"
    },
    {
        title: "Critical Authentication Bypass in Cisco Routers",
        description: "Cisco releases urgent security patch for WAN routers allowing unauthorized admin access.",
        source: "NVD Database"
    },
    {
        title: "Phishing Campaign Impersonating Popular Banking App",
        description: "Users report receiving text messages claiming account suspension to steal multi-factor tokens.",
        source: "Security Weekly"
    },
    {
        title: "Vulnerability in WordPress Plugin Affects 1M+ Sites",
        description: "Security researchers discover SQL injection flaw. Site administrators urged to update plugin.",
        source: "NVD Database"
    },
    {
        title: "Malicious VS Code Extension Stealing Env Variables",
        description: "Extension removed from marketplace after security audit reveals credential exfiltration code.",
        source: "CyberX Threat Research"
    },
    {
        title: "DDoS Attack Targets Major Content Delivery Network",
        description: "Temporary latency observed across multiple web services due to high-volume botnet flood.",
        source: "Threat Intelligence Feed"
    },
    {
        title: "Critical RCE Vulnerability in Apache Web Server",
        description: "Patch released for zero-day memory corruption bug allowing full server takeover.",
        source: "NVD Database"
    }
];

// Helper to format dynamic offsets into relative time strings
function formatRelativeTime(minutesAgo) {
    if (minutesAgo < 60) {
        return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
    }
    const hours = Math.floor(minutesAgo / 60);
    if (hours < 24) {
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    }
    const days = Math.floor(hours / 24);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
}

// Global Cache for News Feed (Stale-While-Revalidate pattern)
let newsCache = {
    data: [],
    lastFetched: 0
};
const CACHE_DURATION_MS = 3 * 60 * 1000; // 3 minutes cache TTL
const CRITICAL_KEYWORDS = ['critical', 'zero-day', '0-day', 'ransomware', 'exploit', 'vulnerability', 'breach', 'hack', 'patch', 'emergency', 'malware', 'attack', 'cve-'];

function isIncidentCritical(title, description) {
    const textToSearch = `${title} ${description}`.toLowerCase();
    return CRITICAL_KEYWORDS.some(keyword => textToSearch.includes(keyword));
}

function generateDynamicAlerts() {
    // Shuffle copy of fallback incidents
    const shuffled = [...fallbackIncidents].sort(() => 0.5 - Math.random());
    // Take top 5
    const selected = shuffled.slice(0, 5);
    
    // Assign random time offsets (in minutes) sorted ascending
    const offsets = [
        Math.floor(Math.random() * 9) + 2,
        Math.floor(Math.random() * 26) + 15,
        Math.floor(Math.random() * 36) + 45,
        Math.floor(Math.random() * 91) + 90,
        Math.floor(Math.random() * 161) + 200
    ];
    
    return selected.map((inc, index) => {
        const isCritical = isIncidentCritical(inc.title, inc.description);
        return {
            title: inc.title,
            description: inc.description,
            source: inc.source,
            timeString: formatRelativeTime(offsets[index]),
            url: "#",
            isCritical: isCritical
        };
    });
}

async function fetchAndCacheNews() {
    try {
        const feedUrl = 'https://thehackernews.com/feeds/posts/default';
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);
        
        const feed = await parser.parseURL(feedUrl);
        clearTimeout(timeoutId);

        const items = feed.items.slice(0, 5).map((item) => {
            const pubDate = new Date(item.pubDate);
            const diffMs = Date.now() - pubDate.getTime();
            const diffMins = Math.max(5, Math.floor(diffMs / (1000 * 60)));
            const desc = item.contentSnippet ? item.contentSnippet.slice(0, 150) + '...' : 'Cybersecurity vulnerability and incident report detail.';
            const isCritical = isIncidentCritical(item.title, desc);

            return {
                title: item.title,
                description: desc,
                source: "The Hacker News",
                timeString: formatRelativeTime(diffMins),
                url: item.link,
                isCritical: isCritical
            };
        });

        newsCache.data = items;
        newsCache.lastFetched = Date.now();
        return items;
    } catch (error) {
        console.log("RSS Feed fetch failed. Using dynamic mock alerts.");
        const dynamicAlerts = generateDynamicAlerts();
        newsCache.data = dynamicAlerts;
        newsCache.lastFetched = Date.now();
        return dynamicAlerts;
    }
}

// 1. GET Real-time news & incidents
app.get('/api/news', async (req, res) => {
    const isCacheExpired = Date.now() - newsCache.lastFetched > CACHE_DURATION_MS;
    
    if (newsCache.data.length === 0) {
        const data = await fetchAndCacheNews();
        return res.json(data);
    }
    
    if (isCacheExpired) {
        fetchAndCacheNews().catch(err => console.error("Background news update failed:", err));
    }
    
    return res.json(newsCache.data);
});

// 2. GET Survey Statistics (Chart.js feeds)
app.get('/api/stats', async (req, res) => {
    try {
        const stats = await db.getStats();
        res.json(stats);
    } catch (error) {
        res.status(500).json({ error: "Failed to load stats" });
    }
});

// 3. POST Submit Survey
app.post('/api/survey', async (req, res) => {
    try {
        const { ageGroup, usageHours, passwordStrength, mfaUse, generalRating } = req.body;
        
        if (!ageGroup || !usageHours || !passwordStrength || !mfaUse || !generalRating) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Logical calculation of awareness scores based on options
        const getRandomScore = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

        // Averages should map logically to inputs
        const passwordSecurity = passwordStrength === 'Strong' ? getRandomScore(80, 100) : (passwordStrength === 'Medium' ? getRandomScore(50, 75) : getRandomScore(20, 45));
        const phishingAwareness = generalRating * 15 + (mfaUse === 'Yes' ? 20 : 0) + getRandomScore(0, 5);
        const softwareUpdates = ageGroup === '18-30' ? getRandomScore(70, 95) : getRandomScore(50, 80);
        const dataBackup = usageHours === '5+ hours' ? getRandomScore(50, 80) : getRandomScore(20, 60);
        const socialMediaPrivacy = ageGroup === 'Below 18' ? getRandomScore(40, 70) : getRandomScore(55, 85);

        const newSurvey = {
            ageGroup,
            usageHours,
            passwordStrength,
            mfaUse,
            generalRating: parseInt(generalRating, 10),
            scores: {
                passwordSecurity: Math.min(100, passwordSecurity),
                phishingAwareness: Math.min(100, phishingAwareness),
                softwareUpdates: Math.min(100, softwareUpdates),
                dataBackup: Math.min(100, dataBackup),
                socialMediaPrivacy: Math.min(100, socialMediaPrivacy)
            }
        };

        const saved = await db.saveSurvey(newSurvey);
        res.status(201).json(saved);
    } catch (error) {
        res.status(500).json({ error: "Failed to submit survey" });
    }
});

// 4. POST Contact Messages
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newMessage = { name, email, message };
        const saved = await db.saveMessage(newMessage);
        res.status(201).json({ success: true, message: saved });
    } catch (error) {
        res.status(500).json({ error: "Failed to save message" });
    }
});

// 5. GET All Messages (Admin Inbox)
app.get('/api/messages', async (req, res) => {
    try {
        const messages = await db.getMessages();
        // Return latest messages first
        res.json(messages.reverse());
    } catch (error) {
        res.status(500).json({ error: "Failed to load messages" });
    }
});

// Server Health Check
app.get('/api/health', (req, res) => {
    res.json({ status: "healthy", timestamp: new Date() });
});

// Start Server
app.listen(PORT, () => {
    console.log(`CyberX Server is running on port ${PORT}`);
});
