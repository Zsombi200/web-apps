const words = ["words", "words"];

const submit = document.getElementById("submit");
const error = document.getElementById("error");
const word = words[Math.floor(Math.random(0, words.length))];
const letters = document.getElementById("inWord");
const show = document.getElementById("word");
const wrongLetters = document.getElementById("wrongLetter");

let letterCharachter = [];
let wrongCharachters = [];
let winCheck = false;

function asd() {
  let guess = document.getElementById("input").value.toLowerCase();

  if (guess.length !== 5) {
    error.innerHTML = "Word must be 5 letters";
    return;
  } else if (!/^[A-Za-z]+$/.test(guess)) {
    error.innerHTML = "Word can only contain letters";
    return;
  } else if (guess === word) {
    error.innerHTML = "You win";
    winCheck = true
  } else {
    error.innerHTML = "Good guess"
  }

  guess.split("").map((ele, index) => {
    if (word[index] === ele) {
      show.innerText = show.innerHTML
        .split(" ")
        .map((char, i) => (i === index ? ele : char))
        .join(" ");
    }
  });

  guess.split("").map((ele) => {
    if (word.indexOf(ele) !== -1 && letterCharachter.indexOf(ele) === -1) {
      letters.innerHTML += ` ${ele}`;
      letterCharachter.push(ele);
    } else if (word.indexOf(ele) === -1 && wrongCharachters.indexOf(ele) === -1) {
      wrongLetters.innerHTML += ` ${ele}`
      wrongCharachters.push(ele)
    }
  });
}

submit.onclick = asd;
if (winCheck) {
  
}