// Get references to HTML page elements
const form = document.getElementById('input-form');
const nameInput = document.getElementById('name-input');
const outputDiv = document.getElementById('recent-entries');

// Listen for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page from reloading

    // Get the value of the name input field
    const userName = nameInput.value;

    // Display the user's name on the page
    const nameDisplay = document.createElement('p');
    nameDisplay.textContent = 'You entered: ' + userName;
    outputDiv.appendChild(nameDisplay);

    // Clear the input field
    nameInput.value = '';
    
});