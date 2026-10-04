// Woolen Crafts PK (@woolencrafts_pk) - E-Commerce Store Engine

const PRODUCTS = [
  {
    id: 1,
    name: "Pastel Tulip & Daisy Forever Bouquet",
    category: "flowers",
    categoryLabel: "Forever Flowers 🌸",
    price: 3200,
    originalPrice: 3800,
    rating: 5.0,
    reviewsCount: 38,
    image: "images/forever-flowers.jpg",
    badge: "Best Seller",
    tagline: "Never withers, hand-stitched with love.",
    description: "Our signature everlasting crochet floral bouquet featuring soft blush pink tulips, chamomile daisies, and textured leafy greenery. Wrapped in premium kraft florist paper with an ivory satin ribbon. Perfect for anniversaries, birthdays, and room decor.",
    material: "100% Premium Milk Cotton Yarn & Bendable Floral Wire",
    dimensions: "Approx. 14 inches height, 10 inches wide",
    inStock: true,
    customizable: true
  },
  {
    id: 2,
    name: "Sunburst Crochet Sunflower Bouquet",
    category: "flowers",
    categoryLabel: "Forever Flowers 🌸",
    price: 2900,
    originalPrice: 3400,
    rating: 4.9,
    reviewsCount: 26,
    image: "images/sunflower-bouquet.jpg",
    badge: "Popular Gift",
    tagline: "Bring warmth and sunshine to any corner.",
    description: "Cheerful handmade sunflowers with intricately textured chocolate brown centers and bright yellow petals, accented with delicate baby's breath and chamomile buds. Tied in rustic florist wrap.",
    material: "Soft Wool-Cotton Blend, Non-fade Dyes",
    dimensions: "Approx. 13 inches height, 9 inches wide",
    inStock: true,
    customizable: true
  },
  {
    id: 3,
    name: "Bohemian Floral Granny Square Tote Bag",
    category: "bags",
    categoryLabel: "Totes & Bags 👜",
    price: 4500,
    originalPrice: 5200,
    rating: 5.0,
    reviewsCount: 42,
    image: "images/crochet-tote.jpg",
    badge: "Artisan Pick",
    tagline: "Sturdy, spacious, and effortlessly chic.",
    description: "Handcrafted bohemian granny square shoulder tote made from reinforced cotton yarn squares. Features vibrant pastel floral motifs, soft rope handles, and a roomy interior for your books, daily essentials, and water bottle.",
    material: "Reinforced 5-ply Cotton Yarn, Cotton Fabric Inner Lining",
    dimensions: "15 x 14 inches with 10 inch strap drop",
    inStock: true,
    customizable: true
  },
  {
    id: 4,
    name: "Cozy Cloud Knitted Dumpling Shoulder Bag",
    category: "bags",
    categoryLabel: "Totes & Bags 👜",
    price: 3600,
    originalPrice: 4200,
    rating: 4.8,
    reviewsCount: 19,
    image: "images/dumpling-bag.jpg",
    badge: "Trending",
    tagline: "Ultra-soft chunky knit silhouette.",
    description: "Chunky knit dumpling croissant shoulder purse in blush pink and sage green accents. Features an ultra-comfortable thick braided strap and magnetic closure.",
    material: "Chunky Velvet-Touch Chenille Yarn",
    dimensions: "12 x 8 inches with 8 inch shoulder drop",
    inStock: true,
    customizable: true
  },
  {
    id: 5,
    name: "Trio Amigurumi Bear, Daisy & Strawberry Charm Set",
    category: "keyrings",
    categoryLabel: "Keyrings 🍓",
    price: 1800,
    originalPrice: 2200,
    rating: 5.0,
    reviewsCount: 51,
    image: "images/keyrings.jpg",
    badge: "Set of 3",
    tagline: "Pocket-sized happiness on golden clasps.",
    description: "A complete bundle of 3 handcrafted crochet charms: a cute plush teddy bear with mint bow tie, a white daisy blossom, and a ripe strawberry with embroidered seeds. Fitted with premium gold-plated lobster swivel clasps.",
    material: "Hypoallergenic Milk Cotton & Gold-Plated Alloy Clasps",
    dimensions: "Each charm approx. 2.5 - 3.5 inches",
    inStock: true,
    customizable: true
  },
  {
    id: 6,
    name: "Kawaii Boba Milk Tea & Peach Keyring Duo",
    category: "keyrings",
    categoryLabel: "Keyrings 🍓",
    price: 1400,
    originalPrice: 1700,
    rating: 4.9,
    reviewsCount: 33,
    image: "images/boba-keychain.jpg",
    badge: "Cute Duo",
    tagline: "Sweet little accents for bags and keys.",
    description: "Cute handcrafted amigurumi mini boba cup with pearls, straw, and happy embroidered face, paired with a juicy pastel peach charm. Perfect friendship or sister gift.",
    material: "100% Cotton Yarn, Polyester Fiberfill",
    dimensions: "Each charm approx. 2 inches",
    inStock: true,
    customizable: true
  },
  {
    id: 7,
    name: "Daisy Embroidered Cable Knit Cream Cardigan",
    category: "sweaters",
    categoryLabel: "Sweaters 🧶",
    price: 6800,
    originalPrice: 7900,
    rating: 5.0,
    reviewsCount: 17,
    image: "images/knit-sweater.jpg",
    badge: "Winter Luxury",
    tagline: "Cozy heirloom knitwear for chilly days.",
    description: "Hand-knitted heavy gauge cable cardigan with delicate embroidered 3D pastel daisies. Finished with handcrafted natural wooden buttons and a relaxed, slouchy silhouette.",
    material: "80% Soft Acrylic Wool, 20% Organic Cotton",
    dimensions: "Free size (Oversized fit, chest 44-46 in, length 24 in)",
    inStock: true,
    customizable: true
  },
  {
    id: 8,
    name: "Artisan Pastel Lilac Floral Button Cardigan",
    category: "sweaters",
    categoryLabel: "Sweaters 🧶",
    price: 6400,
    originalPrice: 7500,
    rating: 4.9,
    reviewsCount: 14,
    image: "images/lilac-cardigan.jpg",
    badge: "Limited Edition",
    tagline: "Romantic pastel knit with embroidered floral buttons.",
    description: "Intricately crocheted lightweight cardigan in a dreamy lavender lilac shade. Adorned with 5 bespoke embroidered fabric-wrapped floral buttons. Ideal for spring layering and festive gatherings.",
    material: "Fine Breathable Wool-Cotton Blend",
    dimensions: "Medium / Relaxed (Chest 40-42 in, length 22 in)",
    inStock: true,
    customizable: true
  }
];

