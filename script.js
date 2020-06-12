// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var passwordLength = prompt("How many characters? Min. 8 - Max. 128");
var numeric = confirm("Would you like numbers present?");
var specialCharacters = confirm("Would you like special characters added?");
var lowerCase = confirm ("Would you like lower case letters?");
var upperCase = confirm ("Would you like upper case letters?");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
