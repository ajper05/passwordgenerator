// Assignment Code
var generateBtn = document.querySelector("#generate");


function passwordLength(){
  userLength = prompt("How many characters? Min. 8 - Max. 128");
  if(userLength < 8 || userLength > 126){
    alert("Password must be a minimum of 8 characters and a maximum of 128");
    passwordLength();
  }
  return userLength;
  
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
