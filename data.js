// Data produk untuk ZarrStore
// Produk dapat dikustomisasi dengan menambah, mengedit, atau menghapus produk di sini

const zarrStoreProducts = {
    // Struktur folder produk (kategori utama)
    folders: [
        {
            id: "folder-1",
            name: "Aplikasi Premium",
            description: "Koleksi aplikasi premium dengan fitur lengkap",
            icon: "fas fa-mobile-alt"
        },
        {
            id: "folder-2",
            name: "Sewa Bot WhatsApp",
            description: "Layanan sewa bot WhatsApp untuk berbagai kebutuhan",
            icon: "fab fa-whatsapp"
        },
        {
            id: "folder-3",
            name: "Top Up All Game",
            description: "Top up untuk semua game populer",
            icon: "fas fa-gamepad"
        },
        {
            id: "folder-4", 
            name: "Isi Pulsa/Kuota",
            description: "Pulsa dan paket data semua operator",
            icon: "fas fa-wifi"
        }
    ],
    
    // Sub-kategori untuk setiap folder
    subCategories: {
        "folder-1": [
            { id: "sub-1-1", name: "Video Editor" },
            { id: "sub-1-2", name: "Photo Editor" },
            { id: "sub-1-3", name: "Office Tools" },
            { id: "sub-1-4", name: "Utilities" }
        ],
        "folder-2": [
            { id: "sub-2-1", name: "Auto Reply" },
            { id: "sub-2-2", name: "Broadcast" },
            { id: "sub-2-3", name: "Group Management" },
            { id: "sub-2-4", name: "Custom Bot" }
        ],
        "folder-3": [
            { id: "sub-3-1", name: "Mobile Legends" },
            { id: "sub-3-2", name: "Free Fire" },
            { id: "sub-3-3", name: "PUBG Mobile" },
            { id: "sub-3-4", name: "Valorant" },
            { id: "sub-3-5", name: "Genshin Impact" }
        ],
        "folder-4": [
            { id: "sub-4-1", name: "Telkomsel" },
            { id: "sub-4-2", name: "XL" },
            { id: "sub-4-3", name: "Indosat" },
            { id: "sub-4-4", name: "Smartfren" },
            { id: "sub-4-5", name: "Tri" }
        ]
    },
    
    // Produk-produk dalam setiap folder dan sub-kategori
    products: [
        // Produk dalam folder "Aplikasi Premium"
        {
            id: "1-1",
            folderId: "folder-1",
            subCategoryId: "sub-1-1",
            name: "Adobe Premiere Pro Full Pack",
            description: "Aplikasi editing video profesional dengan semua plugin premium dan efek terbaru. Cocok untuk content creator dan editor profesional.",
            price: 85000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1599999999/sample.jpg",
            features: [
                "Unlimited projects",
                "All premium plugins",
                "Lifetime updates",
                "24/7 support"
            ]
        },
        {
            id: "1-2",
            folderId: "folder-1",
            subCategoryId: "sub-1-1",
            name: "CapCut Pro Unlocked",
            description: "Versi premium CapCut dengan semua fitur unlocked. Tidak ada watermark dan akses ke semua template premium.",
            price: 45000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1599999999/sample.jpg",
            features: [
                "No watermark",
                "All premium effects",
                "Unlimited exports",
                "HD quality"
            ]
        },
        {
            id: "1-3",
            folderId: "folder-1",
            subCategoryId: "sub-1-2",
            name: "Adobe Photoshop 2024",
            description: "Software editing foto terbaik dengan semua tool dan brush premium. Termasuk AI features terbaru.",
            price: 95000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1599999999/sample.jpg",
            features: [
                "All AI tools",
                "1000+ premium brushes",
                "Lifetime license",
                "Regular updates"
            ]
        },
        {
            id: "1-4",
            folderId: "folder-1",
            subCategoryId: "sub-1-3",
            name: "Microsoft Office 365 Lifetime",
            description: "Microsoft Office 365 dengan aktivasi lifetime. Termasuk Word, Excel, PowerPoint, dan semua fitur premium.",
            price: 75000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1599999999/sample.jpg",
            features: [
                "Word, Excel, PowerPoint",
                "1TB OneDrive",
                "Lifetime activation",
                "Premium templates"
            ]
        },
        
        // Produk dalam folder "Sewa Bot WhatsApp"
        {
            id: "2-1",
            folderId: "folder-2",
            subCategoryId: "sub-2-1",
            name: "Bot Auto Reply Premium",
            description: "Bot WhatsApp dengan sistem auto reply cerdas. Dapat diatur untuk merespon pesan secara otomatis dengan berbagai kondisi.",
            price: 150000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1599999999/sample.jpg",
            features: [
                "Auto reply cerdas",
                "Multi keyword support",
                "Schedule messages",
                "Unlimited contacts"
            ]
        },
        {
            id: "2-2",
            folderId: "folder-2",
            subCategoryId: "sub-2-2",
            name: "Broadcast Bot Pro",
            description: "Bot khusus untuk broadcast message ke banyak kontak sekaligus. Mendukung pengiriman gambar, video, dan dokumen.",
            price: 120000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1599999999/sample.jpg",
            features: [
                "Bulk messaging",
                "Media support",
                "Contact grouping",
                "Delivery reports"
            ]
        },
        {
            id: "2-3",
            folderId: "folder-2",
            subCategoryId: "sub-2-3",
            name: "Group Management Bot",
            description: "Bot untuk mengelola grup WhatsApp secara otomatis. Fitur: welcome message, auto kick, anti spam, dan moderator tools.",
            price: 100000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1599999999/sample.jpg",
            features: [
                "Auto welcome message",
                "Anti spam protection",
                "Auto kick inaktif",
                "Moderator tools"
            ]
        },
        
        // Produk dalam folder "Top Up All Game"
        {
            id: "3-1",
            folderId: "folder-3",
            subCategoryId: "sub-3-1",
            name: "Mobile Legends Diamond",
            description: "Top up diamond Mobile Legends dengan proses instan. Tersedia semua nominal dengan bonus khusus.",
            price: 15000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1599999999/sample.jpg",
            nominal: ["86 Diamond", "172 Diamond", "257 Diamond", "344 Diamond", "429 Diamond"],
            features: [
                "Proses instan",
                "Bonus diamond",
                "All server support",
                "24/7 available"
            ]
        },
        {
            id: "3-2",
            folderId: "folder-3",
            subCategoryId: "sub-3-2",
            name: "Free Fire Diamond",
            description: "Top up diamond Free Fire dengan harga termurah. Proses cepat dan aman untuk semua server.",
            price: 18000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1599999999/sample.jpg",
            nominal: ["100 Diamond", "210 Diamond", "355 Diamond", "720 Diamond", "1450 Diamond"],
            features: [
                "Harga termurah",
                "Proses 5 menit",
                "Bonus voucher",
                "Customer support"
            ]
        },
        {
            id: "3-3",
            folderId: "folder-3",
            subCategoryId: "sub-3-3",
            name: "PUBG Mobile UC",
            description: "Top up Unknown Cash (UC) untuk PUBG Mobile. Tersedia untuk semua region termasuk Indonesia.",
            price: 22000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1599999999/sample.jpg",
            nominal: ["60 UC", "325 UC", "660 UC", "1800 UC", "3850 UC"],
            features: [
                "All region support",
                "Instant delivery",
                "Bonus UC",
                "Safe & secure"
            ]
        },
        {
            id: "3-4",
            folderId: "folder-3",
            subCategoryId: "sub-3-4",
            name: "Valorant Points",
            description: "Top up Valorant Points dengan proses cepat. Mendukung semua region termasuk Asia Pacific.",
            price: 25000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1599999999/sample.jpg",
            nominal: ["125 VP", "420 VP", "700 VP", "1375 VP", "2400 VP"],
            features: [
                "APAC region support",
                "Fast delivery",
                "No extra fee",
                "24/7 service"
            ]
        },
        
        // Produk dalam folder "Isi Pulsa/Kuota"
        {
            id: "4-1",
            folderId: "folder-4",
            subCategoryId: "sub-4-1",
            name: "Telkomsel Pulsa",
            description: "Isi pulsa Telkomsel semua nominal. Proses instan dan harga spesial untuk pelanggan ZarrStore.",
            price: 10000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1599999999/sample.jpg",
            nominal: ["5.000", "10.000", "20.000", "50.000", "100.000"],
            features: [
                "Instant process",
                "All nominal",
                "Bonus pulsa",
                "24/7 available"
            ]
        },
        {
            id: "4-2",
            folderId: "folder-4",
            subCategoryId: "sub-4-1",
            name: "Telkomsel Kuota",
            description: "Paket data Telkomsel dengan kuota besar dan masa aktif panjang. Cocok untuk streaming dan gaming.",
            price: 50000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1599999999/sample.jpg",
            nominal: ["10GB 30 Hari", "25GB 30 Hari", "50GB 30 Hari", "100GB 30 Hari"],
            features: [
                "Kuota besar",
                "Masa aktif panjang",
                "All zone",
                "No throttle"
            ]
        },
        {
            id: "4-3",
            folderId: "folder-4",
            subCategoryId: "sub-4-2",
            name: "XL Pulsa & Paket",
            description: "Pulsa dan paket data XL dengan harga kompetitif. Proses cepat dan garansi pengisian.",
            price: 10000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1599999999/sample.jpg",
            nominal: ["5.000", "10.000", "25.000", "50.000", "100.000"],
            features: [
                "Harga kompetitif",
                "Instant process",
                "Guaranteed",
                "Support 24/7"
            ]
        },
        {
            id: "4-4",
            folderId: "folder-4",
            subCategoryId: "sub-4-3",
            name: "Indosat Freedom Internet",
            description: "Paket internet Indosat dengan kuota unlimited untuk sosial media dan streaming.",
            price: 35000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1599999999/sample.jpg",
            nominal: ["7GB 7 Hari", "15GB 30 Hari", "30GB 30 Hari", "Unlimited 30 Hari"],
            features: [
                "Unlimited social media",
                "Fast streaming",
                "30 days active",
                "Best price"
            ]
        }
    ]
};

// Informasi payment
const paymentInfo = {
    dana: {
        name: "zaenulenka",
        number: "088295039238"
    },
    ovo: {
        name: "Azwar",
        number: "088295039238"
    },
    gopay: {
        name: "Enka Azwar",
        number: "088295039238"
    },
    qris: {
        note: "Qr Chat Owner Langsung"
    }
};

// Contact information
const contactInfo = {
    whatsapp: "+62 882-9503-9238",
    telegram: "t.me/zarrstoreid",
    instagram: "@mee.zarr",
    tiktok: "@iki.sizarr",
    email: "zaenulenka@gmail.com",
    github: "meezarr715-ux"
};
