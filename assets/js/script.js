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
function pwLength(){
    var length = window.prompt("Select the number of characters you would like your password to contain.");
    if (length < 8 || length > 128){
        window.alert("Please enter a number greater than 8 but less than 128");
        pwLength();
    }
} 



// Confirm with a Y or a N for each criteria
//function confirmCharacters(){
   

/*function confirmCharacters(){
    var lowerCase = window.confirm("Would you like your password to include lowercase letters? Click OK to confirm");
    var upperCase = window.confirm("Would you like your password to include uppercase letters? Click OK to confirm");
    var numbers = window.confirm("Would you like your password to include numbers? Click OK to confirm");
    var specialCharacters = window.confirm("Would you like your password to include special characters? Click OK to confirm");
} */

//confirmCharacters()

// A
var special = '`~!@#$%^&*()-_+={[}]|\\:;\"\'<,>.?/';
var number = "0123456789"
var lcLetters = "abcdefghijklmnopqrstuvwxyz";
var ucLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var allChar = [];
//console.log(allChar)


function generatePassword(){
    pwLength();
    var lowerCase = window.prompt("Would you like your password to include lowercase letters? Type the letter Y for yes or N for no. Click on OK to continue.");
    var upperCase = window.prompt("Would you like your password to include uppercase letters? Type the letter Y for yes or N for no. Click on OK to continue.");
    var numbers = window.prompt("Would you like your password to include numbers? Type the letter Y for yes or N for no. Click on OK to continue.");
    var specialCharacters = window.prompt("Would you like your password to include special characters? Type the letter Y for yes or N for no. Click on OK to continue.");

    if (lowerCase === "Y"){
        allChar.push(lcLetters);
    }else if (lowerCase !== 'Y' || lowerCase !=='N'){
        return window.alert('Please double check you\'ve entered a capital Y or a capital N.');
    } 
    
    if (upperCase === "Y"){
        allChar.push(ucLetters);
    }else if (upperCase !== 'Y' || upperCase !=='N'){
        return window.alert('Please double check you\'ve entered a capital Y or a capital N.');
    } 
    
    if(numbers === "Y"){
        allChar.push(number);
    } else if (numbers !== 'Y' || numbers !=='N'){
        return window.alert('Please double check you\'ve entered a capital Y or a capital N.'); 
    } 
    
    if(specialCharacters ==="Y"){
        allChar.push(special);
    } else if (specialCharacters !== 'Y' || specialCharacters!=='N'){
        return window.alert('Please double check you\'ve entered a capital Y or a capital N.');
    }

   


}



generatePassword();
console.log(allChar);



//I am presented with prompts for password criteria when I click on the button. 
// I am presented with a prompt for length between 8 - 128 characters
// I can use the prompts method to allow users to enter an answer choice
// confirm or not to include lc, uc, numbers, and or special characters.
// I can use the prompts method to allow users to enter an answer choice
// password is generated that includes all critera. 
// I am going to have to use randoomization to select from an array.
// then the password is displayed either in an alert or on the page. 
// I can use an alert or I can redure it to the page itself. 
// function generatePassword(){
  // Your CODE goes 
  

  // prompt = length
    // let pwdLength = prompt("how many characters")
    // console.log(pwdLength)
  // confirm - lowercase, uppercase, numeric, special characters
    // let numbers  =  confirm("DO you want numbers");
      // console.log(numbers);
  // create var to hold anser to prompt/confirm 
  // function to validate user answrs
  // if and equalaity operators 
   // if(numbers){

  //  } 

  // List of numbers, special chars, uppercase and lowercase
    // array
    // combine all arrays in 1 array
    // Randomly choose characters
    // create a string set equal to password var
    // array method to check if something is in array
  // generate random password
  // return password

  //return password;
//}