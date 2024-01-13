const products = [
    {
        image: './images/Image-1.jpg',
        details: "Düz Pamuk 2'li yastık ...",
        price: '99,99 TL',
        onSale: true,
        discountAmount: "50",
        discountPrice: "49,99 TL"
    },
    {
        image: './images/Image-2.jpg',
        details: "Kita Seramik Kase 12 CM Gri",
        price: '29,99 TL',
        onSale: false,
    },
    {
        image: './images/Image-3.jpg',
        details: "Gina Bambu Sepet 32x22x1 ...",
        price: '119,99 TL',
        onSale: true,
        discountAmount: "50",
        discountPrice: "59,99 TL"
    },
    {
        image: './images/Image-4.jpg',
        details: "Paşabahçe Madera Cam Kav...",
        price: '139,99 TL',
        onSale: true,
        discountAmount: "50",
        discountPrice: "69,99 TL"
    },
    {
        image: './images/Image-5.jpg',
        details: "Pure Basic Yüz Havlusu 5...",
        price: '79,99 TL',
        onSale: true,
        discountAmount: "40",
        discountPrice: "47,99 TL"
    },
    {
        image: './images/Image-6.jpg',
        details: "Soft Touch Rabbit Peluş ...",
        price: '249,99 TL',
        onSale: true,
        discountAmount: "30",
        discountPrice: "174,99 TL"
    },
    {
        image: './images/Image-7.jpg',
        details: "Red Rose Bambu Kadın Uzu...",
        price: '12,99 TL',
        onSale: false,
    },
    {
        image: './images/Image-8.jpg',
        details: "Soft Pamuklu Bebe Yastık...",
        price: '14,99 TL',
        onSale: false,
    },
];

const searchInput = document.querySelector("#search-bar");
const searchBtn = document.querySelector(".btn-search");
const container = document.querySelector('.right-content-container');
const resultContent = document.querySelector('.result-content');

document.addEventListener("click", function (event) {
    const isClickInsideSearch = searchInput.contains(event.target);
    const isClickInsideResultContent = resultContent.contains(event.target);
    const isClickBtn = searchBtn.contains(event.target);

    if (!isClickInsideSearch && !isClickInsideResultContent && !isClickBtn) {
        resultContent.style.opacity = "0";
        setTimeout(() => {
            resultContent.style.display = "none";
        }, 200);
    }
});

searchInput.addEventListener("focus", function () {
    resultContent.style.display = "flex";
    setTimeout(() => {
        resultContent.style.opacity = "1";
    }, 0);
});


const createCard = (product) => {
    const card = document.createElement('div');
    card.classList.add('right-content-card');
    if(product.onSale) {
        card.innerHTML = `
        <div class="image-wrapper image-discount" discount-amount="${product.discountAmount}">
        <img src="${product.image}" alt="" srcset="">
        </div>
        <p class="product-details">${product.details}</p>
        <p class="price-2">${product.price}</p>
        <p class="price-discount">Sepette <b>${product.discountPrice}</b></p>
        ` 
    }
    else {
        card.innerHTML = `
        <div class="image-wrapper">
            <img src="${product.image}" alt="" srcset="">
        </div>
        <p class="product-details">${product.details}</p>
        <p class="price">${product.price}</p>
        `
    }

    container.appendChild(card);
}

products.forEach(product => createCard(product));

searchInput.addEventListener("input", function(e){
    const productDetails = document.querySelectorAll(".product-details");
    const search = searchInput.value.toLowerCase();

    productDetails.forEach(productDetail => {
        productDetail.parentElement.style.display = "flex";

        if(!productDetail.innerHTML.toLowerCase().includes(search)){
            productDetail.parentElement.style.display = "none";
        }
    })

});