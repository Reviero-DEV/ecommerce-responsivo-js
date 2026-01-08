const productsContainer = document.getElementById('cards');
const navBestSellers = document.querySelector('.best-sellers');
const exploreBtn = document.getElementById('moreProducts');
const navCategories = document.querySelector('.category-nav');
const cartCount = document.getElementById('cart-count');
const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');


// DOM DO CART
const listCart = document.querySelector(".cart-list");
const priceTotal = document.getElementById("price-total");
const checkoutButton = document.querySelector(".checkout-button");
const cartResume = document.querySelectorAll(".cart-resume");
const listRecomend = document.querySelector(".product-recomended");

document.addEventListener('DOMContentLoaded', (event) => {
  loadCart();
  atualizarUI();
});

const products = [
  {
    id: 1,
    name: "Smartphone Samsung Galaxy S24 Ultra",
    description: "O smartphone líder de mercado da Samsung com câmera de 200MP e IA integrada.",
    highlight: true,
    value: 7.99,
    image: src = "https://a-static.mlcdn.com.br/800x600/smartphone-samsung-galaxy-s24-ultra-68-galaxy-ai-256gb-titanio-cinza-5g-12gb-ram-cam-quadrupla-200mp-selfie-12mp-bateria-5000mah-dual-chip/magazineluiza/238093300/5271f772ac82a4fdd5f0741d520d08b4.jpg",
    category: "smartphones"
  },
  {
    id: 2,
    name: "Notebook Dell XPS 13 Plus",
    description: "Notebook premium com tela OLED e design moderno para produtividade.",
    highlight: true,
    value: 12.50,
    image: src = "https://www.netcombrunei.com/media/catalog/product/cache/7fba28f2ffd14e7be21e170ce6bb6de8/d/e/dell-5164_1_1.jpg",
    category: "computadores"
  },
  {
    id: 3,
    name: "Fone de Ouvido Sony WH-1000XM5",
    description: "Headphone sem fio com cancelamento de ruído líder de mercado e bateria de 40 horas.",
    value: 2.50,
    image: src = "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
    category: "headphones"
  },
  {
    id: 4,
    name: "Tablet Apple iPad Pro (M2)",
    description: "Potente tablet para criadores de conteúdo e profissionais, com chip M2.",
    highlight: true,
    value: 6.50,
    image: src = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-11-select-202210?wid=940&hei=1112&fmt=png-alpha&.v=1664497346282",
    category: "tablets"
  },
  {
    id: 5,
    name: "Smartwatch Apple Watch Series 9",
    description: "Relógio inteligente com monitoramento avançado de saúde e tela brilhante.",
    highlight: true,
    value: 3.99,
    image: src = "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS24u2JEUGQkc59QRkhKNuKowYUAPMp1vnjtpgrcJF5dqr4NHbgzZW0lUhUPaWFjVU-8QZQnbCaIZnaF44cYt7R8RDFyCqB",
    category: "wearables"
  },
  {
    id: 6,
    name: "Power Bank Anker 10000mAh",
    description: "Carregador portátil ultracompacto com tecnologia de carregamento rápido.",
    value: 0.50,
    image: src = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ_sVrhf5qPvbPtmzoakxcmbaACFZYZXRdF_ifGOslSB1x_D69-5VJkIHHRhSdSdUV__h6RO1EM5we_em7idkh99JQP91cqGaM8Vuw4nz1ozZnDHz_ze504vkk",
    category: "acessorios"
  },
  {
    id: 7,
    name: "Caixa de Som Portátil JBL Flip 6",
    description: "Novidade: Caixa de som à prova d'água com som potente e bateria de longa duração.",
    value: 0.99,
    image: src = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTJMy7ttsQ2ChtcXWGTN_pyCpOCLMuvuJLiyNBUQ1MCMhXM4ZIy890VfE0Jg2m0WzwpFVGxT43r843YAs24yk4PzUfrUP0QBKOIg-VmR3v84sswTDUU3_s7A3I",
    category: "novidades"
  },
  {
    id: 8,
    name: "Smartphone Google Pixel 8 Pro",
    description: "Celular Google com o melhor processamento de imagem do mercado.",
    value: 5.50,
    image: src = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxmYIYqlN03liwVIntxODoHk9zIDKizw8dF-Xa26DlCiMLjlRKu5vygIaojtWdxq8nyQZq3ogc",
    category: "smartphones"
  },
  {
    id: 9,
    name: "Smartphone Xiaomi Redmi Note 13",
    description: "Excelente custo-benefício com câmera de 108MP e tela AMOLED.",
    value: 1.60,
    image: src = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ-62W-oFGftgvQ_WBVGWE8QWx_Uf2yPSGG-zAd2FOYC-bLxWWKANzdDlye7lcFALBSrUaLDRrt53rZYPGw_42QlFX9CbODvsqSFTxUNfCvTifoog78opnfSw",
    category: "smartphones"
  },
  {
    id: 10,
    name: "Fones Apple AirPods Pro (2ª Geração)",
    description: "Fones in-ear com cancelamento de ruído e áudio espacial imersivo.",
    highlight: true,
    value: 1.80,
    image: src = "https://www.iplace.com.br/file/general/iplace_productpage_airpodspro_2024_hero_airpods_pro_2_small.png?60000902fd30",
    category: "headphones"
  },
  {
    id: 11,
    name: "Mouse Sem Fio Logitech MX Master 3S",
    description: "Mouse ergonômico e de alta precisão para profissionais.",
    value: 0.65,
    image: src = "https://resource.logitech.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/2025-update/mx-master-3s-bluetooth-edition-top-view-graphite-new-1.png",
    category: "acessorios"
  },
  {
    id: 12,
    name: "Teclado Mecânico Gamer Razer BlackWidow V4",
    description: "Teclado com switches mecânicos Razer Green para resposta tátil e sonora.",
    value: 1.10,
    image: src = "https://http2.mlstatic.com/D_Q_NP_981786-MLA99993480651_112025-L.webp",
    category: "acessorios"
  },
  {
    id: 13,
    name: "Tablet Xiaomi Pad 6",
    description: "Tablet Android com tela de 11 polegadas e ótimo desempenho para mídia.",
    value: 2.30,
    image: src = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSDcjlDCWCVg4D8dALdNQWMFoACxSBqrbFbM8J0uEytbnUQ48U8gDgbwR5Z7mZ3V7tFmG6uMjRBWVhNgaN6S_LJcBUCxJoG",
    category: "tablets"
  },
  {
    id: 14,
    name: "Notebook Apple MacBook Air M3",
    description: "Notebook extremamente fino e leve com o poderoso chip M3 da Apple.",
    value: 10.50,
    image: src = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRWy4Brbk78GGs9NcTuRUMT_gUjVp9jfurQzLlihleSgyV9A4wUI7UsxiqwAAtfxRASCurIZO-5eIS1VQe2nhJ9a6bmjebI98ZojoNNaogLDJLnPJiN7WUy2v0",
    category: "computadores"
  },
  {
    id: 15,
    name: "Monitor Dell UltraSharp U2724D",
    description: "Monitor de 27 polegadas com resolução QHD e 120Hz, ideal para trabalho e design.",
    value: 3.20,
    image: src = "https://http2.mlstatic.com/D_Q_NP_775310-MLA99991618505_112025-L.webp",
    category: "computadores"
  },
  {
    id: 16,
    name: "Câmera de Segurança Wyze Cam v4",
    description: "Câmera inteligente com visão noturna colorida e detecção de movimento por IA.",
    value: 0.30,
    image: src = "https://http2.mlstatic.com/D_Q_NP_778270-MLA99972749059_112025-L.webp",
    category: "acessorios"
  },
  {
    id: 17,
    name: "Carregador GaN UGREEN 100W",
    description: "Carregador compacto e potente com 4 portas (USB-C e USB-A) para múltiplos dispositivos.",
    value: 0.45,
    image: src = "https://http2.mlstatic.com/D_NQ_NP_751641-MLA99474142506_112025-O.webp",
    category: "acessorios"
  },
  {
    id: 18,
    name: "Headset Gamer Astro A50 X",
    description: "Headset sem fio premium para jogos com base de carregamento e áudio de alta fidelidade.",
    value: 2.20,
    image: src = "https://http2.mlstatic.com/D_Q_NP_893599-MLA99553736284_122025-L.webp",
    category: "headphones"
  },
  {
    id: 19,
    name: "Óculos VR Meta Quest 3",
    description: "Novidade: Sistema de realidade virtual e mista autônomo com gráficos aprimorados.",
    value: 4.30,
    image: src = "https://http2.mlstatic.com/D_NQ_NP_696739-MLB89893274284_082025-O-capa-protetora-de-silicone-para-meta-quest-3-vr-protetor.webp",
    category: "novidades"
  },
  {
    id: 20,
    name: "Smartband Samsung Galaxy Fit 3",
    description: "Pulseira fitness leve e elegante com monitoramento de saúde e sono 24/7.",
    value: 0.30,
    image: src = "https://http2.mlstatic.com/D_Q_NP_873980-MLA99983291435_112025-L.webp",
    category: "wearables"
  },
  {
    id: 21,
    name: "SSD Externo SanDisk Extreme 1TB",
    description: "Armazenamento portátil robusto e rápido, ideal para criadores de conteúdo em movimento.",
    value: 0.70,
    image: src = "https://http2.mlstatic.com/D_Q_NP_789542-MLA99509383338_112025-L.webp",
    category: "acessorios"
  },
  {
    id: 22,
    name: "Roteador TP-Link Archer AXE75 Wi-Fi 6E",
    description: "Roteador tri-band com velocidades ultrarrápidas e cobertura ampliada para casas inteligentes.",
    value: 0.90,
    image: src = "https://http2.mlstatic.com/D_Q_NP_809913-MLA99474067050_112025-L.webp",
    category: "acessorios"
  }
];