// Cart State Management
class CartStore {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('woolencrafts_cart')) || [];
    this.discountPercent = 0;
    this.appliedPromo = null;
  }

  save() {
    localStorage.setItem('woolencrafts_cart', JSON.stringify(this.items));
    this.updateCartBadge();
  }

  addItem(productId, quantity = 1, customNote = '') {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = this.items.find(item => item.id === productId && item.customNote === customNote);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
        customNote: customNote
      });
    }
    this.save();
    showToast(`Added "${product.name}" to cart! 🛍️`);
  }

  updateQuantity(productId, customNote, newQty) {
    const idx = this.items.findIndex(item => item.id === productId && item.customNote === customNote);
    if (idx > -1) {
      if (newQty <= 0) {
        this.items.splice(idx, 1);
      } else {
        this.items[idx].quantity = newQty;
      }
      this.save();
      renderCartDrawer();
    }
  }

  removeItem(productId, customNote) {
    this.items = this.items.filter(item => !(item.id === productId && item.customNote === customNote));
    this.save();
    renderCartDrawer();
  }

  clear() {
    this.items = [];
    this.appliedPromo = null;
    this.discountPercent = 0;
    this.save();
  }

  getSubtotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  getShipping() {
    const subtotal = this.getSubtotal();
    if (subtotal === 0) return 0;
    return subtotal >= 3500 ? 0 : 250;
  }

  getDiscountAmount() {
    return Math.round((this.getSubtotal() * this.discountPercent) / 100);
  }

  getTotal() {
    const subtotal = this.getSubtotal();
    if (subtotal === 0) return 0;
    return subtotal - this.getDiscountAmount() + this.getShipping();
  }

  getTotalItemsCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  applyPromo(code) {
    const clean = code.trim().toUpperCase();
    if (clean === 'WOOLEN10' || clean === 'INSTA10') {
      this.discountPercent = 10;
      this.appliedPromo = clean;
      return { success: true, message: "10% Instagram Community Discount applied! 🎉" };
    }
    return { success: false, message: "Invalid promo code. Try 'WOOLEN10'!" };
  }

  updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    const count = this.getTotalItemsCount();
    if (badge) {
      badge.textContent = count;
      badge.classList.toggle('hidden', count === 0);
    }
  }
}

