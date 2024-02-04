//YOUR ORDER TRANSITION
const cart = document.querySelector('#cart');
const your_order = document.querySelector('#your-order');
const first = document.querySelector('#first');
const back1 = document.querySelector('#back1');

cart.addEventListener('click', () => {
    your_order.animate(
        {
            transform: 'translateX(0%)',   
    },
        {
            duration: 500,
            fill: 'forwards',
            easing: 'ease',
        }

    );    
})
back1.addEventListener('click', () => {
    your_order.animate(
        {
            transform: 'translateX(100%)',   
    },
        {
            duration: 500,
            fill: 'forwards',
            easing: 'ease',
        }

    );    
})

//CHECKOUT TRANSITION
const check1 = document.querySelector('#check1');
const checkoutColumn = document.querySelector('#checkoutColumn');
const back2 = document.querySelector('#back2');

check1.addEventListener('click', () => {
    checkoutColumn.animate(
        {
            transform: 'translateX(0%)',   
    },
        {
            duration: 500,
            fill: 'forwards',
            easing: 'ease',
        }

    ); 
    your_order.animate(
        {
            transform: 'translateX(-50%)', 
            opacity: 0.6,  
    },
        {
            duration: 500,
            fill: 'forwards',
            easing: 'ease',
        }

    );  
})
back2.addEventListener('click', () => {
    checkoutColumn.animate(
        {
            transform: 'translateX(100%)',   
    },
        {
            duration: 500,
            fill: 'forwards',
            easing: 'ease',
        }

    ); 
    your_order.animate(
        {
            transform: 'translateX(0%)',  
            opacity: 1, 
    },
        {
            duration: 500,
            fill: 'forwards',
            easing: 'ease',
        }

    );     
})




//APPEND FOOD ITEMS

//Appetizers lists
let appetizers_products = [
    {
        id: 1,
        name: "Loaded Nachos",
        image: "../Picture/Ordering/Appetizers/Download -  Loaded Nachos.png",
        price: "$9.49"
    },
    {
        id: 2,
        name: "Creamy Pumpkin Soup",
        image: "../Picture/Ordering/Appetizers/Download -  Creamy Pumpkin Soup.png",
        price: "$10.49"
    },
    {
        id: 3,
        name: "Potato Salad",
        image: "../Picture/Ordering/Appetizers/Download -  Potato Salad.png",
        price: "$10.49"
    },
    {
        id: 4,
        name: "Breast Chicken",
        image: "../Picture/Ordering/Appetizers/Download - Breast Chicken.png",
        price: "$6.49"
    },
    {
        id: 5,
        name: "Chicken Kebabs",
        image: "../Picture/Ordering/Appetizers/Download - Chicken Kebab.png",
        price: "7.49"
    },
    {
        id: 6,
        name: "Mac & Cheese",
        image: "../Picture/Ordering/Appetizers/Download - Mac & Cheese.png",
        price: "$7.49"
    },
    {
        id: 7,
        name: "Seasoned Salmon",
        image: "../Picture/Ordering/Appetizers/Download - Salmon.png",
        price: "$6.49"
    },
    {
        id: 8,
        name: "Tomato Soup",
        image: "../Picture/Ordering/Appetizers/Download - Tomato Soup.png",
        price: "$4.49"
    }
]

//Entrees lists
let entrees_products = [
    {
        id: 1,
        name: "Chicken & Veggies",
        image: "../Picture/Ordering/Entrees/Download - Chicken & Veggies.png",
        price: "$9.49"
    },
    {
        id: 2,
        name: "Egg Salad",
        image: "../Picture/Ordering/Entrees/Download - Egg Salad.png",
        price: "$10.49"
    },
    {
        id: 3,
        name: "Full English Meal",
        image: "../Picture/Ordering/Entrees/Download - Full English Meal.png",
        price: "$10.49"
    },
    {
        id: 4,
        name: "Hotpot",
        image: "../Picture/Ordering/Entrees/Download - Hotpot.png",
        price: "$6.49"
    },
    {
        id: 5,
        name: "Meatball Spaghetti",
        image: "../Picture/Ordering/Entrees/Download - Meatball Spaghetti.png",
        price: "7.49"
    },
    {
        id: 6,
        name: "Salad",
        image: "../Picture/Ordering/Entrees/Download - Salad.png",
        price: "$7.49"
    },
    {
        id: 7,
        name: "Steak Salad",
        image: "../Picture/Ordering/Entrees/Download - Steak Salad.png",
        price: "$6.49"
    },
    {
        id: 8,
        name: "Zesty Chicken",
        image: "../Picture/Ordering/Entrees/Download - Zesty Chicken.png",
        price: "$4.49"
    }
]

