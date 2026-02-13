// ==============================================
// DATA PRODUK ZARRSTORE
// Dapat dikustomisasi dengan mudah melalui file ini
// ==============================================

const zarrStoreData = {
    // FOLDER / KATEGORI PRODUK
    folders: [
        {
            id: 1,
            name: "Aplikasi Premium",
            slug: "aplikasi-premium",
            description: "Berbagai aplikasi premium berkualitas dengan fitur lengkap",
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/apps_folder.jpg",
            icon: "fa-solid fa-cube",
            productCount: 0 // Akan dihitung otomatis
        },
        {
            id: 2,
            name: "Sewa Bot WhatsApp",
            slug: "sewa-bot-wa",
            description: "Layanan sewa bot WhatsApp untuk berbagai keperluan bisnis",
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/bot_folder.jpg",
            icon: "fa-brands fa-whatsapp",
            productCount: 0
        },
        {
            id: 3,
            name: "Top Up All Game",
            slug: "top-up-game",
            description: "Top up diamond, UC, CP, dan mata uang game lainnya",
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/game_folder.jpg",
            icon: "fa-solid fa-gamepad",
            productCount: 0
        },
        {
            id: 4,
            name: "Isi Pulsa/Kuota",
            slug: "pulsa-kuota",
            description: "Isi pulsa dan kuota internet semua operator termurah",
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/pulsa_folder.jpg",
            icon: "fa-solid fa-mobile-screen-button",
            productCount: 0
        }
    ],

    // SUB KATEGORI PER FOLDER
    subCategories: {
        1: [ // Aplikasi Premium
            { id: 1, name: "Video Editing", folderId: 1 },
            { id: 2, name: "Photo Editing", folderId: 1 },
            { id: 3, name: "Office & Productivity", folderId: 1 },
            { id: 4, name: "Design & Creative", folderId: 1 },
            { id: 5, name: "Utilities", folderId: 1 }
        ],
        2: [ // Sewa Bot WhatsApp
            { id: 1, name: "Marketing Bot", folderId: 2 },
            { id: 2, name: "Customer Service", folderId: 2 },
            { id: 3, name: "Auto Reply", folderId: 2 },
            { id: 4, name: "Broadcast Bot", folderId: 2 },
            { id: 5, name: "Custom Bot", folderId: 2 }
        ],
        3: [ // Top Up Game
            { id: 1, name: "Mobile Legends", folderId: 3 },
            { id: 2, name: "Free Fire", folderId: 3 },
            { id: 3, name: "PUBG Mobile", folderId: 3 },
            { id: 4, name: "Valorant", folderId: 3 },
            { id: 5, name: "Genshin Impact", folderId: 3 },
            { id: 6, name: "Honor of Kings", folderId: 3 },
            { id: 7, name: "Game Lainnya", folderId: 3 }
        ],
        4: [ // Pulsa/Kuota
            { id: 1, name: "Pulsa All Operator", folderId: 4 },
            { id: 2, name: "Paket Data", folderId: 4 },
            { id: 3, name: "Voucher Game", folderId: 4 },
            { id: 4, name: "E-Wallet", folderId: 4 }
        ]
    },

    // DAFTAR PRODUK
    products: [
        // ========== FOLDER 1: APLIKASI PREMIUM ==========
        {
            id: 1,
            folderId: 1,
            subCategoryId: 1,
            name: "Adobe Premiere Pro 2024",
            description: "Software editing video profesional dengan fitur lengkap untuk pembuatan konten berkualitas tinggi. Termasuk plugin premium dan template eksklusif. Support Windows & Mac.",
            price: 150000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/premiere_pro.jpg",
            badge: "Best Seller",
            featured: true,
            stock: 999,
            sold: 1250
        },
        {
            id: 2,
            folderId: 1,
            subCategoryId: 1,
            name: "Final Cut Pro X",
            description: "Aplikasi editing video premium untuk Mac dengan performa optimal dan workflow yang efisien. Cocok untuk content creator profesional.",
            price: 200000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/final_cut.jpg",
            badge: "Premium",
            featured: true,
            stock: 500,
            sold: 850
        },
        {
            id: 3,
            folderId: 1,
            subCategoryId: 2,
            name: "Adobe Photoshop 2024",
            description: "Software editing foto terbaik dengan AI integration untuk hasil maksimal. Dilengkapi Neural Filters dan Generative Fill.",
            price: 120000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/photoshop.jpg",
            badge: "Populer",
            featured: true,
            stock: 1500,
            sold: 2100
        },
        {
            id: 4,
            folderId: 1,
            subCategoryId: 3,
            name: "Microsoft Office 365",
            description: "Paket lengkap aplikasi produktivitas dengan lisensi 1 tahun untuk semua perangkat. Include Word, Excel, PowerPoint, OneDrive.",
            price: 80000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/office365.jpg",
            badge: "Hemat",
            featured: false,
            stock: 2000,
            sold: 3500
        },
        {
            id: 5,
            folderId: 1,
            subCategoryId: 4,
            name: "Adobe After Effects",
            description: "Aplikasi motion graphics dan VFX profesional untuk kebutuhan visual efek tingkat Hollywood.",
            price: 180000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/after_effects.jpg",
            badge: null,
            featured: false,
            stock: 750,
            sold: 620
        },
        
        // ========== FOLDER 2: SEWA BOT WHATSAPP ==========
        {
            id: 6,
            folderId: 2,
            subCategoryId: 1,
            name: "Bot Marketing Pro",
            description: "Bot WhatsApp untuk otomatisasi marketing dengan fitur broadcast massal, auto-reply cerdas, dan analytics real-time.",
            price: 300000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/marketing_bot.jpg",
            badge: "Hot",
            featured: true,
            stock: 100,
            sold: 450
        },
        {
            id: 7,
            folderId: 2,
            subCategoryId: 2,
            name: "Customer Service Bot",
            description: "Bot untuk layanan pelanggan 24/7 dengan integrasi database dan multi-language support. Bisa di-custom sesuai brand.",
            price: 250000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/cs_bot.jpg",
            badge: "Best Deal",
            featured: true,
            stock: 150,
            sold: 380
        },
        {
            id: 8,
            folderId: 2,
            subCategoryId: 5,
            name: "Custom Bot Development",
            description: "Pembuatan bot WhatsApp custom sesuai kebutuhan spesifik bisnis Anda. Fitur unlimited sesuai permintaan.",
            price: 500000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/custom_bot.jpg",
            badge: "Premium",
            featured: true,
            stock: 50,
            sold: 120
        },
        {
            id: 9,
            folderId: 2,
            subCategoryId: 3,
            name: "Auto Reply Bot",
            description: "Bot auto reply sederhana untuk UMKM dengan fitur pesan otomatis, kata kunci custom, dan manajemen kontak.",
            price: 150000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/autoreply_bot.jpg",
            badge: null,
            featured: false,
            stock: 200,
            sold: 550
        },
        
        // ========== FOLDER 3: TOP UP GAME ==========
        {
            id: 10,
            folderId: 3,
            subCategoryId: 1,
            name: "Mobile Legends Diamond",
            description: "Top up Diamond Mobile Legends semua server dengan proses instan dan aman. Harga termurah se-Indonesia.",
            price: 15000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/ml_diamond.jpg",
            badge: "Terlaris",
            featured: true,
            stock: 10000,
            sold: 15000
        },
        {
            id: 11,
            folderId: 3,
            subCategoryId: 2,
            name: "Free Fire Diamond",
            description: "Top up Diamond Free Fire mulai dari 5 Diamond hingga paket besar. Proses cepat max 5 menit.",
            price: 10000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/ff_diamond.jpg",
            badge: "Murah",
            featured: true,
            stock: 15000,
            sold: 25000
        },
        {
            id: 12,
            folderId: 3,
            subCategoryId: 3,
            name: "PUBG Mobile UC",
            description: "Top up Unknown Cash (UC) PUBG Mobile untuk semua region. Garansi aman dan termurah.",
            price: 20000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/pubg_uc.jpg",
            badge: "Hot",
            featured: true,
            stock: 8000,
            sold: 12000
        },
        {
            id: 13,
            folderId: 3,
            subCategoryId: 5,
            name: "Genshin Impact Genesis Crystal",
            description: "Top up Genesis Crystal Genshin Impact dengan bonus extra crystal untuk pembelian paket besar.",
            price: 25000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/genshin_crystal.jpg",
            badge: "Bonus",
            featured: false,
            stock: 5000,
            sold: 6500
        },
        {
            id: 14,
            folderId: 3,
            subCategoryId: 4,
            name: "Valorant Points",
            description: "Top up Valorant Points (VP) untuk pembelian skin, battle pass, dan konten lainnya.",
            price: 30000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/valorant_vp.jpg",
            badge: null,
            featured: false,
            stock: 6000,
            sold: 4300
        },
        
        // ========== FOLDER 4: PULSA/KUOTA ==========
        {
            id: 15,
            folderId: 4,
            subCategoryId: 1,
            name: "Pulsa All Operator 10rb",
            description: "Isi pulsa semua operator (Telkomsel, XL, Indosat, Three, Smartfren) dengan harga spesial. Proses 24 jam.",
            price: 10000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/pulsa_10rb.jpg",
            badge: "Best Seller",
            featured: true,
            stock: 20000,
            sold: 50000
        },
        {
            id: 16,
            folderId: 4,
            subCategoryId: 1,
            name: "Pulsa All Operator 25rb",
            description: "Isi pulsa 25rb untuk semua operator dengan diskon spesial. Cocok untuk kebutuhan sehari-hari.",
            price: 25000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/pulsa_25rb.jpg",
            badge: "Hemat",
            featured: true,
            stock: 15000,
            sold: 35000
        },
        {
            id: 17,
            folderId: 4,
            subCategoryId: 2,
            name: "Paket Data 30GB 30 Hari",
            description: "Paket internet 30GB dengan masa aktif 30 hari untuk semua operator. Kecepatan full tanpa throttling.",
            price: 75000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/data_30gb.jpg",
            badge: "Best Deal",
            featured: true,
            stock: 5000,
            sold: 8200
        },
        {
            id: 18,
            folderId: 4,
            subCategoryId: 4,
            name: "Top Up Dana",
            description: "Isi saldo Dana dengan proses instan. Minimal top up 10rb.",
            price: 10000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/dana.jpg",
            badge: "Instan",
            featured: false,
            stock: 10000,
            sold: 15000
        },
        {
            id: 19,
            folderId: 4,
            subCategoryId: 4,
            name: "Top Up OVO",
            description: "Isi saldo OVO dengan proses cepat. Bisa untuk bayar tagihan dan transaksi lainnya.",
            price: 10000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/ovo.jpg",
            badge: null,
            featured: false,
            stock: 8000,
            sold: 12000
        },
        {
            id: 20,
            folderId: 4,
            subCategoryId: 4,
            name: "Top Up GoPay",
            description: "Isi saldo GoPay dengan proses instan. Bisa untuk GoFood, GoRide, dan lainnya.",
            price: 10000,
            thumbnail: "https://res.cloudinary.com/demo/image/upload/v1597246475/gopay.jpg",
            badge: null,
            featured: false,
            stock: 8000,
            sold: 11000
        }
    ]
};

