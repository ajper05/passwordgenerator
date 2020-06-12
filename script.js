// Assignment Code
var generateBtn = document.querySelector("#generate");

//Global Variables
var upperList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialList = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];


//Grabs user preferred length
function passwordLength(){
  userLength = prompt("How many characters? Min. 8 - Max. 128");
  if(userLength < 8 || userLength > 126 || userLength === NaN){
    alert("Password must be a minimum of 8 characters and a maximum of 128");
    passwordLength();
  }
  return userLength;
  
}

//Gathers all other user preferences that can be stored as boolean type. 
function checkPreferences(){
  userLower = confirm("Would you like lower case letters? Okay = Yes  Cancel = No");
  userUpper = confirm("Would you like upper case letters? Okay = Yes  Cancel = No");
  userNumeric = confirm("Would you like to have numbers? Okay = Yes  Cancel = No");
  userSpecial = confirm("Would you like special characters? Okay = Yes  Cancel = No")

  console.log(userLower);
  console.log(userUpper);
  console.log(userNumeric);
  console.log(userSpecial);


  return userLower, userUpper, userNumeric, userSpecial;
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
