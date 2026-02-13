// ==============================================
// ZARRSTORE MAIN JAVASCRIPT
// Semua fungsi interaktif website
// ==============================================

// ========== GLOBAL VARIABLES ==========
let currentSection = 'beranda';
let currentCategory = 'all';
let currentSearchTerm = '';
let currentFolderId = null;
let currentSubCategoryId = null;
let selectedProduct = null;

// ========== DOM ELEMENTS ==========
const preloader = document.querySelector('.preloader');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const logoLink = document.getElementById('logo-link');

// Product elements
const productsGrid = document.getElementById('productsGrid');
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const searchResultCount = document.getElementById('searchResultCount');
const loadingState = document.getElementById('loadingState');
const emptyState = document.getElementById('emptyState');
const resetSearchBtn = document.getElementById('resetSearch');

// Modal elements
const productModal = document.getElementById('productModal');
const orderModal = document.getElementById('orderModal');
const productModalBody = document.getElementById('productModalBody');
const closeProductModal = document.getElementById('closeProductModal');
const closeOrderModal = document.getElementById('closeOrderModal');
const productModalOverlay = document.getElementById('productModalOverlay');
const orderModalOverlay = document.getElementById('orderModalOverlay');

// Order form elements
const orderForm = document.getElementById('orderForm');
const selectedProductId = document.getElementById('selectedProductId');
const selectedProductName = document.getElementById('selectedProductName');
const selectedProductPrice = document.getElementById('selectedProductPrice');
const summaryProductName = document.getElementById('summaryProductName');
const summaryProductPrice = document.getElementById('summaryProductPrice');
const summaryTotalPrice = document.getElementById('summaryTotalPrice');
const submitOrderBtn = document.getElementById('submitOrderBtn');

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('ZarrStore initialized');
    
    // Initialize all functions
    initPreloader();
    initNavigation();
    initProducts();
    initSearch();
    initModals();
    initOrderForm();
    initEventListeners();
    
    // Update product counts
    if (typeof updateProductCounts === 'function') {
        updateProductCounts();
    }
});

// ========== PRELOADER ==========
function initPreloader() {
    // Simulate loading time
    setTimeout(() => {
        preloader.classList.add('loaded');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 600);
    }, 2000);
}

// ========== NAVIGATION ==========
function initNavigation() {
    // Hamburger menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetSection = this.getAttribute('data-section');
            if (!targetSection) return;
            
            // Update active states
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Show target section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetSection) {
                    section.classList.add('active');
                    currentSection = targetSection;
                }
            });
            
            // Close mobile menu
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
            
            // Update URL hash without scrolling
            history.pushState(null, null, `#${targetSection}`);
            
            // Scroll to top smoothly
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // Logo click
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Activate beranda section
            navLinks.forEach(l => l.classList.remove('active'));
            document.querySelector('[data-section="beranda"]').classList.add('active');
            
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === 'beranda') {
                    section.classList.add('active');
                    currentSection = 'beranda';
                }
            });
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            history.pushState(null, null, '#beranda');
        });
    }
    
    // Check initial hash
    const hash = window.location.hash.substring(1) || 'beranda';
    const activeLink = document.querySelector(`[data-section="${hash}"]`);
    if (activeLink) {
        activeLink.click();
    }
}

// ========== PRODUCT FUNCTIONS ==========
function initProducts() {
    // Show loading state
    showLoading();
    
    // Generate category buttons
    generateCategoryButtons();
    
    // Load products
    setTimeout(() => {
        displayProducts(zarrStoreData.products);
        hideLoading();
    }, 500);
}

function generateCategoryButtons() {
    if (!categoryFilter) return;
    
    // Clear existing buttons (keep "Semua Produk")
    const allBtn = categoryFilter.querySelector('[data-category="all"]');
    categoryFilter.innerHTML = '';
    if (allBtn) categoryFilter.appendChild(allBtn);
    
    // Add folder categories
    zarrStoreData.folders.forEach(folder => {
        const button = document.createElement('button');
        button.className = 'category-btn';
        button.setAttribute('data-category', folder.id);
        button.innerHTML = `<i class="${folder.icon || 'fa-solid fa-folder'}"></i> ${folder.name}`;
        
        button.addEventListener('click', function() {
            // Update active state
            categoryFilter.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            // Filter products
            currentCategory = this.getAttribute('data-category');
            currentFolderId = currentCategory === 'all' ? null : parseInt(currentCategory);
            
            let filteredProducts = [];
            if (currentCategory === 'all') {
                filteredProducts = zarrStoreData.products;
            } else {
                filteredProducts = getProductsByFolder(parseInt(currentCategory));
            }
            
            // Apply search filter
            if (currentSearchTerm) {
                filteredProducts = searchProductsInArray(filteredProducts, currentSearchTerm);
            }
            
            displayProducts(filteredProducts);
        });
        
        categoryFilter.appendChild(button);
    });
}

