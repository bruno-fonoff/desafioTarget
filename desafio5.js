function iString(string) {
  let invertedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    console.log(i, string[i]);
    invertedString += string[i];
  }
  return invertedString;
}

// EXEC:
let word = "BRUNO FONOFF";
let result = iString(word);
console.log("String invertida:", result);
