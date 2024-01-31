function toggleSection(header) {
    const content = header.nextElementSibling;
    const chevron = header.querySelector('.chevron');
    const isOpen = content.style.maxHeight === '0px' || content.style.maxHeight === ''; // Check for both conditions
  content.style.maxHeight = isOpen ? `${content.scrollHeight}px` : '0';
    chevron.style.transform = !isOpen ? 'rotate(0deg)' : 'rotate(90deg)';
}


function addToCart(item) {
// Implement your logic to add the selected item to the cart
console.log(item + ' added to cart');

// Create cart item element
const cartItem = document.createElement('div');
cartItem.classList.add('cart-item');
cartItem.innerHTML = `
  <span class="item-name-in-cart">${item}</span>
  <div class="quantity-container">
    <button onclick="updateQuantity(this, -1)">-</button>
    <span class="quantity">1</span>
    <button onclick="updateQuantity(this, 1)">+</button>
  </div>
  <span class="price">$10.00</span>
  <button onclick="removeFromCart(this)">Remove</button>
`;

// Append cart item to the cart
document.getElementById('cartItems').appendChild(cartItem);

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

function updateQuantity(button, change) {
const quantityContainer = button.parentNode;
const quantityElement = quantityContainer.querySelector('.quantity');
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
updatePrices();
updateTotalCost();
}

function updatePrices() {
const cartItems = document.querySelectorAll('.cart-item');
cartItems.forEach(item => {
  const quantity = parseInt(item.querySelector('.quantity').innerText);
  const priceElement = item.querySelector('.price');
  const price = 10 * quantity; // Assuming each item costs $10
  priceElement.innerText = `$${price.toFixed(2)}`;
});
}

function updateTotalCost() {
const cartItems = document.querySelectorAll('.cart-item');
let totalCost = 0;

cartItems.forEach(item => {
  const quantity = parseInt(item.querySelector('.quantity').innerText);
  totalCost += 10 * quantity; // Assuming each item costs $10
});

document.getElementById('totalCost').innerText = `Total Cost: $${totalCost.toFixed(2)}`;
}

function checkout() {
    window.location.href = "checkout.html";
}





/*var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


const accordion = document.getElementsByClassName("contentbox");
for(i=0; i<accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active")
  })
}


let appetizers_list = document.querySelector(".appetizers-list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


let appetizers_products = [
    {
        id: 1,
        name: "Loaded Nachos",
        image: "loadednachos.png",
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

let listCards = [];
function initApp(){
    appetizers_products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Order</button>
        `;
        listCards.appendChild(newDiv);
    })
}

initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product from list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}*/
