// Wedding Configuration
// Edit this file to customize your wedding invitation

const weddingConfig = {
    // Bride & Groom Information
    bride: {
        name: "Sai Susmitha",
        teluguName: "వధువు",
        father: "Sri Vonteddu Prasad",
        mother: "Smt. Mallika"
    },
    
    groom: {
        name: "Akhil",
        teluguName: "వరుడు",
        father: "Sri Sopeti Venkateswara Rao",
        mother: "Smt. Sandhya"
    },

    // Wedding Title
    title: "Together Forever",
    
    // Venue Location (Google Maps)
    venue: {
        name: "Dr. Metla Satyanarayanarao Kapu Kalyana Mandapam",
        address: "Gandu Street, Amalapuram",
        latitude: 16.5833,
        longitude: 82.0167,
        mapLink: "https://maps.app.goo.gl/zebWsFqyQCBbUdCE9"
    },

    // Reception Venue (Google Maps)
    receptionVenue: {
        name: "Pentakota Function Hall",
        address: "Anakapalli",
        mapLink: "https://maps.app.goo.gl/hGMFKp3bhmyhDBiNA"
    },

    // Ceremonies
    ceremonies: [
        {
            name: "Sumuhurtham / Wedding Ceremony",
            telugu: "సుముహూర్తం / వివాహ సంస్కారం",
            icon: "💍",
            date: "July 2, 2026",
            time: "8:23 PM",
            details: "Sravana Nakshatram • Makara Lagnam",
            venue: "Dr. Metla Satyanarayanarao Kapu Kalyana Mandapam, Gandu Street, Amalapuram",
            mapLink: "https://maps.app.goo.gl/zebWsFqyQCBbUdCE9"
        },
        {
            name: "Reception",
            telugu: "రిసెప్షన్",
            icon: "🎂",
            date: "July 5, 2026",
            time: "12:00 Noon Onwards",
            venue: "Pentakota Function Hall, Anakapalli",
            mapLink: "https://maps.app.goo.gl/hGMFKp3bhmyhDBiNA"
        }
    ],

    // Color Scheme
    colors: {
        primary: "#D4145A",      // Main red/pink
        secondary: "#FDB750",    // Gold/orange
        accent: "#F37335",       // Accent orange
        gold: "#FFD700",         // Gold ornaments
        darkText: "#333",        // Dark text
        lightText: "#666",       // Light text
        bgLight: "#FFF8F3"       // Background
    },

    // RSVP Configuration
    rsvp: {
        // Replace with your Google Form link
        googleFormLink: "https://forms.gle/your-rsvp-form-link",
        qrCodeSize: 200,
        qrCodeErrorCorrection: "H"  // L, M, Q, H
    },

    // South Indian Traditions
    traditions: [
        {
            icon: "👰",
            title: "Bridal Attire",
            description: "Traditional Saree with Kanjeevaram silk and temple jewelry"
        },
        {
            icon: "🤵",
            title: "Groom's Attire",
            description: "Dhoti, Shirt and Traditional Turban (Pagri)"
        },
        {
            icon: "🌸",
            title: "Flower Decorations",
            description: "Jasmine flowers and Marigold garlands"
        },
        {
            icon: "🎭",
            title: "Vedic Rituals",
            description: "Sacred ceremonies performed by Vedic priests"
        }
    ],

    // Blessings Text
    blessings: {
        hindi: "आपकी उपस्थिति हमें सम्मानित करेगी",
        english: "Your Presence is Requested and Warmly Welcomed",
        closing: "With Love & Blessings"
    },

    // Flower Animation Settings
    flowers: [
        { emoji: "🌸", position: "flower-1" },
        { emoji: "🌼", position: "flower-2" },
        { emoji: "🌺", position: "flower-3" },
        { emoji: "🌻", position: "flower-4" },
        { emoji: "🌷", position: "flower-5" }
    ],

    // Google Maps API Key
    googleMapsApiKey: "YOUR_API_KEY_HERE",

    // Background music (public MP3 URL) — set to empty to disable
    musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",

    // Wedding Date for Countdown (if enabled)
    weddingDate: "2026-07-02T20:23:00",

    // Social Media & Sharing
    sharing: {
        enableWhatsApp: true,
        enableFacebook: true,
        enableTwitter: false,
        websiteUrl: "https://your-wedding-site.com"
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = weddingConfig;
}