const cart = new CartStore();

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderProductGrid(PRODUCTS);
  setupFilterButtons();
  setupSearchInput();
  cart.updateCartBadge();
  setupCartDrawer();
  setupModals();
  setupCustomOrderForm();
});

// Render Product Grid
function renderProductGrid(productsToRender) {
  const grid = document.getElementById('products-grid');
  const countEl = document.getElementById('products-count');
  
  if (countEl) {
    countEl.textContent = `Showing ${productsToRender.length} handcrafted items`;
  }

  if (productsToRender.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-50 text-rose-500 mb-4">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <h3 class="text-xl font-medium text-stone-800">No items found</h3>
        <p class="text-stone-500 mt-1">Try another search keyword or clear filters.</p>
        <button onclick="resetFilters()" class="mt-4 px-5 py-2.5 bg-rose-500 text-white rounded-full text-sm font-medium hover:bg-rose-600 transition">View All Products</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = productsToRender.map(product => `
    <div class="product-card bg-white rounded-2xl overflow-hidden border border-stone-200/80 flex flex-col group">
      <!-- Image Thumbnail -->
      <div class="product-img-wrapper relative aspect-square bg-stone-100 cursor-pointer" onclick="openQuickView(${product.id})">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="product-img w-full h-full object-cover"
          loading="lazy"
        />
        <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          ${product.badge ? `<span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-white/95 text-rose-600 shadow-sm backdrop-blur-sm">${product.badge}</span>` : ''}
          <span class="px-2 py-0.5 text-[11px] font-medium rounded-full bg-stone-900/75 text-white backdrop-blur-sm">100% Handmade</span>
        </div>
        
        <!-- Quick View Overlay button -->
        <button 
          onclick="event.stopPropagation(); openQuickView(${product.id})" 
          class="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-stone-700 hover:text-rose-600 p-2.5 rounded-full shadow-md transition opacity-0 group-hover:opacity-100 focus:opacity-100"
          title="Quick View"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
        </button>
      </div>

      <!-- Product Content -->
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between text-xs text-stone-400 mb-1.5">
            <span class="font-medium text-rose-600/90">${product.categoryLabel}</span>
            <span class="flex items-center gap-1 text-amber-500 font-semibold">
              ★ ${product.rating.toFixed(1)} <span class="text-stone-400 font-normal">(${product.reviewsCount})</span>
            </span>
          </div>

          <h3 
            onclick="openQuickView(${product.id})" 
            class="text-base font-semibold text-stone-800 hover:text-rose-600 transition cursor-pointer line-clamp-1 mb-1"
          >
            ${product.name}
          </h3>

          <p class="text-xs text-stone-500 line-clamp-2 mb-3">
            ${product.description}
          </p>
        </div>

        <div>
          <!-- Price Tag -->
          <div class="flex items-baseline gap-2 mb-4">
            <span class="text-lg font-bold text-stone-900">₨ ${product.price.toLocaleString()}</span>
            ${product.originalPrice ? `<span class="text-xs text-stone-400 line-through">₨ ${product.originalPrice.toLocaleString()}</span>` : ''}
            <span class="text-[11px] font-medium text-emerald-600 ml-auto bg-emerald-50 px-2 py-0.5 rounded">Customizable</span>
          </div>

          <!-- Add to Cart CTA -->
          <div class="grid grid-cols-5 gap-2">
            <button 
              onclick="cart.addItem(${product.id}, 1); openCartDrawer();" 
              class="col-span-4 bg-stone-900 hover:bg-rose-600 text-white py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wide transition flex items-center justify-center gap-2 shadow-sm"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              Add to Bag
            </button>
            <button 
              onclick="orderViaWhatsAppDirect(${product.id})" 
              class="col-span-1 border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50 text-stone-600 hover:text-emerald-700 py-2.5 rounded-xl transition flex items-center justify-center"
              title="Order this directly via WhatsApp"
            >
              <svg class="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Category Filtering
let currentCategory = 'all';

function setupFilterButtons() {
  const buttons = document.querySelectorAll('.category-filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('bg-rose-500', 'text-white', 'shadow-sm');
        b.classList.add('bg-white', 'text-stone-600', 'border-stone-200');
      });
      btn.classList.add('bg-rose-500', 'text-white', 'shadow-sm');
      btn.classList.remove('bg-white', 'text-stone-600', 'border-stone-200');

      currentCategory = btn.dataset.category;
      applyFilters();
    });
  });

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', applyFilters);
  }
}

