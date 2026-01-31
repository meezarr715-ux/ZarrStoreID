// Data produk untuk ZarrStore
// Data ini dapat dikustomisasi dengan menambah, menghapus, atau mengubah produk
// Struktur folder: setiap kategori produk memiliki folder sendiri dengan ID unik dimulai dari 1

const productsData = {
    categories: [
        {
            id: 1,
            name: "Aplikasi Premium",
            folder: "app-premium",
            description: "Berbagai aplikasi premium dengan fitur lengkap"
        },
        {
            id: 2,
            name: "Sewa Bot WhatsApp",
            folder: "wa-bot",
            description: "Layanan sewa bot WhatsApp untuk berbagai kebutuhan"
        },
        {
            id: 3,
            name: "Top Up All Game",
            folder: "game-topup",
            description: "Top up untuk semua game populer"
        },
        {
            id: 4,
            name: "Isi Pulsa/Kuota",
            folder: "pulsa-kuota",
            description: "Pulsa dan kuota semua operator"
        }
    ],
    
    products: [
        // Produk dalam folder Aplikasi Premium (folder: app-premium)
        {
            id: 1,
            categoryId: 1,
            folder: "app-premium",
            name: "YouTube Premium",
            description: "YouTube Premium 1 bulan, no ads, background play, dan YouTube Music",
            price: 25000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1690562897/youtube-premium.jpg",
            details: "Dapatkan akses YouTube Premium selama 1 bulan penuh. Fitur: bebas iklan, download video, putar di latar belakang, dan akses ke YouTube Music Premium."
        },
        {
            id: 2,
            categoryId: 1,
            folder: "app-premium",
            name: "Netflix Premium",
            description: "Netflix Premium 1 bulan, 4K UHD, 4 screen simultan",
            price: 35000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1690562897/netflix-premium.jpg",
            details: "Akun Netflix Premium dengan kualitas 4K UHD, dapat digunakan di 4 perangkat sekaligus. Bebas tonton semua konten tanpa batas."
        },
        {
            id: 3,
            categoryId: 1,
            folder: "app-premium",
            name: "Spotify Premium",
            description: "Spotify Premium 1 bulan, no ads, download lagu, kualitas tinggi",
            price: 20000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1690562897/spotify-premium.jpg",
            details: "Nikmati musik tanpa iklan, download lagu untuk dengarkan offline, dan kualitas audio tinggi. Family plan juga tersedia."
        },
        
        // Produk dalam folder Sewa Bot WhatsApp (folder: wa-bot)
        {
            id: 1,
            categoryId: 2,
            folder: "wa-bot",
            name: "Bot WhatsApp Business",
            description: "Bot untuk auto reply, broadcast, dan catalog produk",
            price: 50000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1690562897/wa-business-bot.jpg",
            details: "Bot WhatsApp untuk keperluan bisnis. Fitur: auto reply, broadcast pesan, catalog produk otomatis, dan integrasi dengan website."
        },
        {
            id: 2,
            categoryId: 2,
            folder: "wa-bot",
            name: "Bot WhatsApp Group Manager",
            description: "Bot untuk mengelola grup WhatsApp secara otomatis",
            price: 40000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1690562897/wa-group-bot.jpg",
            details: "Kelola grup WhatsApp Anda dengan mudah. Fitur: auto welcome member, anti spam, auto kick, dan pengaturan admin otomatis."
        },
        
        // Produk dalam folder Top Up All Game (folder: game-topup)
        {
            id: 1,
            categoryId: 3,
            folder: "game-topup",
            name: "Mobile Legends Diamonds",
            description: "Top up Diamond Mobile Legends semua server",
            price: 15000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1690562897/ml-diamonds.jpg",
            details: "Top up Diamond Mobile Legends mulai dari 5 Diamond hingga 2010 Diamond. Proses instan, semua server tersedia."
        },
        {
            id: 2,
            categoryId: 3,
            folder: "game-topup",
            name: "Free Fire Diamonds",
            description: "Top up Diamond Free Fire semua server",
            price: 15000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1690562897/ff-diamonds.jpg",
            details: "Diamond Free Fire dengan harga terjangkau. Proses cepat dan aman. Support semua server termasuk Indonesia, Singapore, dan Thailand."
        },
        {
            id: 3,
            categoryId: 3,
            folder: "game-topup",
            name: "PUBG Mobile UC",
            description: "Top up UC PUBG Mobile semua region",
            price: 20000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1690562897/pubg-uc.jpg",
            details: "Unknown Cash (UC) untuk PUBG Mobile. Tersedia untuk semua region termasuk Asia, Eropa, dan Amerika. Proses instan setelah pembayaran."
        },
        
        // Produk dalam folder Isi Pulsa/Kuota (folder: pulsa-kuota)
        {
            id: 1,
            categoryId: 4,
            folder: "pulsa-kuota",
            name: "Pulsa All Operator",
            description: "Pulsa semua operator (Telkomsel, XL, Indosat, 3, dll)",
            price: 10000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1690562897/pulsa-all.jpg",
            details: "Isi pulsa untuk semua operator di Indonesia. Proses instan 24/7. Minimal pembelian Rp10.000."
        },
        {
            id: 2,
            categoryId: 4,
            folder: "pulsa-kuota",
            name: "Kuota Internet 30 Hari",
            description: "Paket kuota internet 30 hari semua operator",
            price: 50000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1690562897/kuota-30hari.jpg",
            details: "Paket kuota internet dengan masa aktif 30 hari. Tersedia untuk Telkomsel, XL, Indosat, 3, Smartfren, dan Axis. Kuota mulai dari 10GB hingga 50GB."
        }
    ],
    
    // Data kontak
    contacts: [
        {
            id: 1,
            type: "whatsapp",
            label: "WhatsApp CS",
            value: "+62 882-9503-9238",
            icon: "fab fa-whatsapp",
            color: "#25D366",
            link: "https://wa.me/6288295039238"
        },
        {
            id: 2,
            type: "telegram",
            label: "Telegram",
            value: "t.me/zarrstoreid",
            icon: "fab fa-telegram",
            color: "#0088cc",
            link: "https://t.me/zarrstoreid"
        },
        {
            id: 3,
            type: "instagram",
            label: "Instagram",
            value: "@mee.zarr",
            icon: "fab fa-instagram",
            color: "#E4405F",
            link: "https://instagram.com/mee.zarr"
        },
        {
            id: 4,
            type: "tiktok",
            label: "TikTok",
            value: "@iki.sizarr",
            icon: "fab fa-tiktok",
            color: "#000000",
            link: "https://tiktok.com/@iki.sizarr"
        },
        {
            id: 5,
            type: "email",
            label: "Email",
            value: "zaenulenka@gmail.com",
            icon: "fas fa-envelope",
            color: "#EA4335",
            link: "mailto:zaenulenka@gmail.com"
        },
        {
            id: 6,
            type: "github",
            label: "GitHub",
            value: "meezarr715-ux",
            icon: "fab fa-github",
            color: "#181717",
            link: "https://github.com/meezarr715-ux"
        }
    ],
    
    // Data pembayaran
    paymentMethods: [
        {
            id: 1,
            name: "Dana",
            icon: "fas fa-wallet",
            account: "088295039238",
            note: "Transfer ke nomor Dana di atas"
        },
        {
            id: 2,
            name: "OVO/Gopay",
            icon: "fas fa-mobile-alt",
            account: "088295039238",
            note: "Transfer ke nomor OVO/Gopay di atas"
        },
        {
            id: 3,
            name: "QRIS",
            icon: "fas fa-qrcode",
            account: "",
            note: "QR Coming Soon / Chat Owner Langsung"
        }
    ]
};

