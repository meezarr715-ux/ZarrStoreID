// Main JavaScript untuk ZarrStore

// DOM Elements
const loadingScreen = document.getElementById('loadingScreen');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const productSearch = document.getElementById('productSearch');
const categoriesContainer = document.getElementById('categoriesContainer');
const productsContainer = document.getElementById('productsContainer');
const orderModal = document.getElementById('orderModal');
const closeModal = document.getElementById('closeModal');
const orderForm = document.getElementById('orderForm');
const modalProductInfo = document.getElementById('modalProductInfo');
const paymentDetails = document.getElementById('paymentDetails');
const paymentMethod = document.getElementById('paymentMethod');

// State variables
let currentCategory = 'all';
let currentProduct = null;
let filteredProducts = [...zarrStoreProducts.products];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
    }, 2000);
    
    // Initialize event listeners
    initEventListeners();
    
    // Load categories and products
    loadCategories();
    loadProducts();
    
    // Set active section based on URL hash
    const hash = window.location.hash || '#home';
    setActiveSection(hash.substring(1));
    
    // Highlight active nav link
    highlightActiveNavLink(hash.substring(1));
});

// Initialize all event listeners
function initEventListeners() {
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            
            // Close mobile menu if open
            navbar.classList.remove('active');
            
            // Set active section
            setActiveSection(sectionId);
            
            // Highlight active nav link
            highlightActiveNavLink(sectionId);
            
            // Update URL hash
            window.location.hash = sectionId;
        });
    });
    
    // Product search
    productSearch.addEventListener('input', searchProducts);
    
    // Order modal
    closeModal.addEventListener('click', closeOrderModal);
    
    // Close modal when clicking outside
    orderModal.addEventListener('click', function(e) {
        if (e.target === orderModal) {
            closeOrderModal();
        }
    });
    
    // Payment method change
    paymentMethod.addEventListener('change', updatePaymentDetails);
    
    // Order form submission
    orderForm.addEventListener('submit', submitOrder);
}

// Toggle mobile menu
function toggleMobileMenu() {
    navbar.classList.toggle('active');
}

// Set active section
function setActiveSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
        }
    });
}

// Highlight active nav link
function highlightActiveNavLink(sectionId) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
}

// Load categories
function loadCategories() {
    // Clear container
    categoriesContainer.innerHTML = '';
    
    // Add "All Products" button
    const allButton = document.createElement('button');
    allButton.className = `category-btn ${currentCategory === 'all' ? 'active' : ''}`;
    allButton.textContent = 'Semua Produk';
    allButton.dataset.category = 'all';
    allButton.addEventListener('click', function() {
        setCurrentCategory('all');
    });
    categoriesContainer.appendChild(allButton);
    
    // Add folder categories
    zarrStoreProducts.folders.forEach(folder => {
        const button = document.createElement('button');
        button.className = `category-btn ${currentCategory === folder.id ? 'active' : ''}`;
        button.textContent = folder.name;
        button.dataset.category = folder.id;
        button.addEventListener('click', function() {
            setCurrentCategory(folder.id);
        });
        categoriesContainer.appendChild(button);
    });
}

// Set current category
function setCurrentCategory(categoryId) {
    currentCategory = categoryId;
    
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === categoryId) {
            btn.classList.add('active');
        }
    });
    
    // Filter products
    if (categoryId === 'all') {
        filteredProducts = [...zarrStoreProducts.products];
    } else {
        filteredProducts = zarrStoreProducts.products.filter(product => product.folderId === categoryId);
    }
    
    // Load filtered products
    loadProducts();
}

// Load products
function loadProducts() {
    // Clear container
    productsContainer.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        const noProducts = document.createElement('div');
        noProducts.className = 'no-products';
        noProducts.textContent = 'Tidak ada produk ditemukan untuk kategori ini.';
        productsContainer.appendChild(noProducts);
        return;
    }
    
    // Create product cards
    filteredProducts.forEach(product => {
        const folder = zarrStoreProducts.folders.find(f => f.id === product.folderId);
        const subCategory = zarrStoreProducts.subCategories[product.folderId]?.find(s => s.id === product.subCategoryId);
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.productId = product.id;
        
        // Format price
        const formattedPrice = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(product.price);
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.thumbnail}" alt="${product.name}" onerror="this.src='https://res.cloudinary.com/demo/image/upload/v1599999999/sample.jpg'">
            </div>
            <div class="product-info">
                <span class="product-category">${folder?.name || 'Produk'}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">${formattedPrice}</div>
                <p class="product-description">${product.description}</p>
                ${product.nominal ? `<p><strong>Nominal:</strong> ${product.nominal.join(', ')}</p>` : ''}
                <button class="btn-order" data-product-id="${product.id}">Pesan Sekarang</button>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
    
    // Add event listeners to order buttons
    document.querySelectorAll('.btn-order').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.productId;
            openOrderModal(productId);
        });
    });
}