function applyFilters() {
  const searchInput = document.getElementById('search-input');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const sortSelect = document.getElementById('sort-select');
  const sortBy = sortSelect ? sortSelect.value : 'featured';

  let filtered = PRODUCTS.filter(p => {
    const matchCategory = currentCategory === 'all' || p.category === currentCategory;
    const matchSearch = !query || 
      p.name.toLowerCase().includes(query) || 
      p.description.toLowerCase().includes(query) ||
      p.categoryLabel.toLowerCase().includes(query);
    return matchCategory && matchSearch;
  });

  // Sort
  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  renderProductGrid(filtered);
}

function resetFilters() {
  currentCategory = 'all';
  const buttons = document.querySelectorAll('.category-filter-btn');
  buttons.forEach(b => {
    if (b.dataset.category === 'all') {
      b.classList.add('bg-rose-500', 'text-white', 'shadow-sm');
      b.classList.remove('bg-white', 'text-stone-600', 'border-stone-200');
    } else {
      b.classList.remove('bg-rose-500', 'text-white', 'shadow-sm');
      b.classList.add('bg-white', 'text-stone-600', 'border-stone-200');
    }
  });
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  applyFilters();
}

function setupSearchInput() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      applyFilters();
    });
  }
}

// Cart Drawer
function setupCartDrawer() {
  const cartBtn = document.getElementById('cart-toggle-btn');
  const closeBtn = document.getElementById('close-cart-btn');
  const backdrop = document.getElementById('cart-backdrop');
  const applyPromoBtn = document.getElementById('apply-promo-btn');

  if (cartBtn) cartBtn.addEventListener('click', openCartDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
  if (backdrop) backdrop.addEventListener('click', closeCartDrawer);

  if (applyPromoBtn) {
    applyPromoBtn.addEventListener('click', () => {
      const codeInput = document.getElementById('promo-code-input');
      if (codeInput) {
        const result = cart.applyPromo(codeInput.value);
        showToast(result.message);
        renderCartDrawer();
      }
    });
  }
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('hidden');
    setTimeout(() => backdrop.classList.remove('opacity-0'), 10);
    renderCartDrawer();
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('opacity-0');
    setTimeout(() => backdrop.classList.add('hidden'), 300);
  }
}

