// Initialize array from local storage or as an empty array
let array = JSON.parse(localStorage.getItem("myArray")) || [];

// Function to save array to local storage
function saveArray() {
    localStorage.setItem("myArray", JSON.stringify(array));
}

// Function to update the displayed array
function displayArray() {
    const arrayList = document.getElementById("arrayList");
    arrayList.innerHTML = "";  // Clear the existing list

    array.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${item}`;
        arrayList.appendChild(listItem);
    });
}

// Function to add an item to the array
function addItem() {
    const input = document.getElementById("arrayInput");
    const value = input.value.trim();

    if (value) {
        array.push(value);  // Add input value to the array
        saveArray();        // Save updated array to local storage
        displayArray();     // Update displayed array
        input.value = "";   // Clear input field
    } else {
        alert("Please enter a value to add.");
    }
}

// Function to remove an item from the array
function removeItem() {
    const input = document.getElementById("arrayInput");
    const value = input.value.trim();

    if (value && array.includes(value)) {
        array = array.filter(item => item !== value);  // Remove item
        saveArray();        // Save updated array to local storage
        displayArray();     // Update displayed array
        input.value = "";   // Clear input field
    } else {
        alert("Item not found in the array.");
    }
}

// Initial display of the array
displayArray();
