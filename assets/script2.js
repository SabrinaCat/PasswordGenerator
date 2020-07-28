//generate button selector
const generateBtn = document.querySelector("#generate");


// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
// Array of lowercase characters to be included in password
const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Array of uppercase characters to be included in password
const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// Array of special characters to be included in password
const specialCharacters = ['!','%','^','&','*','(',')','-','_','+','=','{','}','[',']','|','/',':',';','<','>','.','?'];


//these are my prompts that will activate when #generateBtn is clicked

//a prompt for how many characters the user would like
//must be 8-128 characters
let passLength = prompt("How long do you want your password to be? *Must be between 8-128*");
console.log(passLength);
//ask the user if they want lowercase
let lowerCase = confirm("Would you like lowercase characters?");
console.log(lowerCase);
//ask the user if they want uppercase
let upperCase = confirm("How about uppercase characters?");
console.log(upperCase);
//ask the user if they want numeric
let numberChar =confirm("What about numbers?");
console.log(numberChar);
//ask the user if they want special characters
let specials = confirm("Any special characters too?");
console.log(specials);


//Array for password posibilities
let passwordArray = [""];
//Empty string to add random options to
let passwordHolder = "";


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword()) ;

function passString (){
   // for (i = 0; i <= passLength; i++) {
        //passwordHolder = passwordArray[(Math.ceil(Math.random() * passLength.length))];
      //  };
        //for ( let i=0; i>= passwordArray.length; i++) {
        //console.log(passwordArray[i]);
        //passwordHolder.push(passwordArray[i])
        //}
        //for loop for passwordArray indexes

        for (i=0; i>= parseInt(passLength); i++) {
            passwordHolder = passwordArray[Math.ceil(Math.random() * passwordArray.length)]  
            console.log(passwordArray[i]);
            passwordHolder.push(passwordArray[i])
            console.log(passwordHolder);
        };
};


// function to Write password to the #password text area
function writePassword() {
passString();    
//let passwordHolder = "";
const passwordText = document.querySelector("#password");
passwordText.textContent = passwordHolder;
};



//Logic that will concat all selected(true) criteria to be used in for loop
//while (lowerCase == false && upperCase == false && numeric == false && specialCharOption == false);
if (lowerCase == false && upperCase == false && numberChar == false && specials == false) {
    alert("I cannot make a password containing no characters. Please select atleast") + "1" +
    ("character set.") ;
};
if (numberChar == true) {
    (passwordArray = passwordArray.concat(numericCharacters));
};
if (lowerCase == true) {
    (passwordArray = passwordArray.concat(lowerCaseLetters));
};
if (upperCase == true) {
    (passwordArray = passwordArray.concat(upperCaseLetters));
};
if (specials == true) {
    (passwordArray = passwordArray.concat(specialCharacters));
};