// Search products
function searchProducts() {
    const searchTerm = productSearch.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        // Reset to current category filter
        if (currentCategory === 'all') {
            filteredProducts = [...zarrStoreProducts.products];
        } else {
            filteredProducts = zarrStoreProducts.products.filter(product => product.folderId === currentCategory);
        }
    } else {
        // Filter by search term
        filteredProducts = zarrStoreProducts.products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                                 product.description.toLowerCase().includes(searchTerm) ||
                                 (product.folderId && zarrStoreProducts.folders.find(f => f.id === product.folderId)?.name.toLowerCase().includes(searchTerm));
            
            // Apply category filter if not "all"
            if (currentCategory !== 'all') {
                return matchesSearch && product.folderId === currentCategory;
            }
            
            return matchesSearch;
        });
    }
    
    // Load filtered products
    loadProducts();
}

// Open order modal
function openOrderModal(productId) {
    // Find product
    currentProduct = zarrStoreProducts.products.find(p => p.id === productId);
    
    if (!currentProduct) return;
    
    // Find folder and subcategory
    const folder = zarrStoreProducts.folders.find(f => f.id === currentProduct.folderId);
    const subCategory = zarrStoreProducts.subCategories[currentProduct.folderId]?.find(s => s.id === currentProduct.subCategoryId);
    
    // Format price
    const formattedPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(currentProduct.price);
    
    // Update modal product info
    modalProductInfo.innerHTML = `
        <h4 class="modal-product-name">${currentProduct.name}</h4>
        <div class="modal-product-price">${formattedPrice}</div>
        <p><strong>Kategori:</strong> ${folder?.name || 'Produk'} ${subCategory ? `- ${subCategory.name}` : ''}</p>
    `;
    
    // Reset form
    orderForm.reset();
    paymentDetails.innerHTML = '';
    
    // Show modal
    orderModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close order modal
function closeOrderModal() {
    orderModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentProduct = null;
}

// Update payment details
function updatePaymentDetails() {
    const method = paymentMethod.value;
    paymentDetails.innerHTML = '';
    
    if (!method) return;
    
    let detailsHTML = '';
    
    if (method === 'dana') {
        detailsHTML = `
            <p><strong>Bayar ke Dana:</strong></p>
            <p>Nama: ${paymentInfo.dana.name}</p>
            <p>Nomor: ${paymentInfo.dana.number}</p>
        `;
    } else if (method === 'ovo') {
        detailsHTML = `
            <p><strong>Bayar ke OVO:</strong></p>
            <p>Nama: ${paymentInfo.ovo.name}</p>
            <p>Nomor: ${paymentInfo.ovo.number}</p>
        `;
    } else if (method === 'gopay') {
        detailsHTML = `
            <p><strong>Bayar ke Gopay:</strong></p>
            <p>Nama: ${paymentInfo.gopay.name}</p>
            <p>Nomor: ${paymentInfo.gopay.number}</p>
        `;
    } else if (method === 'qris') {
        detailsHTML = `
            <p><strong>QRIS:</strong></p>
            <p>${paymentInfo.qris.note}</p>
        `;
    }
    
    paymentDetails.innerHTML = detailsHTML;
}

// Submit order
function submitOrder(e) {
    e.preventDefault();
    
    if (!currentProduct) {
        alert('Produk tidak ditemukan. Silakan coba lagi.');
        return;
    }
    
    const customerName = document.getElementById('customerName').value;
    const customerContact = document.getElementById('customerContact').value;
    const paymentMethodValue = paymentMethod.value;
    
    if (!customerName || !customerContact || !paymentMethodValue) {
        alert('Harap isi semua data dengan lengkap.');
        return;
    }
    
    // Find folder and subcategory
    const folder = zarrStoreProducts.folders.find(f => f.id === currentProduct.folderId);
    const subCategory = zarrStoreProducts.subCategories[currentProduct.folderId]?.find(s => s.id === currentProduct.subCategoryId);
    
    // Format price
    const formattedPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(currentProduct.price);
    
    // Get payment details
    let paymentDetailsText = '';
    if (paymentMethodValue === 'dana') {
        paymentDetailsText = `Dana (${paymentInfo.dana.name}: ${paymentInfo.dana.number})`;
    } else if (paymentMethodValue === 'ovo') {
        paymentDetailsText = `OVO (${paymentInfo.ovo.name}: ${paymentInfo.ovo.number})`;
    } else if (paymentMethodValue === 'gopay') {
        paymentDetailsText = `Gopay (${paymentInfo.gopay.name}: ${paymentInfo.gopay.number})`;
    } else if (paymentMethodValue === 'qris') {
        paymentDetailsText = `QRIS (${paymentInfo.qris.note})`;
    }
    
    // Create WhatsApp message
    const message = `Halo ZarrStore, saya ingin memesan produk berikut:

*Produk:* ${currentProduct.name}
*Harga:* ${formattedPrice}
*Kategori:* ${folder?.name || 'Produk'} ${subCategory ? `- ${subCategory.name}` : ''}

*Data Pemesan:*
Nama: ${customerName}
Kontak: ${customerContact}

*Metode Pembayaran:* ${paymentDetailsText}

Saya sudah melakukan pembayaran sesuai dengan instruksi di atas. Mohon segera diproses pesanan saya. Terima kasih.`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}?text=${encodedMessage}`, '_blank');
    
    // Close modal
    closeOrderModal();
    
    // Show success message
    alert('Terima kasih! Anda akan diarahkan ke WhatsApp untuk mengirim detail pesanan. Pastikan Anda sudah melakukan pembayaran sebelum mengirim pesan.');
}

// Handle hash change for navigation
window.addEventListener('hashchange', function() {
    const sectionId = window.location.hash.substring(1) || 'home';
    setActiveSection(sectionId);
    highlightActiveNavLink(sectionId);
});

// Handle window resize for responsive design
window.addEventListener('resize', function() {
    // Close mobile menu on large screens
    if (window.innerWidth > 768) {
        navbar.classList.remove('active');
    }
});l() {
    orderModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentProduct = null;
}

// Update payment details
function updatePaymentDetails() {
    const method = paymentMethod.value;
    paymentDetails.innerHTML = '';
    
    if (!method) return;
    
    let detailsHTML = '';
    
    if (method === 'dana') {
        detailsHTML = `
            <p><strong>Bayar ke Dana:</strong></p>
            <p>Nama: ${paymentInfo.dana.name}</p>
            <p>Nomor: ${paymentInfo.dana.number}</p>
        `;
    } else if (method === 'ovo') {
        detailsHTML = `
            <p><strong>Bayar ke OVO:</strong></p>
            <p>Nama: ${paymentInfo.ovo.name}</p>
            <p>Nomor: ${paymentInfo.ovo.number}</p>
        `;
    } else if (method === 'gopay') {
        detailsHTML = `
            <p><strong>Bayar ke Gopay:</strong></p>
            <p>Nama: ${paymentInfo.gopay.name}</p>
            <p>Nomor: ${paymentInfo.gopay.number}</p>
        `;
    } else if (method === 'qris') {
        detailsHTML = `
            <p><strong>QRIS:</strong></p>
            <p>${paymentInfo.qris.note}</p>
        `;
    }
    
    paymentDetails.innerHTML = detailsHTML;
}

// Submit order
function submitOrder(e) {
    e.preventDefault();
    
    if (!currentProduct) {
        alert('Produk tidak ditemukan. Silakan coba lagi.');
        return;
    }
    
    const customerName = document.getElementById('customerName').value;
    const customerContact = document.getElementById('customerContact').value;
    const paymentMethodValue = paymentMethod.value;
    
    if (!customerName || !customerContact || !paymentMethodValue) {
        alert('Harap isi semua data dengan lengkap.');
        return;
    }
    
    // Find folder and subcategory
    const folder = zarrStoreProducts.folders.find(f => f.id === currentProduct.folderId);
    const subCategory = zarrStoreProducts.subCategories[currentProduct.folderId]?.find(s => s.id === currentProduct.subCategoryId);
    
    // Format price
    const formattedPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(currentProduct.price);
    
    // Get payment details
    let paymentDetailsText = '';
    if (paymentMethodValue === 'dana') {
        paymentDetailsText = `Dana (${paymentInfo.dana.name}: ${paymentInfo.dana.number})`;
    } else if (paymentMethodValue === 'ovo') {
        paymentDetailsText = `OVO (${paymentInfo.ovo.name}: ${paymentInfo.ovo.number})`;
    } else if (paymentMethodValue === 'gopay') {
        paymentDetailsText = `Gopay (${paymentInfo.gopay.name}: ${paymentInfo.gopay.number})`;
    } else if (paymentMethodValue === 'qris') {
        paymentDetailsText = `QRIS (${paymentInfo.qris.note})`;
    }
    
    // Create WhatsApp message
    const message = `Halo Kak Zarr, saya ingin memesan produk berikut:

*Produk:* ${currentProduct.name}
*Harga:* ${formattedPrice}
*Kategori:* ${folder?.name || 'Produk'} ${subCategory ? `- ${subCategory.name}` : ''}

*Data Pemesan:*
Nama: ${customerName}
Kontak: ${customerContact}

*Metode Pembayaran:* ${paymentDetailsText}

Saya sudah melakukan pembayaran sesuai dengan instruksi di atas. Mohon segera diproses pesanan saya. Terima kasih.`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}?text=${encodedMessage}`, '_blank');
    
    // Close modal
    closeOrderModal();
    
    // Show success message
    alert('Terima kasih! Anda akan diarahkan ke WhatsApp untuk mengirim detail pesanan. Pastikan Anda sudah melakukan pembayaran sebelum mengirim pesan.');
}

// Handle hash change for navigation
window.addEventListener('hashchange', function() {
    const sectionId = window.location.hash.substring(1) || 'home';
    setActiveSection(sectionId);
    highlightActiveNavLink(sectionId);
});

// Handle window resize for responsive design
window.addEventListener('resize', function() {
    // Close mobile menu on large screens
    if (window.innerWidth > 768) {
        navbar.classList.remove('active');
    }
});

