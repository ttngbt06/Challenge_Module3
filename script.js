// Assignment code here

//function that returns true if two strings
//have at least one common character
//returns false if strings have no common 
//character
function haveCommonCharacter(str1, str2) {
  //take each character from string1
  for (var char of str1) {
    //if it exists in string2, 
    //then they have at least one common character
      if (str2.includes(char)) {
          return true;
      }
  }
  //strings have no common character
  return false;
}

//function that generates passsword using characters
//in given length
function generateRandomPassword(characters, len) {
  var password = "";
  for (var i = 0; i < len; i++) {
      //get random index
      var indx = Math.floor(Math.random() * characters.length);
      //add character at that index to password
      password += characters[indx];
  }

  return password;
}

function generatePassword() {
    //ask for password length
    var passwordLength = prompt("Enter password length (between 8 and 128 characters):");

    //convert length from string to int type
    passwordLength = parseInt(passwordLength);

    //keep asking ig invalid password length is entered
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      //ask for password length
      var passwordLength = prompt("Please enter valid password length (between 8 and 128 characters):");

      //convert length from string to int type
      passwordLength = parseInt(passwordLength);
    } 

    //character set for each type
    const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    var allCharacters ="";

    //ask for types of password character set to include
    var includeLower = confirm("Include lowercase letters?");
    var includeUpper = confirm("Include uppercase letters?");
    var includeDigits = confirm("Include digits?");
    var includeSpecial = confirm("Include special characters?");

    //if yes, add to all characters
    if(includeLower==true) {
      allCharacters+=lowerLetters;
    }
    if(includeUpper==true) {
      allCharacters+=upperLetters;
    }
    if(includeDigits==true) {
      allCharacters+=digits;
    }
    if(includeSpecial==true) {
      allCharacters+=specialCharacters;
    }
    //now all characters include all characters that we
    //need may include in the password
    //now generate password randomly selecting characters
    //from all characters
    var good, password;
    
    do {
      password = generateRandomPassword(allCharacters, passwordLength);

      //now we need to make sure that each selected type exists
      //at least once in the password
      good = true;
      if(includeLower && !haveCommonCharacter(lowerLetters, password)) {
        good = false;
      }
      if(includeUpper && !haveCommonCharacter(upperLetters, password)) {
        good = false;
      }
      if(includeDigits && !haveCommonCharacter(digits, password)) {
        good = false;
      }
      if(includeSpecial && !haveCommonCharacter(specialCharacters, password)) {
        good = false;
      }
      //if not good, keep generating new password until good
    } while(!good);
    
    //return good password
    return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
