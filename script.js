// Declare necessary elements
userInput = document.getElementById("input");
button = document.getElementById("palindrome-button");
container = document.getElementById("input-container");

// Function that takes an input and checks if the input is a palindrome
function checkPalindrome(input) {
    // regex strips all non-alphanumeric characters and caps
    let reverseInput = input.replace(/[\W_]/g, '').toLowerCase();
    // Makes stripped string into an array, flips it, then joins it back to a string
    reverseInput = reverseInput.split('').reverse().join('');
    // strip all non-alphanumeric characters and capitals from original input
    input = input.replace(/[\W_]/g, '').toLowerCase();
    if (reverseInput == input) {
        return "Is a palindrome";
    }
    return "Not a palindrome";
}

// Function takes the user input and turns it into a tangible piece of date for the user
function addPalindromeStatus () {
    // Conditional makes sure there is input in the field
    if (userInput.value !== "") {
    // Creates a new div, centers any text that is added within, and sets its ID
    const newDiv = document.createElement("div");
    newDiv.classList.add("inside-input-container");
    newDiv.setAttribute("id", "palindromeStatusDiv");
    // Adds the div to its containing div and gives it text
    container.appendChild(newDiv);
    const newTextNode = document.createTextNode(checkPalindrome(userInput.value));
    newDiv.appendChild(newTextNode);
    }
}

// Function deletes the previous user input to make room for the next one
function removePreviousStatus () {
        const statusDiv = document.getElementById("palindromeStatusDiv");
        container.removeChild(statusDiv);
}

// Checks if user has clicked the button and runs the function if it "hears" a click
button.addEventListener("click", removePreviousStatus);
button.addEventListener("click", addPalindromeStatus);
