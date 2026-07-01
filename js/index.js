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
        image: "../image/bluecolorkidhanbok.png",
        description: "고급 물실크 계열의 원단으로 양단보다 통기성이 좋아 4계절 모두 입을 수 있습니다.",
        description2: "물빨래가 가능하지만, 살살 손세탁해야 하며 은박이 열에 약하므로 다림질 할때 조심!"
    },
    
    {
        id: 3,
        name: "P024.남성",
        category: "개량한복",
        price: "439,000",
        image: "../image/malefixedhanbok.png",
        description: "쾌자(긴조끼)와 저고리, 바지로 구성되어 있으며 사이즈는 95부터 105까지이고 소재는 물실크이다.",
        description2: "주문 후 제작되는 상품으로 제작기각은 7~10일 정도 소요되며, 재고가 없는 상태로 주문 시점에 바로 제작/배송된다."
    },

    {
        id: 4,
        name: "K124.여성",
        category: "개량한복",
        price: "265,000",
        image: "../image/femalefixedhanbok.png",
        description: "저고리와 원피스형 치마로 구성되어 있으며 사이즈는 66, 77, 88이 있고 소재는 물실크이다.",
        description2: "주문 후 제작되는 상품으로 제작기각은 7~10일 정도 소요되며, 재고가 없는 상태로 주문 시점에 바로 제작/배송된다."
    },

    {
        id: 5,
        name: "JH101.물실크(여성)",
        category: "결혼한복",
        price: "390,000",
        image: "../image/weddingfixedfemalehanbok.png",
        description: "저고리와 치마로 구성되어 있고 색상은 변경이 가능하며, 개인 맞춤제작 상품으로 교환이나 반품이 불가하다.",
        description2: "주문 후 제작되는 상품으로 제작기각은 7~10일 정도 소요되며, 재고가 없는 상태로 주문 시점에 바로 제작/배송된다."
    },

    {
        id: 6,
        name: "DH905.(남성쾌자/한벌)_물실크",
        category: "결혼한복",
        price: "460,000",
        image: "../image/maletraditionalhanbok.png",
        description: "기본적으로 쾌자 조끼만 제공되지만, 저고리나 바지는 별도로 구매 가능하며 개인 맞춤제작 상품으로 교환이나 반품이 불가하다.",
        description2: "주문 후 제작되는 상품으로 제작기각은 7~10일 정도 소요되며, 재고가 없는 상태로 주문 시점에 바로 제작/배송된다."
    },

    {
        id: 7,
        name: "M042.(공용)긴팔_곤색",
        category: "생활한복",
        price: "59,900",
        image: "../image/activityhanbok.png",
        description: "원산 순면 100% 소재이며, 저고리와 바지로 구성되었고, 소/중/대/특대/별대 사이즈가 있다.",
        description2: "색상은 먹색, 곤색, 분홍, 보라, 코코아, 수박, 북청, 회색, 흰/먹색으로 구성되어 있고 남녀공용이다."
    },

    {
        id: 8,
        name: "M531.(공용)긴팔_연회색+팥죽",
        category: "생활한복",
        price: "73,000",
        image: "../image/livinghanbok.png",
        description: "원단 순면 100% 소재이며, 조끼와 저고리와 바지로 구성되었고, 소/중/대/특대/별대 사이즈가 있다.",
        description2: "색상은 곤색, 회색, 검정, 연회색/팥죽 색상으로 구성되어 있다."
    }

];





// 상품 목록 출력


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



// 추천 상품 출력

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



// 상품 검색

// 상품 검색
function searchProduct() {

    const keyword = document
        .getElementById("searchInput")
        .value
        .trim();

    // 검색어가 없으면 전체 출력
    if (keyword === "") {
        displayProducts(products);
        return;
    }

    const result = products.filter(function(product) {
        return product.name.trim() === keyword;
    });

    displayProducts(result);

    if (result.length === 0) {
        alert("검색 결과가 없습니다.");
    }
}

document
    .getElementById("searchBtn")
    .addEventListener("click", searchProduct);

// 카테고리 필터 (filter)

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



// 상세보기 (find)

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

displayProducts(products);
displayRecommend();




