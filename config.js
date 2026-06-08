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
    
    // Contact Information
    contact: {
        phone: "+91 98765 43210",
        whatsapp: "+91 98765 43210",
        email: "akhil.priya@email.com"
    },

    // Venue Location (Google Maps)
    venue: {
        name: "Temple Grounds",
        address: "Temple Road, Hyderabad, Telangana 500082",
        latitude: 17.3850,
        longitude: 78.4867,
        mapLink: "https://goo.gl/maps/example"
    },

    // Ceremonies
    ceremonies: [
        {
            name: "Mehendi Ceremony",
            telugu: "మెహెందీ సంస్కారం",
            icon: "💅",
            date: "July 20, 2024",
            time: "6:00 PM - 10:00 PM",
            venue: "Venue Hall, Hyderabad"
        },
        {
            name: "Sangeet Ceremony",
            telugu: "సంగీత సంస్కారం",
            icon: "🎵",
            date: "July 21, 2024",
            time: "6:00 PM - 10:00 PM",
            venue: "Venue Hall, Hyderabad"
        },
        {
            name: "Haldi Ceremony",
            telugu: "హల్దీ సంస్కారం",
            icon: "🌙",
            date: "July 22, 2024",
            time: "10:00 AM - 1:00 PM",
            venue: "Bride's Residence, Hyderabad"
        },
        {
            name: "Wedding Ceremony",
            telugu: "వివాహ సంస్కారం",
            icon: "💍",
            date: "July 23, 2024",
            time: "5:00 PM Onwards",
            venue: "Temple Grounds, Hyderabad"
        },
        {
            name: "Reception",
            telugu: "రిసెప్షన్",
            icon: "🎂",
            date: "July 24, 2024",
            time: "6:00 PM - 11:00 PM",
            venue: "Grand Hotel, Hyderabad"
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

    // Wedding Date for Countdown (if enabled)
    weddingDate: "2024-07-23T17:00:00",

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
