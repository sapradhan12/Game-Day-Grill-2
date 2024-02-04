//FROM CATERING
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
        document.querySelector('#back').style.display = "block";
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
    document.querySelector('#back').style.display = "none";
}





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


function initApp(listName, forWhat, arrayNum){
    listName.forEach((value, key) => {
        let newDiv = document.createElement("div");
        value.totalPrice = value.price;
        value.quantity = 1;
        newDiv.classList.add('eachFood');
        newDiv.innerHTML = `
            <img src="${value.image}" alt="">
            <h3>${value.name}</h3>
            <div id="bottom">
                <p>${value.price.toLocaleString()}</p>
                <button onclick="addToCart(${arrayNum}, ${key})">
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

let foodItems = [appetizers_products, entrees_products, sides_products, drinks_products];

//ADD TO CART
let middle = document.querySelector('#middle');

function addToCart(arrayNum, key) {
    // Implement your logic to add the selected item to the cart
    console.log(foodItems[arrayNum][key]);
    
    // Create cart item element
    const cartItem = document.createElement('div');
    cartItem.classList.add('eachMiddle');
    cartItem.innerHTML = `
        <div class="amount">
            <i onclick="updateQuantity(this, +1, ${arrayNum}, ${key})" class="fa-solid fa-sort-up"></i>
            <p class="num">1</p>
            <i onclick="updateQuantity(this, -1, ${arrayNum}, ${key})" class="fa-solid fa-caret-down"></i>
        </div>
        <img src="${foodItems[arrayNum][key].image}" alt="">
        <div class="info">
            <h3>${foodItems[arrayNum][key].name}</h3>
            <p class="price">${foodItems[arrayNum][key].price.toLocaleString()}</p>
        </div>
        <i onclick="removeFromCart(this)" class="fa-solid fa-xmark"></i> 
    `;


    // Append cart item to the cart
    middle.appendChild(cartItem);
    
    // Update total cost
    updateTotalCost();
}
    
function removeFromCart(button) {
    // Implement your logic to remove the selected item from the cart
    const cartItem = button.parentNode;
    cartItem.parentNode.removeChild(cartItem);

    // Update total cost
    updateTotalCost();
}

    
function updateQuantity(button, change, arrayNum, key) {
    const quantityContainer = button.parentNode;
    const quantityElement = quantityContainer.querySelector('.num');
    let quantity = parseInt(quantityElement.innerText);

    // Update quantity
    quantity += change;

    // Remove item if quantity becomes 0
    if (quantity === 0) {
        const cartItem = quantityContainer.parentNode;
        cartItem.parentNode.removeChild(cartItem);
    } else {
        quantityElement.innerText = quantity;
    }

    // Update inline price and total cost
    updatePrices(arrayNum, key);
    updateTotalCost();
}

function updatePrices(arrayNum, key) {
    const cartItems = document.querySelectorAll('.eachMiddle');
    
    cartItems.forEach(item => {
        const quantity = parseInt(item.querySelector('.num').innerText);

        const getPrice = parseFloat(foodItems[arrayNum][key].price.replace('$', ''));
        const setPrice = item.querySelector('.price');
                
        const price = getPrice * quantity; 
        
        setPrice.innerHTML = `$${price}`;
    });
}



function updateTotalCost() {
    const cartItems = document.querySelectorAll('.eachMiddle');
    let totalCost = 0;

    cartItems.forEach(item => {
        const elementCost = parseFloat(item.querySelector('.price').innerText.replace('$', ''));
        totalCost += elementCost; // Assuming each item costs $10
    });

    document.querySelector('.total').innerText = `$${totalCost.toFixed(2)}`;
}