// ==============================================
// FUNGSI-FUNGSI UNTUK MENGELOLA PRODUK
// Gunakan fungsi ini untuk kustomisasi produk
// ==============================================

// Hitung otomatis jumlah produk per folder
function updateProductCounts() {
    zarrStoreData.folders.forEach(folder => {
        folder.productCount = zarrStoreData.products.filter(p => p.folderId === folder.id).length;
    });
}
updateProductCounts();

// ========== FUNGSI UNTUK FOLDER ==========
function addFolder(name, description, thumbnail, icon = "fa-solid fa-folder") {
    const newId = zarrStoreData.folders.length > 0 
        ? Math.max(...zarrStoreData.folders.map(f => f.id)) + 1 
        : 1;
    
    const newFolder = {
        id: newId,
        name: name,
        slug: name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
        description: description,
        thumbnail: thumbnail || "https://res.cloudinary.com/demo/image/upload/v1597246475/default_folder.jpg",
        icon: icon,
        productCount: 0
    };
    
    zarrStoreData.folders.push(newFolder);
    zarrStoreData.subCategories[newId] = [];
    
    return newFolder;
}

function updateFolder(folderId, updates) {
    const index = zarrStoreData.folders.findIndex(f => f.id === folderId);
    if (index !== -1) {
        zarrStoreData.folders[index] = { ...zarrStoreData.folders[index], ...updates };
        return zarrStoreData.folders[index];
    }
    return null;
}