// Fungsi untuk mendapatkan ID berikutnya di folder tertentu
function getNextIdInFolder(folderName) {
    const productsInFolder = productsData.products.filter(product => product.folder === folderName);
    if (productsInFolder.length === 0) return 1;
    
    const maxId = Math.max(...productsInFolder.map(product => product.id));
    return maxId + 1;
}

// Fungsi untuk menambahkan produk baru
function addProduct(product) {
    // Generate ID otomatis berdasarkan folder
    product.id = getNextIdInFolder(product.folder);
    productsData.products.push(product);
    return product;
}

// Fungsi untuk menghapus produk berdasarkan ID dan folder
function removeProduct(folderName, productId) {
    const index = productsData.products.findIndex(p => p.folder === folderName && p.id === productId);
    if (index !== -1) {
        productsData.products.splice(index, 1);
        return true;
    }
    return false;
}

// Fungsi untuk mengupdate produk
function updateProduct(folderName, productId, updatedData) {
    const index = productsData.products.findIndex(p => p.folder === folderName && p.id === productId);
    if (index !== -1) {
        productsData.products[index] = { ...productsData.products[index], ...updatedData };
        return productsData.products[index];
    }
    return null;
}

// Fungsi untuk menambahkan kategori baru
function addCategory(category) {
    // Generate ID otomatis untuk kategori
    const maxId = Math.max(...productsData.categories.map(cat => cat.id));
    category.id = maxId + 1;
    productsData.categories.push(category);
    return category;
}