/* ============================================================
   ROMA & CRUST - MAIN JAVASCRIPT
   Menu data, filtering, cart, and WhatsApp checkout.
   ============================================================ */

// ---------------------------------------------------------------------
// 1. CONFIG: WhatsApp Number & Order Message
// ---------------------------------------------------------------------
const WHATSAPP_NUMBER = '923428423052'; // 03428423052 in international format
const WHATSAPP_DEFAULT_MSG = 'I want to place an order';

// ---------------------------------------------------------------------
// 2. COMPLETE MENU DATASET (37 ITEMS)
// ---------------------------------------------------------------------
const MENU_ITEMS = [
  // ==================== BURGERS (10) ====================
  { id: 'b1', name: 'Zinger Crespo', category: 'Burgers', price: 220, badge: 'Best Seller',
    image: 'https://images.pexels.com/photos/11354487/pexels-photo-11354487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Golden-fried crispy chicken thigh fillet topped with shredded iceberg and signature tangy mayo in a toasted sesame bun.' },
  { id: 'b2', name: 'Zinger Cheese Burger', category: 'Burgers', price: 300, badge: 'Cheesy Pick',
    image: 'https://images.pexels.com/photos/8130750/pexels-photo-8130750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Extra-crunchy zinger breast layered with a melted slice of rich American cheddar, crisp lettuce, and creamy garlic sauce.' },
  { id: 'b3', name: 'Grill Burger', category: 'Burgers', price: 320, badge: 'Flame Grilled',
    image: 'https://images.pexels.com/photos/918581/pexels-photo-918581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Char-grilled peri-peri marinated chicken fillet glazed with smoky BBQ sauce, caramelized onions, and fresh tomatoes.' },
  { id: 'b4', name: 'Pizza Burger', category: 'Burgers', price: 320, badge: 'Mozzarella Pull',
    image: 'https://images.pexels.com/photos/15153241/pexels-photo-15153241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Crispy fillet smothered in rich marinara pizza sauce, oven-melted mozzarella, black olives, and oregano herbs.' },
  { id: 'b5', name: "Roman's Maza Chapli", category: 'Burgers', price: 270, badge: 'Desi Fusion',
    image: 'https://images.pexels.com/photos/13573664/pexels-photo-13573664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Spiced Peshawar-style chapli patty seared on a flat iron tawa, paired with mint-coriander chutney and pickled onions.' },
  { id: 'b6', name: 'Mighty Zest', category: 'Burgers', price: 370, badge: 'Chef Special',
    image: 'https://images.pexels.com/photos/17121731/pexels-photo-17121731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Monster double-crunch zinger fillet with fiery jalapenos, cheddar cheese slice, and our zesty chipotle dynamo sauce.' },
  { id: 'b7', name: 'Thai Burger', category: 'Burgers', price: 270, badge: 'Sweet & Spicy',
    image: 'https://images.pexels.com/photos/34407494/pexels-photo-34407494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Crispy chicken fillet glazed in authentic Thai sweet chili glaze, crunchy slaw, and roasted sesame dressing.' },
  { id: 'b8', name: 'Black Burger', category: 'Burgers', price: 250, badge: 'Artisan Bun',
    image: 'https://images.pexels.com/photos/9211149/pexels-photo-9211149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Signature gourmet charcoal-infused soft bun packed with a spicy crunchy fillet, pickles, and smoky peppercorn mayo.' },
  { id: 'b9', name: 'Black Cheese Burger', category: 'Burgers', price: 300, badge: 'Must Try',
    image: 'https://images.pexels.com/photos/9207184/pexels-photo-9207184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Artisanal black brioche bun loaded with double molten cheddar, crispy zinger fillet, and jalapeño cheese drizzle.' },
  { id: 'b10', name: 'Hunger Fill Burger', category: 'Burgers', price: 420, badge: 'Beast Mode',
    image: 'https://images.pexels.com/photos/31097819/pexels-photo-31097819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Towering double-decker feast with two crispy fillets, double cheese, turkey strips, and house special beast sauce.' },

  // ==================== SHAWARMA (5) ====================
  { id: 's1', name: 'Chicken Shawarma', category: 'Shawarma', price: 180, badge: 'Classic Hit',
    image: 'https://images.pexels.com/photos/29306505/pexels-photo-29306505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Warm toasted pita bread rolled with tender rotisserie chicken strips, pickled cucumbers, and creamy garlic toum.' },
  { id: 's2', name: 'Grill Shawarma', category: 'Shawarma', price: 220, badge: 'Smoky Grill',
    image: 'https://images.pexels.com/photos/5779372/pexels-photo-5779372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Charcoal-seared chicken chunks tossed in smoky paprika marinade, wrapped with fresh salad and tahini mayo.' },
  { id: 's3', name: 'Zinger Shawarma', category: 'Shawarma', price: 200, badge: 'Extra Crispy',
    image: 'https://images.pexels.com/photos/14774690/pexels-photo-14774690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Crunchy golden zinger strips wrapped in soft pita with spicy thousand island sauce and crisp cabbage slaw.' },
  { id: 's4', name: 'Arabian Shawarma', category: 'Shawarma', price: 200, badge: 'Authentic',
    image: 'https://images.pexels.com/photos/8018080/pexels-photo-8018080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Middle-Eastern Saj flatbread loaded with sumac-spiced chicken, crispy fries inside, garlic paste, and olives.' },
  { id: 's5', name: 'Chicken Cheese Shawarma', category: 'Shawarma', price: 270, badge: 'Loaded Cheese',
    image: 'https://images.pexels.com/photos/34318137/pexels-photo-34318137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Juicy shawarma chicken blanketed in melted mozzarella & cheddar cheese with jalapenos and rich garlic mayo.' },

  // ==================== PARATHA & ROLLS (7) ====================
  { id: 'p1', name: 'Chicken Paratha', category: 'Paratha & Rolls', price: 220, badge: 'Flaky & Hot',
    image: 'https://images.pexels.com/photos/11286814/pexels-photo-11286814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Golden flaky multi-layered lacha paratha stuffed with spiced tikka chicken, onion rings, and green chutney mayo.' },
  { id: 'p2', name: 'Twister', category: 'Paratha & Rolls', price: 250, badge: 'Crowd Favorite',
    image: 'https://images.pexels.com/photos/38644476/pexels-photo-38644476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Warm grilled tortilla wrap packed with crispy zinger tenders, diced tomatoes, lettuce, and peppery mayo.' },
  { id: 'p3', name: 'Chicken Cheese Paratha', category: 'Paratha & Rolls', price: 290, badge: 'Extra Cheesy',
    image: 'https://images.pexels.com/photos/27054745/pexels-photo-27054745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Crispy tawa-fried paratha oozing with molten cheddar cheese, smoky chicken chunks, and signature garlic dip.' },
  { id: 'p4', name: 'Kabab Roll Paratha', category: 'Paratha & Rolls', price: 280, badge: 'BBQ Seekh',
    image: 'https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Charcoal-grilled chicken seekh kabab rolled inside a buttery crispy paratha with tamarind imli and mint sauce.' },
  { id: 'p5', name: 'Grill Paratha', category: 'Paratha & Rolls', price: 350, badge: 'Peri Grill',
    image: 'https://images.pexels.com/photos/12123658/pexels-photo-12123658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Flame-grilled chicken strips, bell peppers, and caramelized onions wrapped in a whole-wheat flaky paratha.' },
  { id: 'p6', name: 'Pizza Paratha', category: 'Paratha & Rolls', price: 500, badge: 'Double Stuffed',
    image: 'https://images.pexels.com/photos/15094217/pexels-photo-15094217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Two crispy parathas sealed with tikka chicken, stretchy mozzarella cheese, sweet corn, olives, and pizza sauce.' },
  { id: 'p7', name: 'Chicken Cheese Stick', category: 'Paratha & Rolls', price: 650, badge: 'Chef Signature',
    image: 'https://images.pexels.com/photos/5017806/pexels-photo-5017806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Oven-baked artisan dough stick overflowing with creamy chicken fajita filling, mozzarella pull, and garlic butter.' },

  // ==================== SIDES & FRIES (6) ====================
  { id: 'sf1', name: '10 Nuggets', category: 'Sides & Fries', price: 480, badge: '10 Pcs Pack',
    image: 'https://images.pexels.com/photos/6941009/pexels-photo-6941009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Ten bite-sized tender chicken breast nuggets fried to a golden crisp, served with smoky BBQ and garlic dip.' },
  { id: 'sf2', name: 'Wings (10 Pcs)', category: 'Sides & Fries', price: 480, badge: 'Crispy & Juicy',
    image: 'https://images.pexels.com/photos/36863578/pexels-photo-36863578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Ten spiced crunchy chicken wings tossed in our secret herb seasoning, served piping hot with dip.' },
  { id: 'sf3', name: '10 Hot Shots', category: 'Sides & Fries', price: 480, badge: 'Spicy Kick',
    image: 'https://images.pexels.com/photos/6941033/pexels-photo-6941033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Ten fiery popcorn chicken bites marinated in red chili cayenne spices with an ultra-crunchy coating.' },
  { id: 'sf4', name: 'Regular Fries', category: 'Sides & Fries', price: 150, hasSizes: true,
    sizes: [
      { label: 'M', name: 'Medium', price: 150 },
      { label: 'L', name: 'Large', price: 200 },
      { label: 'Family', name: 'Family Pack', price: 250 }
    ],
    selectedSizeIndex: 0, badge: 'Choose Size',
    image: 'https://images.pexels.com/photos/36863567/pexels-photo-36863567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Hand-cut premium potatoes double-fried for maximum crunch and dusted with sea salt or chatpata masala.' },
  { id: 'sf5', name: 'Pizza Fries', category: 'Sides & Fries', price: 500, badge: 'Loaded Tray',
    image: 'https://images.pexels.com/photos/29653205/pexels-photo-29653205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Golden crinkle fries topped with chicken tikka chunks, molten mozzarella, jalapenos, olives, and dynamo sauce.' },
  { id: 'sf6', name: '1 Cheese Pasta', category: 'Sides & Fries', price: 550, badge: 'Oven Baked',
    image: 'https://images.pexels.com/photos/9738993/pexels-photo-9738993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Creamy Alfredo penne pasta tossed with grilled chicken strips, mushrooms, sweet corn, and baked mozzarella crust.' },

  // ==================== MEGA DEALS (9) ====================
  { id: 'd1', name: 'Deal 1: 3 Chicken Shawarma', category: 'Mega Deals', price: 480, isDeal: true, badge: 'BEST VALUE',
    image: 'https://images.pexels.com/photos/29306505/pexels-photo-29306505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: '3 Full-sized loaded Chicken Shawarmas with extra garlic toum & pickled chilies. Perfect trio saver combo!' },
  { id: 'd2', name: 'Deal 2: 1 Twister + 5 Nuggets + 1 Reg. Drink', category: 'Mega Deals', price: 470, isDeal: true, badge: 'BEST VALUE',
    image: 'https://images.pexels.com/photos/38644476/pexels-photo-38644476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: '1 Crispy Zinger Twister Roll + 5 Golden Chicken Nuggets + 1 Chilled Regular Soft Drink.' },
  { id: 'd3', name: 'Deal 3: 1 Zinger Burger + 1 Reg. Drink', category: 'Mega Deals', price: 380, isDeal: true, badge: 'BEST VALUE',
    image: 'https://images.pexels.com/photos/11354487/pexels-photo-11354487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: '1 Crunchy Loaded Zinger Burger paired with 1 ice-cold Regular Drink. Ideal solo meal deal!' },
  { id: 'd4', name: 'Deal 4: 10 Zinger + 1.5 Ltr. Drink', category: 'Mega Deals', price: 2200, isDeal: true, badge: 'BEST VALUE',
    image: 'https://images.pexels.com/photos/9207184/pexels-photo-9207184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Party Feast! 10 Full-sized Crispy Zinger Burgers + 1 Jumbo 1.5 Liter Drink + Free Delivery unlocked!' },
  { id: 'd5', name: 'Deal 5: 5 Zinger Burger + 10 Pcs Wings + 1 Ltr. Drink', category: 'Mega Deals', price: 1600, isDeal: true, badge: 'BEST VALUE',
    image: 'https://images.pexels.com/photos/31090633/pexels-photo-31090633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Family Blockbuster: 5 Crispy Zinger Burgers + 10 Pcs Hot Wings + 1 Liter Drink + Free Delivery!' },
  { id: 'd6', name: 'Deal 6: 5 Twister + 1.5 Ltr. Drink', category: 'Mega Deals', price: 1300, isDeal: true, badge: 'BEST VALUE',
    image: 'https://images.pexels.com/photos/8018080/pexels-photo-8018080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: '5 Loaded Zinger Twister Tortilla Wraps served with a chilled 1.5 Liter Jumbo Drink for the squad.' },
  { id: 'd7', name: 'Deal 7: 5 Zinger Burger + 1 Ltr. Drink', category: 'Mega Deals', price: 1100, isDeal: true, badge: 'BEST VALUE',
    image: 'https://images.pexels.com/photos/17121731/pexels-photo-17121731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: '5 Signature Crunchy Zinger Burgers with house special mayo + 1 Liter Soft Drink.' },
  { id: 'd8', name: 'Deal 8: 1 Medium Roma Pizza + 1 Garlic Fries + 1 Ltr. Drink', category: 'Mega Deals', price: 1000, isDeal: true, badge: 'BEST VALUE',
    image: 'https://images.pexels.com/photos/29957585/pexels-photo-29957585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: '1 Wood-Fired Medium Roma Special Pizza + 1 Loaded Garlic Mayo Fries + 1 Liter Drink.' },
  { id: 'd9', name: 'Deal 9: 10 Wings + 1 Garlic Fries + 1 Half Ltr Drink', category: 'Mega Deals', price: 750, isDeal: true, badge: 'BEST VALUE',
    image: 'https://images.pexels.com/photos/36863578/pexels-photo-36863578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: '10 Crispy Spiced Chicken Wings + 1 Creamy Garlic Fries Tray + 1 Half Liter (500ml) Drink.' }
];

// ---------------------------------------------------------------------
// 3. APP STATE
// ---------------------------------------------------------------------
let currentCategory = 'All Items';
let cart = [];
const FREE_DELIVERY_THRESHOLD = 1500;
const STANDARD_DELIVERY_FEE = 100;

// Load saved cart
try {
  const savedCart = localStorage.getItem('roma_crust_cart');
  if (savedCart) cart = JSON.parse(savedCart);
} catch (e) { cart = []; }

function saveCart() {
  try { localStorage.setItem('roma_crust_cart', JSON.stringify(cart)); } catch (e) {}
}

// ---------------------------------------------------------------------
// 4. RENDER MENU
// ---------------------------------------------------------------------
function renderMenu() {
  const grid = document.getElementById('menu-grid');
  const emptyState = document.getElementById('menu-empty-state');
  const statusText = document.getElementById('menu-Status-text');
  const searchQuery = (document.getElementById('menu-search-input')?.value || '').trim().toLowerCase();
  const sortMode = document.getElementById('menu-sort-select')?.value || 'default';

  let filtered = MENU_ITEMS.filter(item => {
    const matchesCat = currentCategory === 'All Items' || item.category === currentCategory;
    const matchesSearch = !searchQuery ||
      item.name.toLowerCase().includes(searchQuery) ||
      item.description.toLowerCase().includes(searchQuery) ||
      item.category.toLowerCase().includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  if (sortMode === 'price-asc') {
    filtered.sort((a, b) => getEffectiveItemPrice(a) - getEffectiveItemPrice(b));
  } else if (sortMode === 'price-desc') {
    filtered.sort((a, b) => getEffectiveItemPrice(b) - getEffectiveItemPrice(a));
  }

  statusText.innerHTML = `Showing <span class="font-extrabold text-[#1D1E2C]">${filtered.length}</span> ${currentCategory === 'All Items' ? 'freshly prepared items' : `items in <span class="text-[#E63946] font-extrabold">${currentCategory}</span>`}`;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }
  emptyState.classList.add('hidden');

  grid.innerHTML = filtered.map(item => {
    const activePrice = getEffectiveItemPrice(item);
    const isMegaDeal = item.isDeal || item.category === 'Mega Deals';
    const qtyInCart = getItemCountInCart(item);

    let sizeSelectorHTML = '';
    if (item.hasSizes && item.sizes) {
      sizeSelectorHTML = `
        <div class="mt-3 pt-2.5 border-t border-[#ECE3D5] flex items-center justify-between gap-1.5">
          <span class="text-[11px] font-extrabold uppercase tracking-wider text-[#5C5D6E]">Size:</span>
          <div class="flex items-center gap-1">
            ${item.sizes.map((sz, idx) => `
              <button type="button" onclick="selectFriesSize('${item.id}', ${idx})"
                class="size-pill px-2.5 py-1 rounded-lg text-[11px] font-extrabold border border-[#ECE3D5] cursor-pointer ${item.selectedSizeIndex === idx ? 'active' : 'bg-[#FBF7F0] text-[#1D1E2C] hover:border-[#1D1E2C]'}">
                ${sz.label} &bull; Rs.${sz.price}
              </button>
            `).join('')}
          </div>
        </div>`;
    }

    const badgeHTML = isMegaDeal
      ? `<span class="px-3 py-1 rounded-full bg-[#F4A261] text-[#1D1E2C] font-extrabold text-[11px] uppercase tracking-wider shadow-md flex items-center gap-1">
           <i class="fa-solid fa-crown text-[10px]"></i> BEST VALUE
         </span>`
      : `<span class="px-2.5 py-1 rounded-full bg-[#1D1E2C]/80 backdrop-blur-xs text-white font-bold text-[11px] tracking-wide">${item.badge}</span>`;

    return `
      <article class="menu-card flex flex-col justify-between overflow-hidden group ${isMegaDeal ? 'ring-2 ring-[#F4A261]' : ''}">
        <div>
          <div class="card-img-wrap relative h-48 w-full overflow-hidden bg-[#1D1E2C]">
            <img src="${item.image}" alt="${item.name}" loading="lazy" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"></div>
            <div class="absolute top-3 left-3 z-10">${badgeHTML}</div>
            <span class="absolute bottom-2.5 left-3 text-[11px] font-bold uppercase tracking-wider text-white/90 bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-md">${item.category}</span>
            ${qtyInCart > 0 ? `<span class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#2A9D8F] text-white font-extrabold text-xs shadow-md">${qtyInCart} in Cart</span>` : ''}
          </div>
          <div class="p-5 pb-3">
            <h3 class="font-oswald text-xl font-bold text-[#1D1E2C] group-hover:text-[#E63946] transition-colors leading-snug">${item.name}</h3>
            <p class="text-xs sm:text-[13px] text-[#5C5D6E] mt-1.5 line-clamp-2 leading-relaxed">${item.description}</p>
            ${sizeSelectorHTML}
          </div>
        </div>
        <div class="px-5 pb-5 pt-2 flex items-center justify-between gap-3">
          <div>
            <span class="block text-[10px] font-bold uppercase tracking-wider text-[#5C5D6E]">Price</span>
            <span id="price-display-${item.id}" class="font-display text-2xl text-[#1D1E2C] tracking-wide">Rs. ${activePrice.toLocaleString()}</span>
          </div>
          <button type="button" onclick="addToCart('${item.id}')" class="btn-primary-fire px-4 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm inline-flex items-center gap-1.5 cursor-pointer">
            <i class="fa-solid fa-plus text-xs"></i><span>Add to Cart</span>
          </button>
        </div>
      </article>`;
  }).join('');
}

function getEffectiveItemPrice(item) {
  if (item.hasSizes && item.sizes) return item.sizes[item.selectedSizeIndex || 0].price;
  return item.price;
}

function getItemCountInCart(item) {
  return cart.filter(c => c.id === item.id).reduce((sum, c) => sum + c.quantity, 0);
}

function selectFriesSize(itemId, sizeIdx) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item || !item.sizes) return;
  item.selectedSizeIndex = sizeIdx;
  renderMenu();
}

function setCategory(category) {
  currentCategory = category;
  document.querySelectorAll('.category-tab').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-category') === category);
  });
  renderMenu();
}

function selectCategoryAndScroll(category, event) {
  if (event) event.preventDefault();
  setCategory(category);
  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
}

function handleSearchAndFilter() { renderMenu(); }

function resetMenuFilters() {
  const searchInput = document.getElementById('menu-search-input');
  const sortSelect = document.getElementById('menu-sort-select');
  if (searchInput) searchInput.value = '';
  if (sortSelect) sortSelect.value = 'default';
  setCategory('All Items');
}

// ---------------------------------------------------------------------
// 5. CART MANAGEMENT
// ---------------------------------------------------------------------
function addToCart(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  let cartKey = item.id;
  let displayName = item.name;
  let unitPrice = item.price;
  let sizeLabel = null;

  if (item.hasSizes && item.sizes) {
    const chosenSize = item.sizes[item.selectedSizeIndex || 0];
    cartKey = `${item.id}_${chosenSize.label}`;
    displayName = `${item.name} (${chosenSize.name})`;
    unitPrice = chosenSize.price;
    sizeLabel = chosenSize.label;
  }

  const existing = cart.find(c => c.cartKey === cartKey);
  if (existing) existing.quantity += 1;
  else cart.push({ cartKey, id: item.id, name: displayName, price: unitPrice, image: item.image, category: item.category, sizeLabel, quantity: 1 });

  saveCart();
  updateCartUI();
  renderMenu();
  showToast(`Added "${displayName}" to cart!`);

  const badge = document.getElementById('nav-cart-count');
  if (badge) {
    badge.classList.add('scale-125');
    setTimeout(() => badge.classList.remove('scale-125'), 220);
  }
}

function updateQuantity(cartKey, delta) {
  const idx = cart.findIndex(c => c.cartKey === cartKey);
  if (idx === -1) return;
  cart[idx].quantity += delta;
  if (cart[idx].quantity <= 0) cart.splice(idx, 1);
  saveCart();
  updateCartUI();
  renderMenu();
}

function removeFromCart(cartKey) {
  cart = cart.filter(c => c.cartKey !== cartKey);
  saveCart();
  updateCartUI();
  renderMenu();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  renderMenu();
  showToast('Cart cleared');
}

function getCartTotals() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal === 0 ? 0 : (subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : STANDARD_DELIVERY_FEE);
  return { totalItems, subtotal, deliveryFee, grandTotal: subtotal + deliveryFee };
}

function updateCartUI() {
  const { totalItems, subtotal, deliveryFee, grandTotal } = getCartTotals();

  document.getElementById('nav-cart-count').textContent = `(${totalItems})`;
  document.getElementById('drawer-subtitle').textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'items'} in your bag`;

  const mobileFloating = document.getElementById('mobile-floating-cart');
  document.getElementById('mobile-bar-count').textContent = totalItems;
  document.getElementById('mobile-bar-total').textContent = `Rs. ${grandTotal.toLocaleString()}`;
  mobileFloating.classList.toggle('hidden', totalItems === 0);

  document.getElementById('clear-cart-btn').classList.toggle('hidden', totalItems === 0);

  const freeDeliveryText = document.getElementById('free-delivery-text');
  if (subtotal === 0) {
    freeDeliveryText.innerHTML = `Order <strong class="text-[#E63946]">Rs. 1,500+</strong> to unlock <strong>FREE Delivery!</strong>`;
  } else if (subtotal < FREE_DELIVERY_THRESHOLD) {
    const remaining = FREE_DELIVERY_THRESHOLD - subtotal;
    freeDeliveryText.innerHTML = `Add <strong class="text-[#E63946]">Rs. ${remaining.toLocaleString()}</strong> more for <strong class="text-[#2A9D8F]">FREE Delivery!</strong>`;
  } else {
    freeDeliveryText.innerHTML = `<span class="text-[#2A9D8F] font-extrabold"><i class="fa-solid fa-circle-check mr-1"></i> Congrats! You unlocked FREE Delivery!</span>`;
  }

  const container = document.getElementById('cart-items-container');
  const formSection = document.getElementById('checkout-form-section');

  if (cart.length === 0) {
    formSection.classList.add('hidden');
    container.innerHTML = `
      <div class="text-center py-12 px-4 bg-white rounded-2xl border border-[#ECE3D5]">
        <div class="w-16 h-16 mx-auto rounded-full bg-[#FBF7F0] text-[#E63946] flex items-center justify-center text-2xl mb-3">
          <i class="fa-solid fa-burger"></i>
        </div>
        <h4 class="font-display text-2xl text-[#1D1E2C]">YOUR CART IS HUNGRY</h4>
        <p class="text-xs text-[#5C5D6E] mt-1 mb-5">Add crispy zingers, shawarmas, or hot deals to start your order.</p>
        <button onclick="toggleCartDrawer(false)" class="btn-primary-fire px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider cursor-pointer">Browse Menu</button>
      </div>`;
  } else {
    formSection.classList.remove('hidden');
    container.innerHTML = cart.map(item => `
      <div class="bg-white p-3.5 rounded-2xl border border-[#ECE3D5] flex items-center gap-3.5 shadow-2xs">
        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-xl object-cover shrink-0 bg-[#1D1E2C]" />
        <div class="flex-1 min-w-0">
          <h5 class="font-bold text-sm text-[#1D1E2C] truncate">${item.name}</h5>
          <p class="text-xs font-extrabold text-[#E63946] mt-0.5">Rs. ${item.price.toLocaleString()} <span class="text-[#5C5D6E] font-normal">&times; ${item.quantity}</span></p>
          <div class="flex items-center justify-between mt-2">
            <div class="inline-flex items-center gap-2 bg-[#FBF7F0] border border-[#ECE3D5] rounded-lg px-1.5 py-0.5">
              <button type="button" onclick="updateQuantity('${item.cartKey}', -1)" class="w-6 h-6 rounded text-[#1D1E2C] hover:bg-white font-extrabold text-xs flex items-center justify-center cursor-pointer">&minus;</button>
              <span class="text-xs font-extrabold text-[#1D1E2C] min-w-[18px] text-center">${item.quantity}</span>
              <button type="button" onclick="updateQuantity('${item.cartKey}', 1)" class="w-6 h-6 rounded text-[#1D1E2C] hover:bg-white font-extrabold text-xs flex items-center justify-center cursor-pointer">&plus;</button>
            </div>
            <div class="flex items-center gap-2.5">
              <span class="font-display text-base text-[#1D1E2C]">Rs. ${(item.price * item.quantity).toLocaleString()}</span>
              <button type="button" onclick="removeFromCart('${item.cartKey}')" class="text-[#5C5D6E] hover:text-[#E63946] text-xs p-1 cursor-pointer"><i class="fa-solid fa-trash-can"></i></button>
            </div>
          </div>
        </div>
      </div>`).join('');
  }

  document.getElementById('cart-subtotal').textContent = `Rs. ${subtotal.toLocaleString()}`;
  document.getElementById('cart-delivery').innerHTML = subtotal === 0 ? 'Rs. 0'
    : (deliveryFee === 0 ? '<span class="text-[#2A9D8F] font-extrabold">FREE</span>' : `Rs. ${deliveryFee}`);
  document.getElementById('cart-grand-total').textContent = `Rs. ${grandTotal.toLocaleString()}`;
}

function toggleCartDrawer(open) {
  const backdrop = document.getElementById('cart-backdrop');
  const drawer = document.getElementById('cart-drawer');
  const errorMsg = document.getElementById('checkout-error-msg');
  if (errorMsg) errorMsg.classList.add('hidden');

  if (open) {
    backdrop.classList.add('open');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  } else {
    backdrop.classList.remove('open');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ---------------------------------------------------------------------
// 6. WHATSAPP CHECKOUT
// ---------------------------------------------------------------------
function submitWhatsAppOrder() {
  const errorEl = document.getElementById('checkout-error-msg');
  errorEl.classList.add('hidden');

  if (cart.length === 0) {
    showToast('Your cart is empty! Add some food first.');
    return;
  }

  const name = document.getElementById('cust-name').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();
  const address = document.getElementById('cust-address').value.trim();
  const notes = document.getElementById('cust-notes').value.trim();

  if (!name || !phone || !address) {
    errorEl.textContent = 'Please fill in your Name, Phone Number, and Delivery Address to place your order.';
    errorEl.classList.remove('hidden');
    errorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  const { subtotal, deliveryFee, grandTotal } = getCartTotals();

  const lines = [];
  lines.push(`*${WHATSAPP_DEFAULT_MSG}* 🍕🍔`);
  lines.push('--------------------------------');
  lines.push('*NEW ORDER - ROMA & CRUST*');
  lines.push('--------------------------------');
  lines.push('*Order Items:*');
  cart.forEach((item, idx) => {
    lines.push(`${idx + 1}. ${item.name} x${item.quantity} = Rs. ${(item.price * item.quantity).toLocaleString()}`);
  });
  lines.push('--------------------------------');
  lines.push(`*Subtotal:* Rs. ${subtotal.toLocaleString()}`);
  lines.push(`*Delivery Fee:* ${deliveryFee === 0 ? 'FREE' : `Rs. ${deliveryFee}`}`);
  lines.push(`*GRAND TOTAL:* *Rs. ${grandTotal.toLocaleString()}*`);
  lines.push('--------------------------------');
  lines.push('*Customer Details:*');
  lines.push(`👤 *Name:* ${name}`);
  lines.push(`📞 *Phone:* ${phone}`);
  lines.push(`📍 *Address:* ${address}`);
  if (notes) lines.push(`📝 *Notes:* ${notes}`);
  lines.push('--------------------------------');
  lines.push('Payment Method: Cash on Delivery');

  const encodedText = encodeURIComponent(lines.join('\n'));
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  showToast('Opening WhatsApp with your order...');
}

// ---------------------------------------------------------------------
// 7. UI HELPERS
// ---------------------------------------------------------------------
function showToast(message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast-item pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#1D1E2C] text-white text-xs sm:text-sm font-bold shadow-2xl border border-white/15';
  toast.innerHTML = `
    <span class="w-6 h-6 rounded-full bg-[#2A9D8F] text-white flex items-center justify-center shrink-0">
      <i class="fa-solid fa-check text-xs"></i>
    </span>
    <span>${message}</span>`;
  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

function switchHeroShowcase(imgUrl, titleText, btnEl) {
  const img = document.getElementById('hero-showcase-img');
  const title = document.getElementById('hero-showcase-title');
  if (img && title) {
    img.style.opacity = '0.4';
    setTimeout(() => {
      img.src = imgUrl;
      title.textContent = titleText;
      img.style.opacity = '1';
    }, 160);
  }

  document.querySelectorAll('.hero-thumb-btn').forEach(btn => {
    btn.classList.remove('bg-[#1D1E2C]', 'text-white', 'active');
    btn.classList.add('text-[#1D1E2C]');
  });
  if (btnEl) {
    btnEl.classList.add('bg-[#1D1E2C]', 'text-white', 'active');
    btnEl.classList.remove('text-[#1D1E2C]');
  }
}

function toggleMobileMenu() {
  const panel = document.getElementById('mobile-menu-panel');
  const icon = document.getElementById('mobile-menu-icon');
  if (panel.classList.contains('hidden')) {
    panel.classList.remove('hidden');
    icon.classList.replace('fa-bars', 'fa-xmark');
  } else {
    panel.classList.add('hidden');
    icon.classList.replace('fa-xmark', 'fa-bars');
  }
}

function handleNewsletterSubmit(event) {
  event.preventDefault();
  const input = document.getElementById('newsletter-email');
  if (input && input.value.trim()) {
    showToast(`Welcome to the VIP Club! Deals sent to ${input.value.trim()}`);
    input.value = '';
  }
}

// ---------------------------------------------------------------------
// 8. INIT
// ---------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  updateCartUI();

  const navbar = document.getElementById('main-navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 24);
  }, { passive: true });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') toggleCartDrawer(false);
  });
});