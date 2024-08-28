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

// Initial display of inventory
displayInventory();
