// Assignment code here
// Arrays
var upperCaseArray =[
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J"
];

var lowerCaseArray =[
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j"
];

var numbersArray=[
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9"
];

var specialArray=[
  "!",
  "@",
  "#",
  "%",
  "*"
];

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
}

function passwordInfo() {
  //length of password
  var length =
    window.prompt("How long is your password? Number of characters must be between 8 and 126:");
    if (length < 8){
      window.alert("password too short");
      return;
    }
    if (length >126) {
      window.alert ("password too long");
      return;
    }
    if (isNaN(length)===true){
      window.alert("numerical data only");
      return;
    }

console.log(length);

    var numbers = window.confirm("Do you want to include numbers? OK to agree");
    console.log(numbers);
    var upperCase = window.confirm( "Do you want to include Upper Case Letters? OK to agree");
    console.log(upperCase);
    var lowerCase = window.confirm ("Do you want to include Lower Case Letters? Okay to agree");
    console.log(lowerCase);
    var specialCharacters=window.confirm("Do you want to include special characters? Okay to agree");
    console.log(specialCharacters);

    if (numbers === false && upperCase === false && lowerCase === false && specialCharacters === false) {
      alert("Must select one criteria");
      return;
    }

    var passwordInfo = {
      length: length,
      numbers: numbers,
      upperCase: upperCase,
      lowerCase: lowerCase,
      specialCharacters: specialCharacters
    };
  
    return passwordInfo;
  }

 






passwordInfo();
  


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

