const products = [

    {
        id:1,
        name:"CTB4.거울(중)",
        category:"손거울",
        price:"30,000",
        color:"black",
        image:"../image/handmirror.png",
        description:"폴리에스테르 재질과 아크릭 재질로 만든 전통 공예품으로 가로 10cm, 세로 20cm 크기이며 국내산 제품이고 습기와 화기, 물리 충격에 주의하세요."
    },

    {
        id:2,
        name:"CTS2.동전지갑",
        category:"통/함 종류",
        price:"4,000",
        color:"blue",
        image:"../image/traditionalwallet.png",
        description:"폴리에스테르로 만든 전통공예품으로, 가로 11cm, 세로 7cm 크기이며 국내산 제품이고 습기와 화기, 물리 충격에 주의하세요."
    },

    {
        id:3,
        name:"수복주머니",
        category:"주머니",
        price:"8,000",
        color:"black",
        image:"../image/variouspocket.png",
        description:"폴레에스테르로 만든 전통공예품으로, 가로 12cm, 세로 12cm 크기이며 국내산 제품이고 습기와 화기, 물리 충격에 주의하세요."
    },


];

const productList = document.getElementById("productList");
const recommendList = document.getElementById("recommendList");
const detail = document.getElementById("detail");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const categoryBtns = document.querySelectorAll(".categoryBtn");


// ================================
// 상품 출력
// ================================

function displayProducts(productArray){

    productList.innerHTML="";

    productArray.forEach(product=>{

        productList.innerHTML += `

        <div class="card">

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>${product.price}원</p>

            <button onclick="showDetail(${product.id})">
                상세보기
            </button>

        </div>

        `;

    });

}



// ================================
// 추천상품
// ================================

function displayRecommend(){

    recommendList.innerHTML="";

    // 처음 3개 추천

    products.slice(0,3).forEach(product=>{

        recommendList.innerHTML += `

        <div class="card">

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>${product.price}원</p>

            <button onclick="showDetail(${product.id})">

                상세보기

            </button>

        </div>

        `;

    });

}



// ================================
// 상세보기
// ================================

function showDetail(id){

    const product = products.find(item=>item.id===id);

    detail.innerHTML=`

        <h2>${product.name}</h2>

        <img src="${product.image}" width="250">

        <p><b>카테고리 :</b> ${product.category}</p>

        <p><b>가격 :</b> ${product.price}원</p>

        <p>${product.description}</p>

    `;

}



// ================================
// 검색
// ================================

searchBtn.addEventListener("click",()=>{

    const keyword = searchInput.value.trim();

    const result = products.filter(product=>{

        return product.name.includes(keyword);

    });

    displayProducts(result);

});



// 엔터 검색

searchInput.addEventListener("keyup",(e)=>{

    if(e.key==="Enter"){

        searchBtn.click();

    }

});




// ================================
// 카테고리
// ================================

categoryBtns.forEach(button=>{

    button.addEventListener("click",function(){

        const category = button.dataset.category;

        // 전체상품

        if(category==="전체메뉴"){

            displayProducts(products);

        } else {

            const filtered = products.filter(product=>{

                return product.category===category;
        
        });

        displayProducts(filtered);

    }

    });

});




// ================================
// 시작
// ================================

displayProducts(products);

displayRecommend();