function displayProducts(products) {
    if (!productsGrid) return;
    
    // Update search count
    if (searchResultCount) {
        searchResultCount.textContent = products.length;
    }
    
    // Show/hide empty state
    if (!products || products.length === 0) {
        productsGrid.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }
    
    if (emptyState) emptyState.style.display = 'none';
    
    // Clear grid
    productsGrid.innerHTML = '';
    
    // Create product cards
    products.forEach(product => {
        const card = createProductCard(product);
        productsGrid.appendChild(card);
    });
}

function createProductCard(product) {
    const folder = zarrStoreData.folders.find(f => f.id === product.folderId);
    const subCategory = zarrStoreData.subCategories[product.folderId]?.find(sc => sc.id === product.subCategoryId);
    
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-product-id', product.id);
    card.setAttribute('data-folder-id', product.folderId);
    
    // Format price
    const formattedPrice = formatPrice(product.price);
    
    card.innerHTML = `
        <div class="product-image">
            <img 
                src="${product.thumbnail}" 
                alt="${product.name}"
                loading="lazy"
                onerror="this.src='https://res.cloudinary.com/demo/image/upload/v1597246475/placeholder.jpg'"
            >
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        </div>
        <div class="product-content">
            <span class="product-category">
                ${folder ? folder.name : 'Produk'} 
                ${subCategory ? `• ${subCategory.name}` : ''}
            </span>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${truncateText(product.description, 100)}</p>
            <div class="product-price">${formattedPrice}</div>
            <div class="product-actions">
                <button class="btn-detail" onclick="handleDetailClick(${product.id})">
                    <i class="fas fa-info-circle"></i>
                    Detail
                </button>
                <button class="btn-order" onclick="handleOrderClick(${product.id})">
                    <i class="fas fa-shopping-cart"></i>
                    Pesan
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// ========== SEARCH FUNCTIONS ==========
function initSearch() {
    if (!searchInput) return;
    
    // Search input handler
    searchInput.addEventListener('input', function() {
        currentSearchTerm = this.value.trim();
        
        // Show/hide clear button
        if (clearSearchBtn) {
            clearSearchBtn.style.display = currentSearchTerm ? 'flex' : 'none';
        }
        
        // Debounce search
        clearTimeout(window.searchTimeout);
        window.searchTimeout = setTimeout(() => {
            performSearch();
        }, 300);
    });
    
    // Clear search
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', function() {
            searchInput.value = '';
            currentSearchTerm = '';
            this.style.display = 'none';
            performSearch();
            searchInput.focus();
        });
    }
    
    // Reset search
    if (resetSearchBtn) {
        resetSearchBtn.addEventListener('click', function() {
            searchInput.value = '';
            currentSearchTerm = '';
            if (clearSearchBtn) clearSearchBtn.style.display = 'none';
            
            // Reset to all categories
            currentCategory = 'all';
            currentFolderId = null;
            
            // Update active category button
            categoryFilter.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-category') === 'all') {
                    btn.classList.add('active');
                }
            });
            
            displayProducts(zarrStoreData.products);
        });
    }
}

function performSearch() {
    let filteredProducts = [];
    
    // Filter by category first
    if (currentCategory === 'all' || !currentCategory) {
        filteredProducts = [...zarrStoreData.products];
    } else {
        filteredProducts = getProductsByFolder(parseInt(currentCategory));
    }
    
    // Then filter by search term
    if (currentSearchTerm) {
        filteredProducts = searchProductsInArray(filteredProducts, currentSearchTerm);
    }
    
    displayProducts(filteredProducts);
}

function searchProductsInArray(products, searchTerm) {
    const term = searchTerm.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        getFolderName(product.folderId).toLowerCase().includes(term) ||
        getSubCategoryName(product.folderId, product.subCategoryId).toLowerCase().includes(term)
    );
}

// ========== DETAIL FUNCTIONS ==========
function handleDetailClick(productId) {
    const product = getProductById(productId);
    if (product) {
        showProductDetail(product);
    }
}

function showProductDetail(product) {
    if (!productModal || !productModalBody) return;
    
    const folder = zarrStoreData.folders.find(f => f.id === product.folderId);
    const subCategory = zarrStoreData.subCategories[product.folderId]?.find(sc => sc.id === product.subCategoryId);
    
    const formattedPrice = formatPrice(product.price);
    
    productModalBody.innerHTML = `
        <div class="product-detail">
            <div class="detail-image">
                <img 
                    src="${product.thumbnail}" 
                    alt="${product.name}"
                    onerror="this.src='https://res.cloudinary.com/demo/image/upload/v1597246475/placeholder.jpg'"
                >
                ${product.badge ? `<span class="detail-badge">${product.badge}</span>` : ''}
            </div>
            
            <div class="detail-info">
                <div class="detail-header">
                    <div class="detail-category">
                        <span class="folder-badge">${folder ? folder.name : 'Produk'}</span>
                        ${subCategory ? `<span class="subcategory-badge">${subCategory.name}</span>` : ''}
                    </div>
                    <h2 class="detail-title">${product.name}</h2>
                </div>
                
                <div class="detail-price">
                    <span class="price-label">Harga:</span>
                    <span class="price-value">${formattedPrice}</span>
                </div>
                
                <div class="detail-description">
                    <h3>Deskripsi Produk</h3>
                    <p>${product.description}</p>
                </div>
                
                <div class="detail-stats">
                    <div class="stat">
                        <i class="fas fa-box"></i>
                        <span>Stok: ${product.stock || 'Tersedia'}</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-shopping-cart"></i>
                        <span>Terjual: ${product.sold || 0}</span>
                    </div>
                </div>
                
                <div class="detail-features">
                    <h3>Keunggulan Produk</h3>
                    <ul>
                        <li><i class="fas fa-check"></i> Garansi 100%</li>
                        <li><i class="fas fa-check"></i> Proses Cepat</li>
                        <li><i class="fas fa-check"></i> Support 24/7</li>
                        <li><i class="fas fa-check"></i> Harga Termurah</li>
                    </ul>
                </div>
                
                <button class="detail-order-btn" onclick="handleOrderClick(${product.id})">
                    <i class="fas fa-shopping-cart"></i>
                    Pesan Sekarang
                </button>
            </div>
        </div>
    `;
    
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ========== ORDER FUNCTIONS ==========
function handleOrderClick(productId) {
    const product = getProductById(productId);
    if (product) {
        showOrderForm(product);
    }
}

function showOrderForm(product) {
    if (!orderModal) return;
    
    selectedProduct = product;
    
    // Set form values
    selectedProductId.value = product.id;
    selectedProductName.value = product.name;
    selectedProductPrice.value = product.price;
    
    // Update summary
    summaryProductName.textContent = product.name;
    const formattedPrice = formatPrice(product.price);
    summaryProductPrice.textContent = formattedPrice;
    summaryTotalPrice.textContent = formattedPrice;
    
    // Reset form
    orderForm.reset();
    
    // Show modal
    orderModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function initOrderForm() {
    if (!orderForm) return;
    
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const product = selectedProduct;
        if (!product) {
            alert('Produk tidak ditemukan!');
            return;
        }
        
        const customerName = document.getElementById('customerName').value;
        const customerContact = document.getElementById('customerContact').value;
        const paymentMethod = document.querySelector('input[name="payment"]:checked');
        
        if (!paymentMethod) {
            alert('Silakan pilih metode pembayaran!');
            return;
        }
        
        const paymentValue = paymentMethod.value;
        
        // Prepare payment details
        let paymentDetails = '';
        let accountName = '';
        let accountNumber = '088295039238';
        
        switch(paymentValue) {
            case 'Dana':
                paymentDetails = 'DANA';
                accountName = 'zaenulenka';
                break;
            case 'Ovo':
                paymentDetails = 'OVO';
                accountName = 'Azwar';
                break;
            case 'Gopay':
                paymentDetails = 'GoPay';
                accountName = 'Enka Azwar';
                break;
            case 'Qris':
                paymentDetails = 'QRIS';
                accountName = 'Chat Owner Langsung';
                accountNumber = 'QRIS - Chat Owner';
                break;
        }
        
        // Format message
        const message = `*ZARRSTORE - PESANAN BARU*
        
*DETAIL PRODUK*
┌─────────────────
│ Nama: ${product.name}
│ Harga: Rp ${product.price.toLocaleString('id-ID')}
└─────────────────

*DATA PEMESAN*
┌─────────────────
│ Nama: ${customerName}
│ No HP/ID: ${customerContact}
└─────────────────

*PEMBAYARAN*
┌─────────────────
│ Metode: ${paymentDetails}
│ Nama Akun: ${accountName}
│ No Rekening: ${accountNumber}
└─────────────────

*TOTAL PEMBAYARAN*
Rp ${product.price.toLocaleString('id-ID')}

_*Mohon konfirmasi setelah melakukan pembayaran*_
Terima kasih telah berbelanja di ZarrStore 🙏`;
        
        // Encode for URL
        const encodedMessage = encodeURIComponent(message);
        
        // Open WhatsApp
        window.open(`https://wa.me/6288295039238?text=${encodedMessage}`, '_blank');
        
        // Close modal
        closeOrderModal.click();
        
        // Show success message
        setTimeout(() => {
            alert('✓ Pesanan berhasil dikirim!\nSilakan cek WhatsApp Anda untuk konfirmasi.');
        }, 500);
    });
}

