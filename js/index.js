// ==============================
// 상품 데이터
// ==============================

const products = [

    {
        id: 1,
        name: "연화당의분홍(여)",
        category: "아동한복",
        price: "69,000",
        image: "../image/pinkcolorkidhanbok.png",
        description: "고급 물실크 계열의 원단으로 양단보다 통기성이 좋아 4계절 모두 입을 수 있습니다.",
        description2: "물빨래가 가능하지만, 살살 손세탁해야 하며 은박이 열에 약하므로 다림질 할때 조심!"
    },

    {
        id: 2,
        name: "선비곤색(남)",
        category: "아동한복",
        price: "69,000",
        image: "",
        description: "고급 물실크 계열의 원단으로 양단보다 통기성이 좋아 4계절 모두 입을 수 있습니다.",
        description2: "물빨래가 가능하지만, 살살 손세탁해야 하며 은박이 열에 약하므로 다림질 할때 조심!"
    },
    
    {
        id: 3,
        name: "P024.남성",
        category: "개량한복",
        price: "439,000",
        image: "https://picsum.photos/200?random=3",
        description: "쾌자(긴조끼)와 저고리, 바지로 구성되어 있으며 사이즈는 95부터 105까지이고 소재는 물실크이다.",
        description2: "주문 후 제작되는 상품으로 제작기각은 7~10일 정도 소요되며, 재고가 없는 상태로 주문 시점에 바로 제작/배송된다."
    },

    {
        id: 4,
        name: "청바지",
        category: "개량한복",
        price: 42000,
        image: "https://picsum.photos/200?random=4",
        description: "편안한 착용감의 청바지입니다."
    },

    {
        id: 5,
        name: "텀블러",
        category: "생활용품",
        price: 18000,
        image: "https://picsum.photos/200?random=5",
        description: "보온과 보냉이 뛰어난 텀블러입니다."
    },

    {
        id: 6,
        name: "스탠드 조명",
        category: "생활용품",
        price: 35000,
        image: "https://picsum.photos/200?random=6",
        description: "밝기 조절이 가능한 LED 스탠드입니다."
    },

    {
        id: 7,
        name: "사과",
        category: "식품",
        price: 12000,
        image: "https://picsum.photos/200?random=7",
        description: "신선한 국내산 사과입니다."
    },

    {
        id: 8,
        name: "초콜릿",
        category: "식품",
        price: 5000,
        image: "https://picsum.photos/200?random=8",
        description: "달콤한 밀크 초콜릿입니다."
    }

];


// ==============================
// 상품 목록 출력
// ==============================

function displayProducts(list) {

    const productList = document.getElementById("productList");

    productList.innerHTML = "";

    list.forEach(product => {

        productList.innerHTML += `

        <div class="card">

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>${product.price.toLocaleString()}원</p>

            <button onclick="showDetail(${product.id})">
                상세보기
            </button>

        </div>

        `;

    });

}


// ==============================
// 추천 상품 출력
// ==============================

function displayRecommend() {

    const recommendList = document.getElementById("recommendList");

    recommendList.innerHTML = "";

    const randomProducts = [...products]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    randomProducts.forEach(product => {

        recommendList.innerHTML += `

        <div class="card">

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>${product.price.toLocaleString()}원</p>

            <button onclick="showDetail(${product.id})">
                상세보기
            </button>

        </div>

        `;

    });

}


// ==============================
// 상품 검색 (includes)
// ==============================

function searchProduct() {

    const keyword = document
        .getElementById("searchInput")
        .value
        .trim();

    const result = products.filter(product =>
        product.name.includes(keyword)
    );

    displayProducts(result);

}

document
    .getElementById("searchBtn")
    .addEventListener("click", searchProduct);


// ==============================
// 카테고리 필터 (filter)
// ==============================

const categoryButtons = document.querySelectorAll(".categoryBtn");

categoryButtons.forEach(button => {

    button.addEventListener("click", function () {

        const category = this.dataset.category;

        if (category === "전체") {

            displayProducts(products);

        } else {

            const result = products.filter(product =>
                product.category === category
            );

            displayProducts(result);

        }

    });

});


// ==============================
// 상세보기 (find)
// ==============================

function showDetail(id) {

    const product = products.find(item => item.id === id);

    const detail = document.getElementById("detail");

    detail.innerHTML = `

        <h3>${product.name}</h3>

        <img src="${product.image}" alt="${product.name}">

        <p><strong>카테고리</strong> : ${product.category}</p>

        <p><strong>가격</strong> : ${product.price.toLocaleString()}원</p>

        <p><strong>상품 번호</strong> : ${product.id}</p>

        <p><strong>상품 설명</strong> : ${product.description}</p>

    `;

}


// ==============================
// 처음 실행
// ==============================

displayProducts(products);

displayRecommend();