function renderCartDrawer() {
  const itemsContainer = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal');
  const shippingEl = document.getElementById('cart-shipping');
  const discountRow = document.getElementById('cart-discount-row');
  const discountEl = document.getElementById('cart-discount-amount');
  const totalEl = document.getElementById('cart-total');
  const freeShippingNote = document.getElementById('free-shipping-progress');
  const checkoutBtn = document.getElementById('proceed-checkout-btn');
  const whatsappCartBtn = document.getElementById('whatsapp-checkout-btn');

  if (!itemsContainer) return;

  if (cart.items.length === 0) {
    itemsContainer.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center p-8 text-center text-stone-400">
        <div class="w-16 h-16 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center mb-4">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
        </div>
        <p class="text-base font-medium text-stone-700">Your bag is empty</p>
        <p class="text-xs text-stone-400 mt-1 max-w-xs">Explore our forever flowers, cozy sweaters, and custom crochet bags!</p>
        <button onclick="closeCartDrawer()" class="mt-5 px-6 py-2.5 bg-stone-900 text-white rounded-full text-xs font-semibold hover:bg-rose-600 transition">
          Continue Shopping
        </button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = "₨ 0";
    if (shippingEl) shippingEl.textContent = "₨ 0";
    if (totalEl) totalEl.textContent = "₨ 0";
    if (discountRow) discountRow.classList.add('hidden');
    if (checkoutBtn) checkoutBtn.disabled = true;
    if (whatsappCartBtn) whatsappCartBtn.disabled = true;
    if (freeShippingNote) freeShippingNote.innerHTML = `Add items to enjoy <span class="text-rose-600 font-semibold">Free Shipping</span> on orders over ₨ 3,500`;
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;
  if (whatsappCartBtn) whatsappCartBtn.disabled = false;

  itemsContainer.innerHTML = cart.items.map(item => `
    <div class="flex gap-4 p-4 bg-stone-50/80 rounded-2xl border border-stone-200/60">
      <img src="${item.image}" alt="${item.name}" class="w-20 h-20 rounded-xl object-cover border border-stone-200" />
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-start justify-between">
            <h4 class="text-xs font-semibold text-stone-800 line-clamp-1">${item.name}</h4>
            <button onclick="cart.removeItem(${item.id}, '${item.customNote}')" class="text-stone-400 hover:text-rose-500 transition p-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          ${item.customNote ? `<p class="text-[11px] text-rose-500 mt-0.5">Note: ${item.customNote}</p>` : ''}
          <p class="text-xs font-bold text-stone-900 mt-1">₨ ${(item.price * item.quantity).toLocaleString()}</p>
        </div>

        <!-- Quantity Stepper -->
        <div class="flex items-center justify-between mt-2">
          <div class="inline-flex items-center border border-stone-300 rounded-lg bg-white overflow-hidden">
            <button onclick="cart.updateQuantity(${item.id}, '${item.customNote}', ${item.quantity - 1})" class="px-2 py-0.5 text-stone-500 hover:bg-stone-100 transition text-xs font-bold">−</button>
            <span class="px-2.5 text-xs font-medium text-stone-800">${item.quantity}</span>
            <button onclick="cart.updateQuantity(${item.id}, '${item.customNote}', ${item.quantity + 1})" class="px-2 py-0.5 text-stone-500 hover:bg-stone-100 transition text-xs font-bold">+</button>
          </div>
          <span class="text-[11px] text-stone-400">₨ ${item.price.toLocaleString()} each</span>
        </div>
      </div>
    </div>
  `).join('');

  // Calculations
  const subtotal = cart.getSubtotal();
  const shipping = cart.getShipping();
  const discount = cart.getDiscountAmount();
  const total = cart.getTotal();

  if (subtotalEl) subtotalEl.textContent = `₨ ${subtotal.toLocaleString()}`;
  if (shippingEl) shippingEl.textContent = shipping === 0 ? "FREE" : `₨ ${shipping.toLocaleString()}`;
  if (totalEl) totalEl.textContent = `₨ ${total.toLocaleString()}`;

  if (discountRow) {
    if (discount > 0) {
      discountRow.classList.remove('hidden');
      if (discountEl) discountEl.textContent = `-₨ ${discount.toLocaleString()} (${cart.appliedPromo})`;
    } else {
      discountRow.classList.add('hidden');
    }
  }

  // Free shipping progress bar
  if (freeShippingNote) {
    const diff = 3500 - subtotal;
    if (diff <= 0) {
      freeShippingNote.innerHTML = `🎉 You qualify for <span class="text-emerald-600 font-bold">FREE Nationwide Delivery!</span>`;
    } else {
      freeShippingNote.innerHTML = `Add <span class="text-rose-600 font-bold">₨ ${diff.toLocaleString()}</span> more for <span class="font-semibold">FREE Shipping</span> in Pakistan!`;
    }
  }
}

// Quick View Modal
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quick-view-modal');
  const content = document.getElementById('quick-view-content');

  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Product Image -->
      <div class="rounded-2xl overflow-hidden bg-stone-100 aspect-square border border-stone-200">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" />
      </div>

      <!-- Product Details -->
      <div class="flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-rose-50 text-rose-600">${product.categoryLabel}</span>
            ${product.badge ? `<span class="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-amber-50 text-amber-700">${product.badge}</span>` : ''}
          </div>

          <h2 class="text-2xl font-bold text-stone-900 font-serif-craft">${product.name}</h2>
          <p class="text-xs text-rose-500 font-medium italic mt-1">${product.tagline}</p>

          <div class="flex items-center gap-3 my-4">
            <span class="text-2xl font-bold text-stone-900">₨ ${product.price.toLocaleString()}</span>
            ${product.originalPrice ? `<span class="text-sm text-stone-400 line-through">₨ ${product.originalPrice.toLocaleString()}</span>` : ''}
            <span class="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[11px] font-semibold rounded">Ready to Craft</span>
          </div>

          <p class="text-stone-600 text-xs leading-relaxed mb-4">${product.description}</p>

          <div class="space-y-2 text-xs border-y border-stone-200 py-3 my-3">
            <div class="flex justify-between"><span class="text-stone-400">Yarn / Material:</span><span class="font-medium text-stone-800 text-right">${product.material}</span></div>
            <div class="flex justify-between"><span class="text-stone-400">Dimensions:</span><span class="font-medium text-stone-800">${product.dimensions}</span></div>
            <div class="flex justify-between"><span class="text-stone-400">Customization:</span><span class="font-medium text-emerald-600">Available (Colors & Card Note)</span></div>
          </div>

          <!-- Custom note input -->
          <div class="mt-3">
            <label class="block text-xs font-medium text-stone-700 mb-1">Customization Note (Colors / Gift Tag message):</label>
            <input type="text" id="modal-custom-note" placeholder="e.g. Light pink ribbon, with gift note 'Happy Birthday Sarah!'" class="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-rose-500" />
          </div>
        </div>

        <div class="pt-6 flex gap-3">
          <button 
            onclick="addModalItemToCart(${product.id})" 
            class="flex-1 bg-stone-900 hover:bg-rose-600 text-white py-3 px-6 rounded-xl text-xs font-semibold tracking-wide transition shadow-sm flex items-center justify-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            Add to Bag
          </button>
          <button 
            onclick="orderViaWhatsAppDirect(${product.id})" 
            class="border border-emerald-500 hover:bg-emerald-50 text-emerald-700 px-5 py-3 rounded-xl text-xs font-semibold transition flex items-center gap-2"
          >
            <svg class="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/></svg>
            Inquire on WhatsApp
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
}

