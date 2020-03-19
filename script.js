//global variables meaning at the very top of our code
var lengthOf = []
for (var i = 8; i <= 128; i++) {
    console.log(i)
}
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 

// Array of lowercase characters to be included in password
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password

var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// Array of special characters to be included in password
var specialCharacters = ['!','%',
'^','&','*','(',')','-','_','+','=','{','}','[',']',
'|','/',':',';','<','>','.','?']
// Assignment Code
var generateBtn = document.querySelector("#generate");
//charNumber= Value between 8-126
//lowerCase= use lowercase letters
//upperCase= use uppercase letters
//numbers = use numbers
//specials= use symbols


 // passwordText.value = password;






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
function generatePassword() {
}




if(lowerCase == true){
  generatePassword(lowerCaseLetters);
}

if(upperCase == true){
  generatePassword(upperCaseLetters);
}

if(numbers == true){
  generatePassword(numericCharacters)
}
if(specials == true){
  generatePassword(specialCharacters);
}


  //these are my prompts 

  //a prompt for how many characters the user would like
    //must be 8-128 characters
    //store it in a variable
var charNumber = prompt("How many Characters would you like your password to be?(Must be between 8-128 characters)");
console.log(charNumber);
if (charNumber, i<7 i>128 
  )
  window.alert("You have entered an incorrect number or letter: " + this.passwordLength)
else (passwordLength)
  window.alert("Thank you");


if (charNumber >= 8 <= 128) 
  console.log(charNumber)
else (i<7, i>128)
//alert (charNumber);
//alert("Please select a number between 8-128")
//continue 

//while (i <7, i >128);
//alert("Please select a number between 8-128");
//break (charNumber >= 8 <= 128);
 



//ask the user if they want lowercase
    //store it in a variable
var lowerCase = confirm("Would you like lowercase characters?")
console.log(lowerCase);
  //ask the user if they want uppercase
    //store it in a variable
var upperCase = confirm("How about uppercase characters?")
console.log(upperCase);
  //ask the user if they want numeric
    //store it in a variable
var numbers = confirm("What about numbers?")
console.log(numbers);
  //ask the user if they want special characters

var specials = confirm("Any special characters too?")
console.log(specials);


