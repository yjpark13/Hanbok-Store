const products = [

{
    id:1,
    name:"HQ762.물모시한벌(여성)",
    category:"세트",
    price:"129,000",
    image:"../image/femalehanbokset.png",
    description:"저고리와 허리치마로 구성되어 있다. 사이즈는 66/77/88 이고, 소재는 여름용 물모시이며, 기본사이즈만 발송 가능하다.",
    recommend:true
},

{
    id:2,
    name:"HQ766.물모시한벌(남성)",
    category:"세트",
    price:"195,000",
    image:"../image/malehanbokset.png",
    description:"저고리와 바지, 배자조끼로 구성되어 있고, 사이즈는 95/100/105 이고, 소재는 여름용 물모시이며, 기본사이즈만 발송 가능하다.",
    recommend:false
},

{
    id:3,
    name:"아동버선(공용)-돌복전용",
    category:"장신구",
    price:"5,000",
    image:"../image/childbusun.png",
    description:"전통 공예 양말이다, 폴리에스테르 소재의 한국 제이엔제이 인터네셔널에서 제작된 양말이며, 습기나 화기 또는 물리적 충격에 주의한다.",
    recommend:true
},

{
    id:4,
    name:"손수댕기",
    category:"장신구",
    price:"8,000",
    image:"../image/girlchilddaengi.png",
    description:"전통 공예품이자 폴리에스테르 소재로 제작되어 가로 세로 평균 6cm 치수이며 제이엔제이인터네셔널 국내산 제품이고 습기나 화기 또는 물리적 충격에 주의한다.",
    recommend:false
},

{
    id:5,
    name:"CA3.여성꽃신",
    category:"신발",
    price:"34,000",
    image:"../image/femalehanbokshoes.png",
    description:"사이즈는 225~255mm까지 있으며, 소재는 폴리에스테르와 합성가죽으로 제작되었고, 국내산 제품이다.",
    recommend:true
},

{
    id:6,
    name:"CA1733.남성갓신",
    category:"신발",
    price:"70,000",
    image:"../image/malehanbokshoes.png",
    description:"합성 가죽으로 제작되었고, 국내산 제품이다. 사이즈는 245~280mm까지 있으며, 습기나 화기 또는 물리적 충격에 주의한다.",
    recommend:false
}

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

    button.addEventListener("click",()=>{

        const category = button.dataset.category;

        // 전체상품

        if(category==="전체"){

            displayProducts(products);

            return;

        }

        const result = products.filter(product=>{

            return product.category===category;

        });

        displayProducts(result);

    });

});




// ================================
// 시작
// ================================

displayProducts(products);

displayRecommend();
