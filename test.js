let word = "kayak";
let x = true;
for (let i = 0; i < word.length / 2; i++) {
  if (word[i] == word[word.length - i - 1]) {
    console.log(word[i]);
    console.log(word[word.length - i - 1]);
  } else {
    x = false;
    break;
  }
}

if (x) {
  console.log("kiosdsa");
}
