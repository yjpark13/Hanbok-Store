const products = [

    {
        id:1,
        name:"오버핏 후드티",
        category:"상의",
        price:39000,
        color:"black",
        image:"images/hoodie.jpg",
        description:"편하게 입기 좋은 오버핏 후드티입니다."
    },

    {
        id:2,
        name:"데님 팬츠",
        category:"하의",
        price:49000,
        color:"blue",
        image:"images/jeans.jpg",
        description:"슬림핏 데님 팬츠입니다."
    },

    {
        id:3,
        name:"백팩",
        category:"가방",
        price:59000,
        color:"black",
        image:"images/bag.jpg",
        description:"수납공간이 넓은 백팩입니다."
    },

    {
        id:4,
        name:"운동화",
        category:"신발",
        price:89000,
        color:"white",
        image:"images/shoes.jpg",
        description:"가볍고 편안한 운동화입니다."
    }

];

// =========================
// URL에서 id 가져오기
// =========================

const params = new URLSearchParams(location.search);

const id = Number(params.get("id"));

// =========================
// id가 같은 상품 찾기
// =========================

const product = products.find(item => item.id === id);

const productDetail = document.querySelector("#productDetail");

// =========================
// 상품이 없는 경우
// =========================

if(!product){

    productDetail.innerHTML=`
        <div class="not-found">
            존재하지 않는 상품입니다.
        </div>
    `;

}else{

    productDetail.innerHTML=`

    <div class="product-image">

        <img src="${product.image}" alt="${product.name}">

    </div>

    <div class="product-info">

        <h2>${product.name}</h2>

        <p class="category">
            카테고리 : ${product.category}
        </p>

        <p class="price">
            ${product.price.toLocaleString()}원
        </p>

        <p class="description">
            ${product.description}
        </p>

        <div class="quantity">

            <button id="minusBtn">-</button>

            <input
                type="text"
                id="quantity"
                value="1"
                readonly>

            <button id="plusBtn">+</button>

        </div>

        <div class="total">

            총 가격 :
            <span id="totalPrice">
                ${product.price.toLocaleString()}
            </span>
            원

        </div>

    </div>

    `;

    // =========================
    // 수량 선택
    // =========================

    const quantity=document.querySelector("#quantity");

    const totalPrice=document.querySelector("#totalPrice");

    const plusBtn=document.querySelector("#plusBtn");

    const minusBtn=document.querySelector("#minusBtn");

    let count=1;

    function updatePrice(){

        quantity.value=count;

        totalPrice.textContent=(product.price*count).toLocaleString();

    }

    plusBtn.addEventListener("click",()=>{

        count++;

        updatePrice();

    });

    minusBtn.addEventListener("click",()=>{

        if(count>1){

            count--;

            updatePrice();

        }

    });

}