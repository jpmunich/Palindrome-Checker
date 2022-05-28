// Function that takes an input and checks if the input is a palindrome
function checkPalindrome(input) {
    // regex strips all non-alphanumeric characters
    let reverseInput = input.replace(/[\W_]/g, '').toLowerCase();

    // Makes stripped string into an array, flips it, then joins it back to a string
    reverseInput = reverseInput.split('').reverse().join('');
    
    if (reverseInput == input) {
        return "Is a palindrome";
    }
    return "Not a palindrome";
}