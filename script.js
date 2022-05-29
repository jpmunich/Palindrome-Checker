userInput = document.getElementById("palindrome");
button = document.getElementById("palindrome-button");

// Function that takes an input and checks if the input is a palindrome
function checkPalindrome(input) {
    // regex strips all non-alphanumeric characters
    let reverseInput = input.replace(/[\W_]/g, '').toLowerCase();

    // Makes stripped string into an array, flips it, then joins it back to a string
    reverseInput = reverseInput.split('').reverse().join('');

    if (reverseInput === input) {
        console.log("hello");
        return "Is a palindrome";
    }
    console.log("bye");
    return "Not a palindrome";
}
// Function exists only to allow an argument to be passed through the event listener.
function hello (){
    checkPalindrome(userInput.value);
}

button.addEventListener("click", hello);