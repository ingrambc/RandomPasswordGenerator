// Assignment Code
var generateBtn = document.querySelector("#generate");
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var numString = "01234567890"
var specialString = "!@#$%^&*(){}:;<>_+-=";
var passLengthMax = 128;
var passLengthMin = 8;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var charList = "";
  var password = "";
  var chosen = 'false';
  var passLength = 0;
  var randomNum = -1;

  //add Captial letters to array if chosen to
  chosen = confirm("Do you want Upper Case letters in your password?")
  if(chosen){
    charList+= upCase;
  }
  //console.log(charList);

  //add Lowers case letters if chosen
  chosen = confirm("Do you want Lower Case letters in your password?")
  if(chosen){
    charList += lowCase;
  }
  //console.log(charList);

  //add numbers if chosen
  chosen = confirm("Do you want numbers in your password?")
  if(chosen){
    charList += numString;
  }
  //console.log(charList);

  //add special chars if chosen
  chosen = confirm("Do you want Special Charaters in your password?")
  if(chosen){
    charList += specialString;
  }
  //console.log(charList);

  //get length of password
  passLength = prompt("How long do you want you password, from 8 to 128 characters")
  while(passLength < passLengthMin || passLength > passLengthMax || isNaN(passLength)){
    passLength = prompt("you entered " + passLength + ", please enter a number from 8 to 128")
  }
  //console.log(passLength);

  //generate password
  for (let i = 0; i < passLength; i++) {
    randomNum = Math.floor(Math.random() * charList.length);
  //        console.log("random Num = " + randomNum);
    password += charList.charAt(randomNum);
  //        console.log(password);
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