//Sides lists
let sides_products = [
    {
        id: 1,
        name: "Baguettes",
        image: "../Picture/Ordering/Sides/Download - Baguette.png",
        price: "$9.49"
    },
    {
        id: 2,
        name: "Bread Bites",
        image: "../Picture/Ordering/Sides/Download - Bread Bites.png",
        price: "$10.49"
    },
    {
        id: 3,
        name: "Cheesecake",
        image: "../Picture/Ordering/Sides/Download - Cheesecake.png",
        price: "$10.49"
    },
    {
        id: 4,
        name: "Chips",
        image: "../Picture/Ordering/Sides/Download - Chips.png",
        price: "$6.49"
    },
    {
        id: 5,
        name: "Jalapeno Poppers",
        image: "../Picture/Ordering/Sides/Download - Jalapeno Poppers.png",
        price: "7.49"
    },
    {
        id: 6,
        name: "Ice Cream",
        image: "../Picture/Ordering/Sides/Download - Ice Cream.png",
        price: "$7.49"
    },
    {
        id: 7,
        name: "Onion Rings",
        image: "../Picture/Ordering/Sides/Download - Onion Rings.png",
        price: "$6.49"
    },
    {
        id: 8,
        name: "Oven-smoked Chicken",
        image: "../Picture/Ordering/Sides/Download - Oven-smoked Chicken.png",
        price: "$4.49"
    }
]

//Drinks lists
let drinks_products = [
    {
        id: 1,
        name: "Bubble Tea",
        image: "../Picture/Ordering/Beverages/Download - Bubble Tea.png",
        price: "$9.49"
    },
    {
        id: 2,
        name: "Chocolate Drink",
        image: "../Picture/Ordering/Beverages/Download - Chocolate Drink.png",
        price: "$10.49"
    },
    {
        id: 3,
        name: "Fruit Juice",
        image: "../Picture/Ordering/Beverages/Download - Fruit Juice.png",
        price: "$10.49"
    },
    {
        id: 4,
        name: "Iced Tea",
        image: "../Picture/Ordering/Beverages/Download - Iced Tea.png",
        price: "$6.49"
    },
    {
        id: 5,
        name: "Pink Lemonade",
        image: "../Picture/Ordering/Beverages/Download - Pink Lemonade.png",
        price: "7.49"
    },
    {
        id: 6,
        name: "Smoothie",
        image: "../Picture/Ordering/Beverages/Download - Smoothie.png",
        price: "$7.49"
    },
    {
        id: 7,
        name: "Sprite",
        image: "../Picture/Ordering/Beverages/Download - Sprite.png",
        price: "$6.49"
    },
    {
        id: 8,
        name: "Water",
        image: "../Picture/Ordering/Beverages/Download - Water.png",
        price: "$4.49"
    }
]
//Plug Items into HTML code
const appetizers = document.querySelector('#appetizers');
const entrees = document.querySelector('#entrees');
const sides = document.querySelector('#sides');
const drinks = document.querySelector('#drinks');


let listCards = [];

function initApp(listName, forWhat, arrayNum){
    listName.forEach((value, key) => {
        let newDiv = document.createElement("div");
        value.quantity = 1;
        newDiv.classList.add('eachFood');
        newDiv.innerHTML = `
            <img src="${value.image}" alt="">
            <h3>${value.name}</h3>
            <div id="bottom">
                <p>${value.price.toLocaleString()}</p>
                <button onclick="addToCart(${key}, ${arrayNum})">
                    <i class="fa-solid fa-plus"></i>
                    Add to cart
                </button>
            </div>
        `;
        forWhat.appendChild(newDiv);
    })
}
initApp(appetizers_products, appetizers, 0);
initApp(entrees_products, entrees, 1);
initApp(sides_products, sides, 2);
initApp(drinks_products, drinks, 3);

console.log(listCards)


//ADD TO CARD
let foodItems = [appetizers_products, entrees_products, sides_products, drinks_products];
let middle = document.querySelector('#middle'); //listCard
let quantity = document.querySelector('.num');
let total = document.querySelector('.total');
let count = 0;
let totalPrice = 0;

console.log(foodItems[2][7].quantity);

function addToCart(key, arrayNum){
    reloadCart(key, arrayNum);
}

function reloadCart(key, arrayNum){
    let newDiv = document.createElement("div");
    newDiv.classList.add('eachMiddle');

    totalPrice += foodItems[arrayNum][key].price;
    count += foodItems[arrayNum][key].quantity;

    newDiv.innerHTML =  `
        <div class="amount">
            <i onclick="changeQuantity(${key}, ${arrayNum}, ${foodItems[arrayNum][key].quantity - 1})" class="fa-solid fa-sort-up"></i>
            <p class="num">${foodItems[arrayNum][key].quantity}</p>
            <i onclick="changeQuantity(${key}, ${arrayNum}, ${foodItems[arrayNum][key].quantity + 1})" class="fa-solid fa-caret-down"></i>
        </div>
        <img src="${foodItems[arrayNum][key].image}" alt="">
        <div class="info">
            <h3>${foodItems[arrayNum][key].name}</h3>
            <p>${foodItems[arrayNum][key].price.toLocaleString()}</p>
        </div>
        <i class="fa-solid fa-xmark"></i> 
    `;
    middle.appendChild(newDiv);
    total.innerText = "$ " + count.toLocaleString();
}

function changeQuantity(key, arrayNum, quantity){
    if(quantity == 0){
        delete middle[key];
    }else{
        foodItems[arrayNum][key].quantity = quantity;
        foodItems[arrayNum][key].price = quantity * products[key].price;
    }
    reloadCard(key, arrayNum);
}



    









