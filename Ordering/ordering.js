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
        image: "../Picture/Home/Dishes/salmon.png",
        price: "$9.49"
    },
    {
        id: 2,
        name: "Mozzarellea Sticks",
        image: "mozzarellasticks.png",
        price: "$10.49"
    },
    {
        id: 3,
        name: "Fried Pickles",
        image: "friedpickles.png",
        price: "$10.49"
    },
    {
        id: 4,
        name: "Spinach and Artichoke Dip",
        image: "spinachdip.png",
        price: "$6.49"
    },
    {
        id: 5,
        name: "Jalapeno Poppers",
        image: "jalapenopoppers.png",
        price: "7.49"
    },
    {
        id: 6,
        name: "Quesadilla",
        image: "quesadilla.png",
        price: "$7.49"
    },
    {
        id: 7,
        name: "Buffalo Cauliflower Bites",
        image: "buffalobites.png",
        price: "$6.49"
    },
    {
        id: 8,
        name: "Garlic Parmesan Fries",
        image: "garlicparmesanfries.png",
        price: "$4.49"
    }
]

//Entrees lists
let entrees_products = [
    {
        id: 1,
        name: "Loaded Nachos",
        image: "../Picture/Home/Dishes/salmon.png",
        price: "$9.49"
    },
    {
        id: 2,
        name: "Mozzarellea Sticks",
        image: "mozzarellasticks.png",
        price: "$10.49"
    },
    {
        id: 3,
        name: "Fried Pickles",
        image: "friedpickles.png",
        price: "$10.49"
    },
    {
        id: 4,
        name: "Spinach and Artichoke Dip",
        image: "spinachdip.png",
        price: "$6.49"
    },
    {
        id: 5,
        name: "Jalapeno Poppers",
        image: "jalapenopoppers.png",
        price: "7.49"
    },
    {
        id: 6,
        name: "Quesadilla",
        image: "quesadilla.png",
        price: "$7.49"
    },
    {
        id: 7,
        name: "Buffalo Cauliflower Bites",
        image: "buffalobites.png",
        price: "$6.49"
    },
    {
        id: 8,
        name: "Garlic Parmesan Fries",
        image: "garlicparmesanfries.png",
        price: "$4.49"
    }
]

//Sides lists
let sides_products = [
    {
        id: 1,
        name: "Loaded Nachos",
        image: "../Picture/Home/Dishes/salmon.png",
        price: "$9.49"
    },
    {
        id: 2,
        name: "Mozzarellea Sticks",
        image: "mozzarellasticks.png",
        price: "$10.49"
    },
    {
        id: 3,
        name: "Fried Pickles",
        image: "friedpickles.png",
        price: "$10.49"
    },
    {
        id: 4,
        name: "Spinach and Artichoke Dip",
        image: "spinachdip.png",
        price: "$6.49"
    },
    {
        id: 5,
        name: "Jalapeno Poppers",
        image: "jalapenopoppers.png",
        price: "7.49"
    },
    {
        id: 6,
        name: "Quesadilla",
        image: "quesadilla.png",
        price: "$7.49"
    },
    {
        id: 7,
        name: "Buffalo Cauliflower Bites",
        image: "buffalobites.png",
        price: "$6.49"
    },
    {
        id: 8,
        name: "Garlic Parmesan Fries",
        image: "garlicparmesanfries.png",
        price: "$4.49"
    }
]

//Drinks lists
let drinks_products = [
    {
        id: 1,
        name: "Loaded Nachos",
        image: "../Picture/Home/Dishes/salmon.png",
        price: "$9.49"
    },
    {
        id: 2,
        name: "Mozzarellea Sticks",
        image: "mozzarellasticks.png",
        price: "$10.49"
    },
    {
        id: 3,
        name: "Fried Pickles",
        image: "friedpickles.png",
        price: "$10.49"
    },
    {
        id: 4,
        name: "Spinach and Artichoke Dip",
        image: "spinachdip.png",
        price: "$6.49"
    },
    {
        id: 5,
        name: "Jalapeno Poppers",
        image: "jalapenopoppers.png",
        price: "7.49"
    },
    {
        id: 6,
        name: "Quesadilla",
        image: "quesadilla.png",
        price: "$7.49"
    },
    {
        id: 7,
        name: "Buffalo Cauliflower Bites",
        image: "buffalobites.png",
        price: "$6.49"
    },
    {
        id: 8,
        name: "Garlic Parmesan Fries",
        image: "garlicparmesanfries.png",
        price: "$4.49"
    }
]
//Plug Items into HTML code
const appetizers = document.querySelector('#appetizers');
const entrees = document.querySelector('#entrees');
const sides = document.querySelector('#sides');
const drinks = document.querySelector('#drinks');


function initApp(listName, forWhat, arrayNum){
    listName.forEach((value, key) => {
        let newDiv = document.createElement("div");
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




//ADD TO CARD
let foodItems = [appetizers_products, entrees_products, sides_products, drinks_products];
let middle = document.querySelector('#middle'); //listCard
let quantity = document.querySelector('.num');
let total = document.querySelector('.total');



function addToCart(key, arrayNum){
    if(foodItems[arrayNum][key] == null){
        // copy product from list to list card
        foodItems[arrayNum][key] = JSON.parse(JSON.stringify(products[key]));
        foodItems[arrayNum][key].quantity = 1;
    }
    reloadCart();
}
function reloadCart(key, arrayNum){
    middle.innerHTML = '';
    let newDiv = document.createElement("div");
    newDiv.classList.add('eachMiddle');
    newDiv.innerHTML = `
        <div class="amount">
            <i onclick="changeQuantity(${key}, ${foodItems[arrayNum][key].quantity - 1})" class="fa-solid fa-sort-up"></i>
            <p class="num">${foodItems[arrayNum][key].quantity}</p>
            <i onclick="changeQuantity(${key}, ${foodItems[arrayNum][key].quantity + 1})" class="fa-solid fa-caret-down"></i>
        </div>
        <img src="${foodItems[arrayNum][key].image}" alt="">
        <div class="info">
            <h3>${foodItems[arrayNum][key].name}</h3>
            <p>${foodItems[arrayNum][key].price.toLocaleString()}</p>
        </div>
        <i class="fa-solid fa-xmark"></i> 
    `;
    middle.appendChild(newDiv)
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete middle[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}


    









