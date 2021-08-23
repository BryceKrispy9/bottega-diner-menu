const startDiner = () => {
    window.prompt(openMessage, mainMenu);

    if 
}

let openMessage = prompt("Here are our menus, what would you like to order?");

const mainMenu = [
    {
        product: 'Bacon Cheeseburger',
        price: 13.00
    },
    {
        product: 'Animal Style Cheeseburger',
        price: 15.00
    },
    {
        product: 'Full Salad',
        price: 9.50
    },
    {
        product: 'Chicken Wings',
        price: 11.00
    },
    {
        product: 'Sirloin Steak',
        price: 21.00
    },
    {
        product: 'Peperroni Pizza',
        price: 18.50
    },
    {
        product: 'Meatball Sandwich',
        price: 14.00
    }
]

const sideMenu = [
    {
        product: 'Onion Rings',
        price: 5.00
    },
    {
        product: 'French Fries',
        price: 4.00
    },
    {
        product: 'Side Salad',
        price: 6.00
    },
    {
        product: 'Sweet Potato Fries',
        price: 5.00
    }
]

const waiterName = ["John", "Michael", "Jessie", "Ryan"];

function displayMenus () {
    console.log(mainMenu);
}

displayMenus();