function atualizarUI() {
  if (!renderProducts) {
    console.log('render nao encontrado');
  };
  // console.log('atualizar ui disparado');
  renderProducts(products);
  // console.log('renderProducts chamado');
  filterProducts();
  // console.log('filterProducts chamado');
  atualizarCartUI();
}

// FUNCOES DO CART
let cart = [];

const CART_KEY = 'movimentacaoDoCarrinho';

function saveCart() {
  const cartJSON = JSON.stringify(cart);
  localStorage.setItem(CART_KEY, cartJSON)
}

function loadCart() {
  const cartItemsSaved = localStorage.getItem(CART_KEY);
  if (cartItemsSaved) {
    const cartReload = JSON.parse(cartItemsSaved);
    cart = cartReload || [];
  } else {
    console.log("NENHUM ITEM ADICIONADO AO CARRINHO");
  }
  atualizarCartUI();
  cartPanel();
  prodRecomends(products);

}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  cartPanel(cart);
  saveCart();

}

function atualizarCartUI() {

  if (!cartCount) {
    console.log("Erro: Elemento cartCount não foi encontrado!");
    return;
  }

  cartCount.textContent = cart.length;
  cartCount.style.display = cart.length >= 1 ? 'block' : 'none';
  saveCart();
}

function cartPanel() {
  const messageCart = document.getElementById("cart-message");
  messageCart.innerHTML = `Seu carrinho esta vazio 
  <button><a href="/index.html/cards">Explorar produtos</a></button>`;
  listCart.innerHTML = "";

  if (cart.length > 0) {
    listCart.style.display = 'block';
    messageCart.style.display = 'none';

    // AGRUPAR PRODUTOS POR ID E QTY
    const productCountMap = {};
    cart.forEach(product => {
      if (productCountMap[product.id]) {
        productCountMap[product.id].quantity++;
      } else {
        productCountMap[product.id] = {
          product: product,
          quantity: 1
        };
      }
    });

    Object.values(productCountMap).forEach(({ product, quantity }) => {
      const cartProduct = document.createElement('li');
      cartProduct.classList.add("cart-item");

      const subtotal = (product.value * quantity).toFixed(2);

      cartProduct.innerHTML = `
        <img src="${product.image}" alt="${product.name}" width="50">
        <span>${product.name}</span>
        <div class='info-buy'>
        <div class="quantity-control">
          <button class="btn-decrement" onclick="decrementQuantity(${product.id})"><i class="fa-solid fa-minus"></i></button>
          
          <input
            type="number"
            value="${quantity}"
            min="1"
            onchange="updateFromInput(${product.id}, this.value)"
            aria-label="Quantity"
          />

          <button class="btn-increment" onclick="incrementQuantity(${product.id})"><i class="fa-solid fa-plus"></i></button>
        </div>

        <span>R$ ${subtotal}</span>
        <button class="btn-remove" onclick="removeFromCart(${product.id})"><i class="fa-regular fa-trash-can"></i></button>
        </div>`;

      listCart.appendChild(cartProduct);
    });

    // Atualizar total do carrinho
    updateCartTotal();
    cartResume.forEach(el => el.style.display = 'block');
  } else {
    listCart.style.display = 'none';
    cartResume.forEach(el => el.style.display = 'none');
    messageCart.style.display = 'flex';
  }

  saveCart();

}

