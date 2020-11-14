// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Password logic
function generatePassword() {
  var numbers = confirm('Do you want numbers in your password');
  var uppercase = confirm("Do you want uppercase in your password");
  var lowercase = confirm("Do you want lowercase in your password");
  var symbols = confirm("Do you want symbols in your password");
  var lenght = prompt('Password must be between 8 and 128 characters, Choose length')

  var allNumbers = "0123456789";
  var allUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var allLowercase = "abcdefghijklmnopqrstuvwxyz";
  var allSymbols = "~!@#$%^&*()_+";
  var container;
  if (!numbers && !uppercase && !lowercase && !symbols) {
    alert('You must select at least one character type')
    console.log(numbers, uppercase, lowercase, symbols)
  } else if (numbers || uppercase || lowercase || symbols && lenght) {
    numbers = allNumbers;
    uppercase = allUppercase;
    lowercase = allLowercase;
    symbols = allSymbols;
    container = [...numbers, ...uppercase, ...lowercase, ...symbols];
    // lenght.sort(function (item) {
    //   return .5 - Math.random() ;
    // })
    function getRandom(arr, n) {
      var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
      if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
      while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
      }
      return result;
    }
    
    return getRandom(container, lenght)
  } 
}

//Handling event
generateBtn.addEventListener("click", writePassword);

