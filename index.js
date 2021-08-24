const startDiner = () => {
    alert()
};

const mainMenu = {
    'Bacon Cheeseburger' : 13.00,
    'Animal Style Cheeseburger' : 15.00,
    'Full Salad' : 9.50,
    'Chicken Wings' : 11.00,
    'Sirloin Steak' : 21.00
};

const sideMenu = {
    'Onion Rings' : 5.00,
    'French Fries' : 4.00,
    'Side Salad' : 6.00,
    'Sweet Potato Fries' : 5.00
};

const mainMenuChoices = menu => {
    let dinnerMenu = []
    Object.keys(menu).map(box => {
        dinnerMenu.push(`${box}`)
    })
    return dinnerMenu.join()
};

const sideMenuChoices = menu => {
    let dinnerMenu = []
    Object.keys(menu).map(box => {
        dinnerMenu.push(`${box}`)
    })
    return dinnerMenu.join()
};

const waiterCommentsMain = {
    'Bacon Cheeseburger' : 'is delicious with Onion Rings.',
    'Animal Style Cheeseburger' : 'is not for your average lightweight!',
    'Full Salad' : 'is a large bowl of vegetables from the finest bushes.',
    'Chicken Wings' : '- These wings come with 4 different dipping sauces that you will love!',
    'Sirloin Steak' : '- We normally serve this medium rare so that the taste is better preserved.'
};

const waiterCommentsSide = {
    'Onion Rings' : '- made with our famous beer-battered breading!',
    'French Fries' : 'are made from freshly cut potatoes that we receive everyday!',
    'Side Salad' : 'is a smaller bowl of vegetables from the finest bushes.',
    'Sweet Potato Fries' : '- A personal favorite! You will want two servings!'
};



alert('Welcome to the Bottega Diner!');

const chooseMainItems = window.prompt(`Here is a list of our Main Menu and Side menu, what would you like to order?:   ${mainMenuChoices(mainMenu)}.`);

window.alert(`The ${chooseMainItems} ${waiterCommentsMain[chooseItems]}`);

window.alert(`${chooseMainItems} will cost you $${mainMenu[chooseMainItems]}`);



const chooseSideItems = window.prompt(`Here is a list of our Side Menu, what would you like to order?:   ${sideMenuChoices(sideMenu)}.`);

window.alert(`The ${chooseSideItems} ${waiterCommentsSide[chooseSideItems]}`);

window.alert(`${chooseSideItems} will cost you $${sideMenu[chooseSideItems]}`);


const total = (mainMenu[chooseMainItems] + sideMenu[chooseSideItems]);

window.alert(`Your total of your ${chooseMainItems} and your ${chooseSideItems} is $${total}.`);

console.log(`Your total is: $${total}`);