//generate button selector
const generateBtn = document.querySelector('.btn');


  //a prompt for how many characters the user would like
    //must be 8-128 characters
    //store it in a variable
    const passLength = prompt("How long do you want your password to be? *Must be between 8-128*");
    console.log(passLength);
    
    //ask the user if they want lowercase
        //store it in a variable
    const lowerCase = confirm("Would you like lowercase characters?");
    console.log(lowerCase);
    
      //ask the user if they want uppercase
        //store it in a variable
    const upperCase = confirm("How about uppercase characters?");
    console.log(upperCase);
    
      //ask the user if they want numeric
        //store it in a variable
    const numberChar =confirm("What about numbers?");
    console.log(numberChar);
    
      //ask the user if they want special characters
    const specials = confirm("Any special characters too?");
    console.log(specials);

//used as a starting point to input our complete password array
let passwordHolder = [];

//Array for password posibilities
let passwordArray = [];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 

// Array of lowercase characters to be included in password
const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Array of special characters to be included in password
const specialCharacters = ['!','%',
'^','&','*','(',')','-','_','+','=','{','}','[',']',
'|','/',':',';','<','>','.','?'];

//prompts have been answered so now we generate the password based on user input
generatePassword();

function generatePassword() { 
  //Validate number choice
  if (passLength < 8 || passLength > 128) {
    alert("Invalid number of characters");
    return "";
  }
//while (lowerCase == false && upperCase == false && numeric == false && specialCharOption == false);
//do {
  if (lowerCase == false && upperCase == false && numberChar == false && specials == false) {
    alert("I cannot make a password containing no characters. Please select atleast 1 character set")
  }

  if (numberChar == true) {
    passwordArray = passwordArray.concat(numericCharacters);
  }
  
  if (lowerCase == true) {
    passwordArray = passwordArray.concat(lowerCaseLetters);
  }
  
  if (upperCase == true) {
    passwordArray = passwordArray.concat(upperCaseLetters);
  }
  
  if (specials == true) {
    passwordArray = passwordArray.concat(specialCharacters);
  };
//convert to interger to ensure for loop runs to a speci
let passwordLen = parseInt(passLength);


//after the concat do another for loop to make random characters in the passwordHolder 
//loop for password array
  let password = "";
  for (var i = 0; i < passwordLen; i++) {
    //Make password of chosen length from chosen options
    let randomIndex = Math.floor(Math.random() * passwordArray.length);
    //Random characters from arrays chosen
    let randomCharacter = passwordArray[randomIndex];
    password = password + randomCharacter;
  }

  return password;
  
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