function updateCartTotal() {
  const total = cart.reduce((sum, product) => sum + product.value, 0).toFixed(2);
  if (priceTotal) {
    priceTotal.textContent = `R$ ${total}`;
  }
}

function incrementQuantity(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  saveCart();
  cartPanel();
};

function decrementQuantity(productId) {
  const index = cart.findIndex(p => p.id === productId);
  if (index > -1) {
    cart.splice(index, 1);
  };
  saveCart();
  cartPanel();
}

function updateFromInput(productId, newQuantity) {
  const quantity = parseInt(newQuantity);
  const currentQty = cart.filter(p => p.id === productId).length;
  const difference = quantity - currentQty;

  if (difference > 0) {
    for (let i = 0; i < difference; i++) {
      incrementQuantity(productId);
    }
  } else if (difference < 0) {
    for (let i = 0; i < Math.abs(difference); i++) {
      decrementQuantity(productId);
    }
  }
}

function removeFromCart(productId) {
  cart = cart.filter(p => p.id !== productId);
  saveCart();
  atualizarCartUI();
  cartPanel();
}

function prodRecomends(products) {
  console.log("listRecomend encontrado?", listRecomend);

  if (!listRecomend) {
    console.error("Elemento .recomends não encontrado no HTML!");
    return;
  }

  listRecomend.innerHTML = '';
  const renderRecomends = products.sort(() => 0.5 - Math.random()).slice(0, 9);

  renderRecomends.forEach(product => {

    const recomendCard = document.createElement('div');
    recomendCard.classList.add('card');
    recomendCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description.slice(0, 40)}...</p>
      <span>$${product.value.toFixed(2)}</span>
     
    `;
    const btn = document.createElement('button');
    btn.textContent = 'Adicionar ao Carrinho';
    btn.addEventListener('click', () => addToCart(product.id));
    recomendCard.appendChild(btn);

    listRecomend.appendChild(recomendCard);

  });
  saveCart();
}


function renderProducts(list = products) {
  productsContainer.innerHTML = '';
  list.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description.slice(0, 40)}...</p>
      <span>$${product.value.toFixed(2)}</span>
     
    `;
    const btn = document.createElement('button');
    btn.textContent = 'Adicionar ao Carrinho';
    btn.addEventListener('click', () => addToCart(product));
    productCard.appendChild(btn);
    productsContainer.appendChild(productCard);
    saveCart();


  });
}

