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
    const inventoryDisplay = document.getElementById('inventoryDisplay');
    inventoryDisplay.innerHTML = ''; // Clear any existing content

    // Iterate through the inventory and create HTML elements to display the data
    inventory.forEach(category => {
        const categoryEl = document.createElement('div');
        categoryEl.innerHTML = `<strong>${category.category}</strong>:`;
        category.products.forEach(product => {
            categoryEl.innerHTML += `<div>${product.product}: ${product.quantity}</div>`;
        });
        inventoryDisplay.appendChild(categoryEl);
    });
}

// Initial display of inventory
displayInventory();
