let charCount = 0;
let wordCount = 0;
let vowelCount = 0;
let vowels = "aeiouAEIOU";

let sentence = prompt("Enter a sentence ending with a period ('.'):").trim();

let isWord = false;

for (let i = 0; i < sentence.length; i++) {
  let char = sentence[i];
  charCount++;

  if (vowels.includes(char)) vowelCount++;

  if (char === " ") {
    isWord = false;
  } else if (char !== ".") {
    if (!isWord) {
      wordCount++;
      isWord = true;
    }
  } else {
    break;
  }
}

console.log("Sentence Length:", charCount);
console.log("Number of Words:", wordCount);
console.log("Number of Vowels:", vowelCount);
