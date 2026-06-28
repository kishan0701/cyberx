const fs = require('fs').promises;
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data');
const SURVEYS_FILE = path.join(DATA_DIR, 'surveys.json');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');

// Seed data generators to match the original static charts
function generateSeededSurveys() {
    const surveys = [];
    const total = 115;

    // We need:
    // Age Distribution: 18-30 (69%), Below 18 (25%), 30-45 (6%), 45+ (0%)
    // Usage Distribution: 5+ hours (50%), 3-5 hours (26%), 1-2 hours (18%), Rarely (6%)
    // Password strength: Strong (56%), Weak (31%), Medium/Reused/etc. (13%)
    // MFA Use: Yes (55%), No (45%)
    // Average scores for radar chart:
    // Password Security: 68%, Phishing: 55%, Software Updates: 72%, Data Backup: 45%, Social Media Privacy: 60%

    const ageGroups = ['Below 18', '18-30', '30-45', '45+'];
    const usageOptions = ['Rarely', '1-2 hours', '3-5 hours', '5+ hours'];
    const mfaOptions = ['Yes', 'No', 'Sometimes'];
    const passwordOptions = ['Weak', 'Medium', 'Strong'];

    for (let i = 0; i < total; i++) {
        // Distribute Age (Below 18: ~29, 18-30: ~79, 30-45: ~7, 45+: 0)
        let age;
        if (i < 29) age = 'Below 18';
        else if (i < 108) age = '18-30';
        else age = '30-45';

        // Distribute Usage (Rarely: ~7, 1-2h: ~21, 3-5h: ~30, 5+h: ~57)
        let usage;
        if (i < 7) usage = 'Rarely';
        else if (i < 28) usage = '1-2 hours';
        else if (i < 58) usage = '3-5 hours';
        else usage = '5+ hours';

        // Distribute Password (Strong: ~64, Weak: ~36, Medium: ~15)
        let password;
        if (i < 64) password = 'Strong';
        else if (i < 100) password = 'Weak';
        else password = 'Medium';

        // Distribute MFA (Yes: ~63, No: ~35, Sometimes: ~17)
        let mfa;
        if (i < 63) mfa = 'Yes';
        else if (i < 98) mfa = 'No';
        else mfa = 'Sometimes';

        // Distribute Awareness Rating (1 to 5 stars)
        // High correlation with age and usage
        let rating = 3;
        if (age === 'Below 18') {
            rating = Math.random() > 0.5 ? 2 : 3;
        } else if (age === '18-30') {
            rating = Math.random() > 0.4 ? 4 : 3;
        } else {
            rating = Math.random() > 0.3 ? 5 : 4;
        }

        // Radar chart details (scores 0-100)
        // Averages: Passwords 68, Phishing 55, Updates 72, Backups 45, Social 60
        const passScore = password === 'Strong' ? getRandomInt(75, 100) : (password === 'Medium' ? getRandomInt(50, 75) : getRandomInt(20, 50));
        const phishScore = mfa === 'Yes' ? getRandomInt(60, 90) : getRandomInt(30, 70);
        const updateScore = age === '18-30' ? getRandomInt(70, 95) : getRandomInt(50, 80);
        const backupScore = usage === '5+ hours' ? getRandomInt(50, 80) : getRandomInt(20, 60);
        const socialScore = age === 'Below 18' ? getRandomInt(40, 70) : getRandomInt(50, 85);

        surveys.push({
            id: i + 1,
            ageGroup: age,
            usageHours: usage,
            passwordStrength: password,
            mfaUse: mfa,
            generalRating: rating,
            scores: {
                passwordSecurity: passScore,
                phishingAwareness: phishScore,
                softwareUpdates: updateScore,
                dataBackup: backupScore,
                socialMediaPrivacy: socialScore
            },
            timestamp: new Date(Date.now() - getRandomInt(1, 30) * 24 * 60 * 60 * 1000).toISOString() // random date in last 30 days
        });
    }
    return surveys;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const initialMessages = [
    {
        id: 1,
        name: "Aarav Sharma",
        email: "aarav.sharma@example.com",
        message: "Hi Kishan, awesome presentation slides! Where can I download more security checklist brochures?",
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 2,
        name: "Neha Patel",
        email: "neha.patel@outlook.com",
        message: "Can we use physical security keys like YubiKey with mobile devices easily? Great gadgets section btw.",
        timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString()
    }
];

// DB Operations
async function initDb() {
    try {
        await fs.mkdir(DATA_DIR, { recursive: true });
        
        // Check Surveys file
        try {
            await fs.access(SURVEYS_FILE);
            const content = await fs.readFile(SURVEYS_FILE, 'utf8');
            if (!content || JSON.parse(content).length === 0) {
                throw new Error("Empty file");
            }
        } catch (e) {
            console.log("Initializing/Seeding surveys database...");
            await fs.writeFile(SURVEYS_FILE, JSON.stringify(generateSeededSurveys(), null, 2), 'utf8');
        }

        // Check Messages file
        try {
            await fs.access(MESSAGES_FILE);
        } catch (e) {
            console.log("Initializing/Seeding messages database...");
            await fs.writeFile(MESSAGES_FILE, JSON.stringify(initialMessages, null, 2), 'utf8');
        }
        
        console.log("Database initialized successfully!");
    } catch (error) {
        console.error("Database initialization failed:", error);
    }
}

async function getSurveys() {
    try {
        const data = await fs.readFile(SURVEYS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

async function saveSurvey(survey) {
    const surveys = await getSurveys();
    const newSurvey = {
        id: surveys.length > 0 ? surveys[surveys.length - 1].id + 1 : 1,
        ...survey,
        timestamp: new Date().toISOString()
    };
    surveys.push(newSurvey);
    await fs.writeFile(SURVEYS_FILE, JSON.stringify(surveys, null, 2), 'utf8');
    return newSurvey;
}

async function getMessages() {
    try {
        const data = await fs.readFile(MESSAGES_FILE, 'utf8');
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

async function saveMessage(message) {
    const messages = await getMessages();
    const newMessage = {
        id: messages.length > 0 ? messages[messages.length - 1].id + 1 : 1,
        ...message,
        timestamp: new Date().toISOString()
    };
    messages.push(newMessage);
    await fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2), 'utf8');
    return newMessage;
}

async function getStats() {
    const surveys = await getSurveys();
    const totalCount = surveys.length;
    
    if (totalCount === 0) {
        return {
            totalParticipants: 0,
            awarenessAverages: [0, 0, 0, 0, 0],
            passwords: { strong: 0, weak: 0, medium: 0, no2fa: 0 },
            knowledgeByAge: {
                below18: { basic: 0, advanced: 0 },
                age18_30: { basic: 0, advanced: 0 },
                age30_45: { basic: 0, advanced: 0 }
            },
            ageDistribution: { age18_30: 0, below18: 0, age30_45: 0, ageAbove45: 0 },
            internetUsage: { hours5Plus: 0, hours3To5: 0, hours1To2: 0, rarely: 0 }
        };
    }

    // Aggregates
    let totalPass = 0, totalPhish = 0, totalUpdate = 0, totalBackup = 0, totalSocial = 0;
    let pwStrong = 0, pwWeak = 0, pwMedium = 0, no2fa = 0;
    
    let ageBelow18 = 0, age18_30 = 0, age30_45 = 0, ageAbove45 = 0;
    
    let useRarely = 0, use1_2 = 0, use3_5 = 0, use5Plus = 0;

    // Age Group knowledge counters:
    // We count score >= 3 as Basic, score >= 4.5 or 5 as Advanced, or split rating (1-5)
    // Let's check ratings: Rating 3-4 = Basic, Rating 5 = Advanced
    let ageBelow18_basic = 0, ageBelow18_adv = 0;
    let age18_30_basic = 0, age18_30_adv = 0;
    let age30_45_basic = 0, age30_45_adv = 0;

    surveys.forEach(s => {
        // Radar scores
        const scores = s.scores || { passwordSecurity: 50, phishingAwareness: 50, softwareUpdates: 50, dataBackup: 50, socialMediaPrivacy: 50 };
        totalPass += scores.passwordSecurity;
        totalPhish += scores.phishingAwareness;
        totalUpdate += scores.softwareUpdates;
        totalBackup += scores.dataBackup;
        totalSocial += scores.socialMediaPrivacy;

        // Password strength & 2FA
        if (s.passwordStrength === 'Strong') pwStrong++;
        else if (s.passwordStrength === 'Weak') pwWeak++;
        else pwMedium++;

        if (s.mfaUse === 'No') no2fa++;

        // Age
        if (s.ageGroup === 'Below 18') {
            ageBelow18++;
            if (s.generalRating >= 4) ageBelow18_adv++;
            if (s.generalRating >= 2.5) ageBelow18_basic++;
        } else if (s.ageGroup === '18-30') {
            age18_30++;
            if (s.generalRating >= 4) age18_30_adv++;
            if (s.generalRating >= 2.5) age18_30_basic++;
        } else if (s.ageGroup === '30-45') {
            age30_45++;
            if (s.generalRating >= 4) age30_45_adv++;
            if (s.generalRating >= 2.5) age30_45_basic++;
        } else {
            ageAbove45++;
        }

        // Usage
        if (s.usageHours === 'Rarely') useRarely++;
        else if (s.usageHours === '1-2 hours') use1_2++;
        else if (s.usageHours === '3-5 hours') use3_5++;
        else if (s.usageHours === '5+ hours') use5Plus++;
    });

    const formatPct = (val) => Math.round((val / totalCount) * 100);

    return {
        totalParticipants: totalCount,
        awarenessAverages: [
            Math.round(totalPass / totalCount),
            Math.round(totalPhish / totalCount),
            Math.round(totalUpdate / totalCount),
            Math.round(totalBackup / totalCount),
            Math.round(totalSocial / totalCount)
        ],
        passwords: {
            strong: formatPct(pwStrong),
            weak: formatPct(pwWeak),
            medium: formatPct(pwMedium),
            no2fa: formatPct(no2fa)
        },
        knowledgeByAge: {
            below18: {
                basic: ageBelow18 > 0 ? Math.round((ageBelow18_basic / ageBelow18) * 100) : 0,
                advanced: ageBelow18 > 0 ? Math.round((ageBelow18_adv / ageBelow18) * 100) : 0
            },
            age18_30: {
                basic: age18_30 > 0 ? Math.round((age18_30_basic / age18_30) * 100) : 0,
                advanced: age18_30 > 0 ? Math.round((age18_30_adv / age18_30) * 100) : 0
            },
            age30_45: {
                basic: age30_45 > 0 ? Math.round((age30_45_basic / age30_45) * 100) : 0,
                advanced: age30_45 > 0 ? Math.round((age30_45_adv / age30_45) * 100) : 0
            }
        },
        ageDistribution: {
            age18_30: formatPct(age18_30),
            below18: formatPct(ageBelow18),
            age30_45: formatPct(age30_45),
            ageAbove45: formatPct(ageAbove45)
        },
        internetUsage: {
            hours5Plus: formatPct(use5Plus),
            hours3To5: formatPct(use3_5),
            hours1To2: formatPct(use1_2),
            rarely: formatPct(useRarely)
        }
    };
}

module.exports = {
    initDb,
    getSurveys,
    saveSurvey,
    getMessages,
    saveMessage,
    getStats
};