function addModalItemToCart(productId) {
  const noteInput = document.getElementById('modal-custom-note');
  const customNote = noteInput ? noteInput.value.trim() : '';
  cart.addItem(productId, 1, customNote);
  closeQuickView();
  openCartDrawer();
}

function closeQuickView() {
  const modal = document.getElementById('quick-view-modal');
  if (modal) modal.classList.add('hidden');
}

// Checkout Modal
function setupModals() {
  const closeQuickViewBtn = document.getElementById('close-quick-view-btn');
  const quickViewModal = document.getElementById('quick-view-modal');
  if (closeQuickViewBtn) closeQuickViewBtn.addEventListener('click', closeQuickView);
  if (quickViewModal) {
    quickViewModal.addEventListener('click', (e) => {
      if (e.target === quickViewModal) closeQuickView();
    });
  }

  const checkoutModal = document.getElementById('checkout-modal');
  const closeCheckoutBtn = document.getElementById('close-checkout-btn');
  const proceedBtn = document.getElementById('proceed-checkout-btn');

  if (proceedBtn) {
    proceedBtn.addEventListener('click', () => {
      closeCartDrawer();
      openCheckoutModal();
    });
  }

  if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckoutModal);
  if (checkoutModal) {
    checkoutModal.addEventListener('click', (e) => {
      if (e.target === checkoutModal) closeCheckoutModal();
    });
  }

  // Setup checkout form submit
  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);
  }
}

function openCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  const summaryContainer = document.getElementById('checkout-order-summary');
  const totalAmountEl = document.getElementById('checkout-total-amount');

  if (modal && summaryContainer) {
    summaryContainer.innerHTML = cart.items.map(item => `
      <div class="flex items-center justify-between text-xs py-1.5 border-b border-stone-100">
        <div class="flex items-center gap-2">
          <span class="w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center font-bold text-[10px] text-stone-600">${item.quantity}</span>
          <span class="text-stone-700 line-clamp-1 max-w-[160px]">${item.name}</span>
        </div>
        <span class="font-semibold text-stone-900">₨ ${(item.price * item.quantity).toLocaleString()}</span>
      </div>
    `).join('');

    if (totalAmountEl) {
      totalAmountEl.textContent = `₨ ${cart.getTotal().toLocaleString()}`;
    }

    modal.classList.remove('hidden');
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.add('hidden');
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.customer_name.value;
  const phone = form.customer_phone.value;
  const city = form.customer_city.value;
  const address = form.customer_address.value;
  const paymentMethod = form.payment_method.value;

  const trackingId = 'WC-' + Math.floor(100000 + Math.random() * 900000);
  const total = cart.getTotal();
  const itemsSummary = cart.items.map(i => `${i.name} (x${i.quantity})`).join(', ');

  // Show Success Screen
  const checkoutContainer = document.getElementById('checkout-container');
  checkoutContainer.innerHTML = `
    <div class="text-center py-8">
      <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <h3 class="text-2xl font-bold font-serif-craft text-stone-900">Thank You, ${name}!</h3>
      <p class="text-xs text-rose-500 font-semibold mt-1">Order #${trackingId} Placed Successfully</p>
      
      <div class="bg-stone-50 border border-stone-200 rounded-xl p-4 my-6 text-left text-xs space-y-2 max-w-sm mx-auto">
        <div class="flex justify-between"><span class="text-stone-400">Total Payable:</span><span class="font-bold text-stone-900">₨ ${total.toLocaleString()}</span></div>
        <div class="flex justify-between"><span class="text-stone-400">Payment:</span><span class="font-semibold text-stone-800">${paymentMethod}</span></div>
        <div class="flex justify-between"><span class="text-stone-400">City / Shipping:</span><span class="text-stone-800">${city} (Pakistan)</span></div>
        <div class="flex justify-between"><span class="text-stone-400">Address:</span><span class="text-stone-800 line-clamp-1">${address}</span></div>
        <div class="pt-2 border-t border-stone-200 text-stone-500 italic">"Every stitch be a tale of adventure 🩷" — Handcrafting with care!</div>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
        <button onclick="sendOrderReceiptWhatsApp('${trackingId}', '${name}', '${phone}', '${city}', '${total}', '${paymentMethod}')" class="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-2 shadow-sm">
          <span>Confirm on WhatsApp</span>
        </button>
        <button onclick="location.reload()" class="bg-stone-800 hover:bg-stone-900 text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition">
          Continue Shopping
        </button>
      </div>
    </div>
  `;

  cart.clear();
}

