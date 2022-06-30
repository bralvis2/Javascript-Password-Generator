// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Prompt for Length of Password. Redirects user to enter a number between 8-128 if needed. 


var special = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '/', ':', ';', "'", '"', '<', '>', ',', '.', '?'];
var number = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lcLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var ucLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//console.log(allChar)

var selCharacters = [];

function generatePassword(){
    let passwordlength = window.prompt("Select the number of characters you would like your password to contain.");
    if (passwordlength < 8 || passwordlength > 128){
        window.alert("Please enter a number greater than 8 but less than 128");
    }

    var lowerCase = window.prompt("Would you like your password to include lowercase letters? Type the letter Y for yes or N for no. Click on OK to continue.");
    var upperCase = window.prompt("Would you like your password to include uppercase letters? Type the letter Y for yes or N for no. Click on OK to continue.");
    var numbers = window.prompt("Would you like your password to include numbers? Type the letter Y for yes or N for no. Click on OK to continue.");
    var specialCharacters = window.prompt("Would you like your password to include special characters? Type the letter Y for yes or N for no. Click on OK to continue.");

    if (lowerCase === 'Y'){
        selCharacters.push(lcLetters);
    } if (upperCase === "Y"){
        selCharacters.push(ucLetters);
    }if(numbers === "Y"){
        selCharacters.push(number);
    } if(specialCharacters ==="Y"){
        selCharacters.push(special);
    } 

    var splitCharacters = selCharacters.toString();
    var randomCharacters = Math.floor(Math.random(splitCharacters) * passwordlength.length);
        let passwordText = randomCharacters;
    console.log(splitCharacters);
    console.log(randomCharacters);
    console.log(passwordText);
    return;

}


