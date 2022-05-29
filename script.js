userInput = document.getElementById("input");
button = document.getElementById("palindrome-button");
container = document.getElementById("input-container");

// Function that takes an input and checks if the input is a palindrome
function checkPalindrome(input) {
    // regex strips all non-alphanumeric characters
    let reverseInput = input.replace(/[\W_]/g, '').toLowerCase();

    // Makes stripped string into an array, flips it, then joins it back to a string
    reverseInput = reverseInput.split('').reverse().join('');

    if (reverseInput === input) {
        return "Is a palindrome";
    }
    return "Not a palindrome";
}
// Function exists only to allow an argument to be passed through the event listener.
function hello (){
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
    const newTextNode = document.createTextNode(checkPalindrome(userInput.value));
    newDiv.appendChild(newTextNode);
}

button.addEventListener("click", hello);