// Assignment Code
var generateBtn = document.querySelector("#generate");

//Global Variables
var upperList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialList = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var userLower = confirm("Would you like lower case letters? Okay = Yes  Cancel = No");
var userUpper = confirm("Would you like upper case letters? Okay = Yes  Cancel = No");
var userNumeric = confirm("Would you like to have numbers? Okay = Yes  Cancel = No");
var userSpecial = confirm("Would you like special characters? Okay = Yes  Cancel = No");


//Grabs user preferred length
function passwordLength(){
  userLength = prompt("How many characters? Min. 8 - Max. 128");
  if(userLength < 8 || userLength > 126 || userLength === NaN){
    alert("Password length must be a minimum of 8 characters and a maximum of 128");
    passwordLength();
  }
  return parseInt(userLength);
  
}

//Gathers all other user preferences that can be stored as boolean type. 
function checkPreferences(){
  var passwordResult = []
  // userLower = confirm("Would you like lower case letters? Okay = Yes  Cancel = No");
  // userUpper = confirm("Would you like upper case letters? Okay = Yes  Cancel = No");
  // userNumeric = confirm("Would you like to have numbers? Okay = Yes  Cancel = No");
  // userSpecial = confirm("Would you like special characters? Okay = Yes  Cancel = No");

  if (userLower = true){
    passwordResult = passwordResult.concat(lowerList)
  }

  if (userUpper = true){
    passwordResult = passwordResult.concat(upperList)
  }
  
  if (userNumeric = true){
    passwordResult = passwordResult.concat(numberList)
  }

  if (userSpecial = true){
    passwordResult = passwordResult.concat(specialList)
  }

  return passwordResult;
}
//Call User Input Functions
passwordLength(); 
checkPreferences();

//Select random characters from the passwordResult array using the defined user length and return the result. 
function generatePassword(){
  randomizedPassword = "";
  for (i = 0; i < userLength; i++){
    randomizedPassword += passwordResult[(Math.floor(Math.random() * userlength))]

  return randomizedPassword;
  }
}

generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