function deleteFolder(folderId) {
    // Hapus semua produk dalam folder
    zarrStoreData.products = zarrStoreData.products.filter(p => p.folderId !== folderId);
    // Hapus sub kategori
    delete zarrStoreData.subCategories[folderId];
    // Hapus folder
    const index = zarrStoreData.folders.findIndex(f => f.id === folderId);
    if (index !== -1) {
        zarrStoreData.folders.splice(index, 1);
        return true;
    }
    return false;
}

// ========== FUNGSI UNTUK SUB KATEGORI ==========
function addSubCategory(folderId, subCategoryName) {
    if (!zarrStoreData.subCategories[folderId]) {
        zarrStoreData.subCategories[folderId] = [];
    }
    
    const newId = zarrStoreData.subCategories[folderId].length > 0 
        ? Math.max(...zarrStoreData.subCategories[folderId].map(sc => sc.id)) + 1 
        : 1;
    
    const newSubCategory = {
        id: newId,
        name: subCategoryName,
        folderId: folderId
    };
    
    zarrStoreData.subCategories[folderId].push(newSubCategory);
    return newSubCategory;
}

function updateSubCategory(folderId, subCategoryId, newName) {
    const index = zarrStoreData.subCategories[folderId]?.findIndex(sc => sc.id === subCategoryId);
    if (index !== -1) {
        zarrStoreData.subCategories[folderId][index].name = newName;
        return zarrStoreData.subCategories[folderId][index];
    }
    return null;
}