// ========== MODAL FUNCTIONS ==========
function initModals() {
    // Close product modal
    if (closeProductModal) {
        closeProductModal.addEventListener('click', closeProductModalHandler);
    }
    
    if (productModalOverlay) {
        productModalOverlay.addEventListener('click', closeProductModalHandler);
    }
    
    // Close order modal
    if (closeOrderModal) {
        closeOrderModal.addEventListener('click', closeOrderModalHandler);
    }
    
    if (orderModalOverlay) {
        orderModalOverlay.addEventListener('click', closeOrderModalHandler);
    }
    
    // ESC key to close modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProductModalHandler();
            closeOrderModalHandler();
        }
    });
}

function closeProductModalHandler() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
}

function closeOrderModalHandler() {
    orderModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ========== UTILITY FUNCTIONS ==========
function showLoading() {
    if (loadingState) loadingState.style.display = 'block';
    if (productsGrid) productsGrid.style.display = 'none';
}

function hideLoading() {
    if (loadingState) loadingState.style.display = 'none';
    if (productsGrid) productsGrid.style.display = 'grid';
}

function truncateText(text, length) {
    if (!text) return '';
    return text.length > length ? text.substring(0, length) + '...' : text;
}

function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

function getFolderName(folderId) {
    const folder = zarrStoreData.folders.find(f => f.id === folderId);
    return folder ? folder.name : 'Unknown';
}

function getSubCategoryName(folderId, subCategoryId) {
    const subCategory = zarrStoreData.subCategories[folderId]?.find(sc => sc.id === subCategoryId);
    return subCategory ? subCategory.name : 'Unknown';
}

function getProductById(productId) {
    return zarrStoreData.products.find(p => p.id === productId);
}

function getProductsByFolder(folderId) {
    return zarrStoreData.products.filter(p => p.folderId === folderId);
}

// ========== EVENT LISTENERS ==========
function initEventListeners() {
    // Explore products button
    const exploreBtn = document.getElementById('exploreProducts');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('[data-section="produk"]').click();
        });
    }
    
    // Contact us button
    const contactBtn = document.getElementById('contactUs');
    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('[data-section="kontak"]').click();
        });
    }
    
    // Prevent body scroll when modal is open
    window.addEventListener('scroll', function() {
        if (productModal.classList.contains('active') || orderModal.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        }
    });
}

// ========== EXPORT GLOBALLY ==========
window.handleDetailClick = handleDetailClick;
window.handleOrderClick = handleOrderClick;
window.getProductById = getProductById;
window.formatPrice = formatPrice;