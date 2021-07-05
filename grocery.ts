class Grocery {
    subtotal: number;
    constructor(
        public name: string,
        public quantity: number,
        public pricePerItem: number
    ) {
        this.subtotal = quantity * pricePerItem;
    }
}

// grocery items
const milk = new Grocery('Milk, Gallon', 1, 2.50);
const eggs = new Grocery('Eggs, Dozen', 1, 1.00);
const bananas = new Grocery('Bananas, Pound', 2, 1.00);
const pancakeMix = new Grocery('Pancake Mix', 1, 3.00);
const kiwifruit = new Grocery('Kiwifruit', 6, 0.25);

// into an array
const groceryList = [milk, eggs, bananas, pancakeMix, kiwifruit];

// display grocery item as HTML <p> element
function displayHTML(item) {
    document.body.innerHTML += '<p>' + item.name + ' : ' + item.quantity + ' - $' + item.subtotal + '<p>';
};

for (let i = 0; i < groceryList.length; i++) {
    displayHTML(groceryList[i]);
}