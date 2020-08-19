var generateBtn = document.querySelector("#generate");
var pwLength = parseInt(prompt("How many characters would you like in your password? min=8 max=128"));
// var confirmUpper;
// var confirmLower;
// var confirmNum;
// var confirmSymbol;

var confirmUpper = confirm("Do you want uppercase characters?");

var confirmLower = confirm("Do you want lowercase characters?");

var confirmNum = confirm("Do you want number characters?");

var confirmSymbol = confirm("Do you want symbol characters?");

function getCharacter() {
    var array = []
    var finalCharacter
    var upperCase = String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1) + 65))
    var lowerCase = String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1) + 97))
    var number = String.fromCharCode(Math.floor(Math.random() * (57 - 48 + 1) + 48))
    var symbol = String.fromCharCode(Math.floor(Math.random() * (47 - 33 + 1) + 33))

    if (confirmUpper) { array.push(upperCase) }
    if (confirmLower) { array.push(lowerCase) }
    if (confirmNum) { array.push(number) }
    if (confirmSymbol) { array.push(symbol) }

    var i = Math.ceil(Math.random() * array.length)
    finalCharacter = array[i - 1]
    return finalCharacter
}

function generatePassword() {
    var finalPassword = ""
    for (let a = 0; a < pwLength; a++) {
        finalPassword += getCharacter()
    }
    return finalPassword
}

function writePassword() {
    if (pwLength > 8 && pwLength < 128) {} else { alert("Please refresh and input a number between 8 and 128") };
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);