function deleteSubCategory(folderId, subCategoryId) {
    // Hapus semua produk dalam sub kategori
    zarrStoreData.products = zarrStoreData.products.filter(p => 
        !(p.folderId === folderId && p.subCategoryId === subCategoryId)
    );
    // Hapus sub kategori
    if (zarrStoreData.subCategories[folderId]) {
        const index = zarrStoreData.subCategories[folderId].findIndex(sc => sc.id === subCategoryId);
        if (index !== -1) {
            zarrStoreData.subCategories[folderId].splice(index, 1);
            return true;
        }
    }
    return false;
}

// ========== FUNGSI UNTUK PRODUK ==========
function addProduct(folderId, subCategoryId, name, description, price, thumbnail, badge = null, featured = false) {
    // Cari ID produk terakhir dalam folder yang sama
    const folderProducts = zarrStoreData.products.filter(p => p.folderId === folderId);
    const newId = folderProducts.length > 0 
        ? Math.max(...folderProducts.map(p => p.id)) + 1 
        : 1;
    
    const newProduct = {
        id: newId,
        folderId: folderId,
        subCategoryId: subCategoryId,
        name: name,
        description: description,
        price: price,
        thumbnail: thumbnail || "https://res.cloudinary.com/demo/image/upload/v1597246475/default_product.jpg",
        badge: badge,
        featured: featured,
        stock: 999,
        sold: 0
    };
    
    zarrStoreData.products.push(newProduct);
    updateProductCounts();
    
    return newProduct;
}

function updateProduct(productId, updates) {
    const index = zarrStoreData.products.findIndex(p => p.id === productId);
    if (index !== -1) {
        zarrStoreData.products[index] = { ...zarrStoreData.products[index], ...updates };
        return zarrStoreData.products[index];
    }
    return null;
}

function deleteProduct(productId) {
    const index = zarrStoreData.products.findIndex(p => p.id === productId);
    if (index !== -1) {
        zarrStoreData.products.splice(index, 1);
        updateProductCounts();
        return true;
    }
    return false;
}

function getProductById(productId) {
    return zarrStoreData.products.find(p => p.id === productId);
}

function getProductsByFolder(folderId) {
    return zarrStoreData.products.filter(p => p.folderId === folderId);
}

function getProductsBySubCategory(folderId, subCategoryId) {
    return zarrStoreData.products.filter(p => 
        p.folderId === folderId && p.subCategoryId === subCategoryId
    );
}

function searchProducts(keyword) {
    if (!keyword || keyword.trim() === '') {
        return zarrStoreData.products;
    }
    
    const searchTerm = keyword.toLowerCase().trim();
    return zarrStoreData.products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm) ||
        getFolderName(product.folderId).toLowerCase().includes(searchTerm) ||
        getSubCategoryName(product.folderId, product.subCategoryId).toLowerCase().includes(searchTerm)
    );
}

// ========== FUNGSI HELPER ==========
function getFolderName(folderId) {
    const folder = zarrStoreData.folders.find(f => f.id === folderId);
    return folder ? folder.name : 'Unknown';
}

function getSubCategoryName(folderId, subCategoryId) {
    const subCategory = zarrStoreData.subCategories[folderId]?.find(sc => sc.id === subCategoryId);
    return subCategory ? subCategory.name : 'Unknown';
}

function getFolderThumbnail(folderId) {
    const folder = zarrStoreData.folders.find(f => f.id === folderId);
    return folder ? folder.thumbnail : 'https://res.cloudinary.com/demo/image/upload/v1597246475/default_folder.jpg';
}

function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = zarrStoreData;
}