  //these are my prompts that will activate when #generateBtn is clicked

  //a prompt for how many characters the user would like
    //must be 8-128 characters
    //store it in a variable
    var passLength = prompt("How long do you want your password to be? *Must be between 8-128*");
    console.log(passLength);
    
    //ask the user if they want lowercase
        //store it in a variable
    var lowerCase = confirm("Would you like lowercase characters?");
    console.log(lowerCase);
    
      //ask the user if they want uppercase
        //store it in a variable
    var upperCase = confirm("How about uppercase characters?");
    console.log(upperCase);
    
      //ask the user if they want numeric
        //store it in a variable
    var numberChar =confirm("What about numbers?");
    console.log(numberChar);
    
      //ask the user if they want special characters
    var specials = confirm("Any special characters too?");
    console.log(specials);

// Assignment Code
var generateBtn = document.querySelector("#generate");

//used as a starting point to input our complete password array
let passwordHolder = "";

//Array for password posibilities
let passwordArray = [];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 

// Array of lowercase characters to be included in password
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Array of special characters to be included in password
var specialCharacters = ['!','%',
'^','&','*','(',')','-','_','+','=','{','}','[',']',
'|','/',':',';','<','>','.','?'];


function generatePassword() { 

//while (lowerCase == false && upperCase == false && numeric == false && specialCharOption == false);
//do {
  if (lowerCase == false && upperCase == false && numberChar == false && specials == false) {
    alert("I cannot make a password containing no characters. Please select atleast") + "1" +
    ("character set.") ;
  }

  if (numberChar == true) {
    (passwordArray = passwordArray.concat(numericCharacters));
  }
  
  if (lowerCase == true) {
    (passwordArray = passwordArray.concat(lowerCaseLetters));
  }
  
  if (upperCase == true) {
    (passwordArray = passwordArray.concat(upperCaseLetters));
  }
  
  if (specials == true) {
    (passwordArray = passwordArray.concat(specialCharacters));



writePassword()

}}
  
  
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword()) ;

  // Write password to the #password text area
  function writePassword() {
    //var password = passwordHolder;
   // console.log(password);
    var passwordText = document.querySelector("#password");
  //after the concat do another for to make random characters in the passwordHolder 
//loop for password array
for (i = 0; i >= passLength; i++) {
let passwordHolder = passwordArray[(Math.ceil(Math.random() * passLength.length))];
  
  console.log(passwordHolder)
return passwordHolder;
    
  }
  passwordText.textContent = passwordHolder;
}
  




  
