// Inisialisasi aplikasi ZarrStore
document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi variabel global
    let currentTheme = localStorage.getItem('theme') || 'light';
    let currentProduct = null;
    
    // Elemen DOM
    const introScreen = document.getElementById('introScreen');
    const mainContent = document.getElementById('mainContent');
    const themeToggle = document.getElementById('themeToggle');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const productFilter = document.getElementById('productFilter');
    const productsContainer = document.getElementById('productsContainer');
    const contactButtons = document.getElementById('contactButtons');
    const contactForm = document.getElementById('contactForm');
    const productModal = document.getElementById('productModal');
    const closeModal = document.querySelector('.close-modal');
    const modalBody = document.getElementById('modalBody');
    
    // Tampilkan intro screen selama 3 detik
    setTimeout(() => {
        introScreen.style.display = 'none';
        mainContent.style.display = 'block';
        setTheme(currentTheme);
        loadProducts();
        loadContacts();
        setupEventListeners();
    }, 3000);
    
    // Setup event listeners
    function setupEventListeners() {
        // Toggle tema
        themeToggle.addEventListener('click', toggleTheme);
        
        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        
        // Navigasi antar halaman
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                showPage(targetId);
                
                // Update active nav link
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
                
                // Close mobile menu jika terbuka
                if (navList.classList.contains('active')) {
                    toggleMobileMenu();
                }
            });
        });
        
        // Close modal
        closeModal.addEventListener('click', () => {
            productModal.classList.remove('active');
        });
        
        // Close modal ketika klik di luar konten modal
        window.addEventListener('click', (e) => {
            if (e.target === productModal) {
                productModal.classList.remove('active');
            }
        });
        
        // Form kontak
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const message = document.getElementById('contactMessage').value;
            
            // Simulasi pengiriman pesan
            alert(`Terima kasih ${name}! Pesan Anda telah dikirim. Kami akan membalas ke email ${email} segera.`);
            
            // Reset form
            this.reset();
        });
        
        // Filter produk
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('filter-btn')) {
                const categoryId = parseInt(e.target.dataset.category);
                filterProducts(categoryId);
                
                // Update active filter button
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                e.target.classList.add('active');
            }
            
            // Detail produk
            if (e.target.classList.contains('btn-detail') || e.target.closest('.btn-detail')) {
                const productId = parseInt(e.target.closest('.product-card').dataset.id);
                const folder = e.target.closest('.product-card').dataset.folder;
                showProductDetail(folder, productId);
            }
            
            // Beli produk
            if (e.target.classList.contains('btn-buy') || e.target.closest('.btn-buy')) {
                const productId = parseInt(e.target.closest('.product-card').dataset.id);
                const folder = e.target.closest('.product-card').dataset.folder;
                showOrderForm(folder, productId);
            }
        });
    }
    
    // Toggle tema dark/light
    function toggleTheme() {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(currentTheme);
        localStorage.setItem('theme', currentTheme);
    }
    
    // Set tema
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        mobileMenuBtn.classList.toggle('active');
        navList.classList.toggle('active');
    }
    
    // Tampilkan halaman berdasarkan ID
    function showPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === pageId) {
                page.classList.add('active');
            }
        });
        
        // Scroll ke atas halaman
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Muat produk dari data.js
    function loadProducts() {
        // Buat filter kategori
        createCategoryFilters();
        
        // Tampilkan semua produk
        displayProducts(productsData.products);
    }
    
    // Buat filter kategori
    function createCategoryFilters() {
        // Tambahkan filter "Semua"
        const allFilter = document.createElement('button');
        allFilter.className = 'filter-btn active';
        allFilter.textContent = 'Semua';
        allFilter.dataset.category = '0';
        productFilter.appendChild(allFilter);
        
        // Tambahkan filter untuk setiap kategori
        productsData.categories.forEach(category => {
            const filterBtn = document.createElement('button');
            filterBtn.className = 'filter-btn';
            filterBtn.textContent = category.name;
            filterBtn.dataset.category = category.id;
            productFilter.appendChild(filterBtn);
        });
    }
    
    // Filter produk berdasarkan kategori
    function filterProducts(categoryId) {
        let filteredProducts;
        
        if (categoryId === 0) {
            // Tampilkan semua produk
            filteredProducts = productsData.products;
        } else {
            // Filter berdasarkan kategori
            filteredProducts = productsData.products.filter(product => product.categoryId === categoryId);
        }
        
        displayProducts(filteredProducts);
    }
    
    // Tampilkan produk di halaman
    function displayProducts(products) {
        productsContainer.innerHTML = '';
        
        if (products.length === 0) {
            productsContainer.innerHTML = '<p class="no-products">Tidak ada produk ditemukan.</p>';
            return;
        }
        
        products.forEach(product => {
            const category = productsData.categories.find(cat => cat.id === product.categoryId);
            
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.dataset.id = product.id;
            productCard.dataset.folder = product.folder;
            
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.thumbnail}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-content">
                    <span class="product-category">${category ? category.name : 'Uncategorized'}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">Rp ${product.price.toLocaleString('id-ID')}</div>
                    <div class="product-actions">
                        <button class="btn-buy">Beli Sekarang</button>
                        <button class="btn-detail">Detail</button>
                    </div>
                </div>
            `;
            
            productsContainer.appendChild(productCard);
        });
    }
    
    // Tampilkan detail produk
    function showProductDetail(folder, productId) {
        const product = productsData.products.find(p => p.folder === folder && p.id === productId);
        const category = productsData.categories.find(cat => cat.id === product.categoryId);
        
        if (!product) return;
        
        modalBody.innerHTML = `
            <div class="product-detail">
                <div class="product-detail-image">
                    <img src="${product.thumbnail}" alt="${product.name}">
                </div>
                <div class="product-detail-content">
                    <span class="product-category">${category ? category.name : 'Uncategorized'}</span>
                    <h2>${product.name}</h2>
                    <p class="product-detail-description">${product.details}</p>
                    <div class="product-detail-price">Rp ${product.price.toLocaleString('id-ID')}</div>
                    <button class="btn-primary" id="buyFromDetail">Beli Sekarang</button>
                </div>
            </div>
        `;
        
        productModal.classList.add('active');
        currentProduct = product;
        
        // Event listener untuk tombol beli dari detail
        document.getElementById('buyFromDetail').addEventListener('click', () => {
            showOrderForm(folder, productId);
        });
    }
    
    // Tampilkan form pemesanan
    function showOrderForm(folder, productId) {
        const product = productsData.products.find(p => p.folder === folder && p.id === productId);
        const category = productsData.categories.find(cat => cat.id === product.categoryId);
        
        if (!product) return;
        
        currentProduct = product;
        
        modalBody.innerHTML = `
            <div class="order-form">
                <h3>Pesan ${product.name}</h3>
                <p class="product-order-price">Harga: <strong>Rp ${product.price.toLocaleString('id-ID')}</strong></p>
                
                <form id="orderForm">
                    <div class="form-group">
                        <label for="customerName">Nama Lengkap</label>
                        <input type="text" id="customerName" required placeholder="Masukkan nama lengkap">
                    </div>
                    
                    <div class="form-group">
                        <label for="customerContact">No HP / ID Game</label>
                        <input type="text" id="customerContact" required placeholder="Masukkan No HP atau ID Game">
                    </div>
                    
                    <div class="form-group">
                        <label for="customerNote">Catatan (Opsional)</label>
                        <textarea id="customerNote" rows="3" placeholder="Tambahkan catatan jika diperlukan"></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label>Metode Pembayaran</label>
                        <div class="payment-methods">
                            ${productsData.paymentMethods.map(method => `
                                <div class="payment-option">
                                    <input type="radio" id="payment${method.id}" name="payment" value="${method.name}" ${method.id === 1 ? 'checked' : ''}>
                                    <div class="payment-icon">
                                        <i class="${method.icon}"></i>
                                    </div>
                                    <label class="payment-label" for="payment${method.id}">${method.name}</label>
                                    ${method.account ? `<div class="payment-account">${method.account}</div>` : ''}
                                    ${method.note ? `<div class="qris-note">${method.note}</div>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <button type="submit" class="btn-primary" style="width: 100%;">Lanjutkan ke WhatsApp</button>
                </form>
            </div>
        `;
        
        productModal.classList.add('active');
        
        // Event listener untuk form pemesanan
        document.getElementById('orderForm').addEventListener('submit', function(e) {
            e.preventDefault();
            processOrder();
        });
    }
    
    // Proses pesanan
    function processOrder() {
        const customerName = document.getElementById('customerName').value;
        const customerContact = document.getElementById('customerContact').value;
        const customerNote = document.getElementById('customerNote').value;
        const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
        
        // Format pesan untuk WhatsApp
        const message = `Halo ZarrStore, saya ingin memesan:\n\n` +
                       `📦 *Produk:* ${currentProduct.name}\n` +
                       `💰 *Harga:* Rp ${currentProduct.price.toLocaleString('id-ID')}\n` +
                       `👤 *Nama:* ${customerName}\n` +
                       `📱 *Kontak:* ${customerContact}\n` +
                       `💳 *Metode Bayar:* ${paymentMethod}\n` +
                       `${customerNote ? `📝 *Catatan:* ${customerNote}\n` : ''}\n` +
                       `Saya sudah transfer sesuai instruksi.`;
        
        // Encode pesan untuk URL WhatsApp
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/6288295039238?text=${encodedMessage}`;
        
        // Buka WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Tutup modal
        productModal.classList.remove('active');
        
        // Reset form
        document.getElementById('orderForm').reset();
    }
    
    // Muat kontak dari data.js
    function loadContacts() {
        contactButtons.innerHTML = '';
        
        productsData.contacts.forEach(contact => {
            const contactBtn = document.createElement('a');
            contactBtn.className = 'contact-btn';
            contactBtn.href = contact.link;
            contactBtn.target = '_blank';
            contactBtn.innerHTML = `
                <div class="contact-icon" style="background: ${contact.color}">
                    <i class="${contact.icon}"></i>
                </div>
                <div class="contact-info">
                    <div class="contact-label">${contact.label}</div>
                    <div class="contact-value">${contact.value}</div>
                </div>
            `;
            
            contactButtons.appendChild(contactBtn);
        });
    }
});