// WhatsApp Integration Engine
const STORE_WHATSAPP_NUMBER = "923001234567"; // Business WhatsApp Number

function orderViaWhatsAppDirect(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const message = `Salam! 🌸 I would like to order the *${product.name}* from Woolen Crafts PK.\n\n*Price:* ₨ ${product.price.toLocaleString()}\n*Category:* ${product.categoryLabel}\n\nCould you please share the delivery timeline and customization details? Thank you! ✨`;
  const url = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function sendCartViaWhatsApp() {
  if (cart.items.length === 0) return;

  let msg = `Salam! 🌸 I would like to place an order from *Woolen Crafts PK* (@woolencrafts_pk):\n\n`;
  cart.items.forEach((item, idx) => {
    msg += `${idx + 1}. *${item.name}* x ${item.quantity} = ₨ ${(item.price * item.quantity).toLocaleString()}${item.customNote ? ` (Note: ${item.customNote})` : ''}\n`;
  });

  const subtotal = cart.getSubtotal();
  const shipping = cart.getShipping();
  const total = cart.getTotal();

  msg += `\n*Subtotal:* ₨ ${subtotal.toLocaleString()}`;
  if (cart.getDiscountAmount() > 0) {
    msg += `\n*Discount:* -₨ ${cart.getDiscountAmount().toLocaleString()} (${cart.appliedPromo})`;
  }
  msg += `\n*Delivery Charges:* ${shipping === 0 ? 'FREE' : '₨ ' + shipping}`;
  msg += `\n*Total Payable:* ₨ ${total.toLocaleString()}`;
  msg += `\n\nLooking forward to your confirmation! 🇵🇰🩷`;

  const url = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function sendOrderReceiptWhatsApp(orderId, name, phone, city, total, payment) {
  const msg = `Salam Woolen Crafts PK! 🌸\n\nI just placed order *#${orderId}* on your website.\n*Name:* ${name}\n*Phone:* ${phone}\n*City:* ${city}\n*Total:* ₨ ${Number(total).toLocaleString()}\n*Payment Method:* ${payment}\n\nPlease confirm my order. Thank you! ✨`;
  const url = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// Custom Order & Bulk Order Form
function setupCustomOrderForm() {
  const form = document.getElementById('custom-order-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.custom_name.value;
      const phone = form.custom_phone.value;
      const orderType = form.custom_type.value;
      const palette = form.custom_palette.value;
      const quantity = form.custom_qty.value;
      const notes = form.custom_notes.value;

      const msg = `Salam! 🌸 I have a *${orderType}* request for Woolen Crafts PK:\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Quantity:* ${quantity}\n*Color Palette / Theme:* ${palette}\n*Special Request & Details:* ${notes}\n\nCould you please quote the price and estimated completion time? Thank you! 💌`;

      const url = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
      showToast("Opening WhatsApp with your custom inquiry details! 💌");
      form.reset();
    });
  }
}

// Toast Notifications
function showToast(message) {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = 'toast-animate bg-stone-900 text-white px-4 py-3 rounded-xl text-xs font-medium shadow-xl flex items-center gap-3 border border-stone-700/50';
  toast.innerHTML = `
    <span>${message}</span>
    <button onclick="this.parentElement.remove()" class="text-stone-400 hover:text-white transition">
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
  `;

  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3500);
}
