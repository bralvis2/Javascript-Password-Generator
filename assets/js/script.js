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



function generatePassword(){
    // parseInt allows user input to read as a number. 
    let passwordLength = parseInt(window.prompt("Select the number of characters you would like your password to contain."));
    if (passwordLength < 8 || passwordLength > 128){
        window.alert("Please enter a number greater than 8 but less than 128");
    }

    var lowerCase = window.prompt("Would you like your password to include lowercase letters? Type the letter Y for yes or N for no. Click on OK to continue.");
    var upperCase = window.prompt("Would you like your password to include uppercase letters? Type the letter Y for yes or N for no. Click on OK to continue.");
    var numbers = window.prompt("Would you like your password to include numbers? Type the letter Y for yes or N for no. Click on OK to continue.");
    var specialCharacters = window.prompt("Would you like your password to include special characters? Type the letter Y for yes or N for no. Click on OK to continue.");
    // empty arrays to hold the final volues after performing getrandom function. 
    var selCharacters = [];
    var confirmCharacters = [];
    var finalResult = [];

    if (
        lowerCase === "N" && 
        upperCase === "N" &&
        numbers === "N" &&
        specialCharacters === "N"
    ){
        alert('Select one type of character');
        return null;
    }

    // combining all of selCharacters arrays into one giant array
    // getting a random amount of each of the character types we selected and pusing them to the confirmed characters array.
   if (lowerCase === 'Y'){
       selCharacters = selCharacters.concat(lcLetters);
        confirmCharacters.push(getRandom(lcLetters))
    } if (upperCase === "Y"){
        selCharacters = selCharacters.concat(ucLetters);
        confirmCharacters.push(getRandom(ucLetters))
    }if(numbers === "Y"){
        selCharacters = selCharacters.concat(number);
        confirmCharacters.push(getRandom(number))
    } if(specialCharacters ==="Y"){
        selCharacters = selCharacters.concat(special);
        confirmCharacters.push(getRandom(special))
    } 

    var splitCharacters = selCharacters;
    // difining the value of option as a length property with the value of passwordLength
    var option = {
        length: passwordLength,
    } 

    for (var i = 0; i < option.length; i++){
        //redefining the value of selCharacters to a random amount of itself
        var selCharacters = getRandom(selCharacters);
        finalResult.push(selCharacters);
    }




    // for ( var i = 0; i < passwordLength.length; i++){
    //     var selCharacters = getRandom(selCharacters);
    //     finalResult.push(selCharacters);
    //     console.log(passwordLength[i])
    // }

    // Ensures the finalResult and confirmCharacters are the same length
    for (var i = 0; i < confirmCharacters.length; i++){
        finalResult[i] = confirmCharacters[i];
    }
    return finalResult.join('');



    // var randomCharacters = Math.floor(Math.random(splitCharacters) * passwordLength.length);
    //     let passwordText = randomCharacters;
    // console.log(splitCharacters);
    // console.log(randomCharacters);
    // console.log(passwordText);
    // return;

} 

function getRandom(arr){
    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomEl = arr[randomIndex];
    return randomEl;
}

// function generateInput(){
//     if(lowerCase === 'Y'){
//         selCharacters = selCharacters.concat(lcLetters);
//         console.log('This works')
//     } if (upperCase === "Y"){
//         selCharacters = selCharacters.concat(ucLetters);
//     }if(numbers === "Y"){
//         selCharacters = selCharacters.concat(number);
//     } if(specialCharacters ==="Y"){
//         selCharacters = selCharacters.concat(special);
//     } 
// }

// function newPassword(){
//     if(selCharacters.length < numbers.length || passwordLength < 8 ){
//         window.alert('FIX LATER');
//     } else {
//     for ( i = 0; i<passwordLength; i++){
//         generatedPassword += selCharacters[Math.floor(Math.random()*(selCharacters.length - 1))];
//     }
//     generatedPassword = [];
//     } 



