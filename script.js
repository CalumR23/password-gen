// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  //define all the vars we need
    let length = parseInt(prompt("Choose a password length between 8 and 128"))
    let upper = confirm("do u want upper")
    let lower = confirm("do u want lower") 
    let nums = confirm("do u want nums") 
    let special = confirm("do u want special") 
    let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowerChar = "abcdefghijklmnopqrstuvwxyz"
    let numsChar = "0123456789"
    let specialChar = "!@#$%^&*()_+"
    //check the length and see if it is in the allowed area
    if (length < 129 && length > 7) {
        //set new vars for new password and hold all allowed characters
        let newPass = ""
        let newPassChar = ""
        //check to see what characters are allowed and make sure they are in the new password
        if(upper){
            newPassChar += upperChar
            newPass += upperChar[Math.floor(Math.random()* upperChar.length)]
        }
        if(lower){
            newPassChar += lowerChar
            newPass += lowerChar[Math.floor(Math.random()* lowerChar.length)]
        }
        if(nums){
            newPassChar += numsChar
            newPass += numsChar[Math.floor(Math.random()* numsChar.length)]
        }
        if(special){
            newPassChar += specialChar
            newPass += specialChar[Math.floor(Math.random()* specialChar.length)]
        }
      console.log(newPassChar)
      //by adding characters above you need the newLength to still hold true to the users input
        var newLength = length - newPass.length
    //for loop to add a new character to the new password the newLength amount of times 
        for (let i = 0; i < newLength; i++) {
            let newChar = newPassChar[Math.floor(Math.random() * newPassChar.length)]
            newPass += newChar
        }
        //return the new password so that the below function can utilize it for the DOM
        console.log(newPass)
        return newPass
    } else {
        alert("yo u got wrong length")
    }


}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
