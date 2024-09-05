// Initialize the inventory array with hardcoded data
const inventory = [
    {
        category: "Fruits",
        products: [
            { product: "Apples", quantity: 10 },
            { product: "Bananas", quantity: 5 },
            { product: "Oranges", quantity: 8 },
        ]
    },
    {
        category: "Vegetables",
        products: [
            { product: "Tomatoes", quantity: 15 },
            { product: "Carrots", quantity: 12 },
            { product: "Peppers", quantity: 9 },
        ]
    }
];
let categoryMenu = document.getElementById("categoryInput"); // for the Category dropdown menu
let productMenu = document.getElementById("productInput"); // for the Product dropdown menu

// Function to display the inventory
function displayInventory() {
    // inventoryDisplay contains all product groups (categories and items)
    let inventoryDisplay = document.getElementById('inventoryDisplay'); 
    inventoryDisplay.innerHTML = ''; // Clear any existing content

    // Iterate through the inventory and create HTML elements to display the data
    inventory.forEach(category => {
        // itemGroup contains ONE category and its item list
        let itemGroup = document.createElement('div'); // categories and items
        itemGroup.innerHTML = "<strong>" + category.category + "<strong>";
        category.products.forEach(product => {
            itemGroup.innerHTML += "<div>" + product.product + ": " + product.quantity;
        });
        inventoryDisplay.appendChild(itemGroup); // attaches the new product to the display
    });
}

function createCategories() {
    // This works by building a collection of <option> elements for the <select> control
    inventory.forEach(category => {
        let categoryOption = document.createElement("option"); // new <option> tag
        categoryOption.value = category.category; // sets value of new option to cat name
        categoryOption.textContent = category.category; // sets display text 
        categoryMenu.appendChild(categoryOption); // attaches <option> to <select> control
    });
}

function createProducts() {
    productMenu.innerHTML = ""; // to clear the list when a new category is selected
    // below finds first object in inventory that matches
    // if anything is found, the if condition below is true and the loop is executed
    let selectedCategory = inventory.find(category => category.category === categoryMenu.value);
    if (selectedCategory) {
        selectedCategory.products.forEach(product => {
            let productOption = document.createElement("option"); // new <option> for menu
            productOption.value = product.product; // sets <option> value
            productOption.text = product.product; // sets <option> display text
            productMenu.appendChild(productOption); // attaches <option> to <select> (product menu)
        });
    }
}

function updateQuantity(){
    let quantityInput = document.getElementById("quantityInput");
    let totalQuantityDisplay = document.getElementById("totalQuantity");
    totalQuantityDisplay.innerHTML = quantityInput.value;
}

let quantityInput = document.getElementById("quantityInput");
quantityInput.addEventListener('input', updateQuantity);

// when a category is selected, update the product menu:
categoryMenu.addEventListener('change', createProducts);


// Initial display of inventory
createCategories(); // create/update the category dropdown menu
createProducts(); // create/update the product dropdown menu
displayInventory(); // display the inventory