function filterProducts(highlight, category) {

  const productsFiltered = products.filter(product => {
    return (highlight ? product.highlight : true) && (category ? product.category === category : true);
  });
  renderProducts(productsFiltered);
  navBestSellers.innerHTML = '';
  products.filter(p => p.highlight).forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description.slice(0, 40)}...</p>
      <span>$${product.value.toFixed(2)}</span>
      <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
    `;
    navBestSellers.appendChild(productCard);
  });

}

navCategories.addEventListener('click', (e) => {
  const categ = e.target.getAttribute("value");
  const filtered = products.filter(p => p.category === categ)
  console.log(filtered);

  renderProducts(filtered);
});

exploreBtn.addEventListener("click", () => {
  renderProducts(products);
})

inputSearch.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase().trim();
  if (!searchTerm) {
    renderProducts(products);
    return;
  };


  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );
  renderProducts(filtered);

});
// ABRIR OU FECHAR INPUT
btnSearch.addEventListener('click', (e) => {
  e.stopPropagation();
  inputSearch.classList.toggle('hidden');

  inputSearch.value = '';
});
// FECHAR INPUT AO CLICAR FORA
document.addEventListener('click', (e) => {
  if (
    !inputSearch.classList.contains('hidden') &&
    e.target !== inputSearch &&
    e.target !== btnSearch
  ) {
    inputSearch.classList.add('hidden');
    inputSearch.value = '';

  }
});



atualizarUI();
