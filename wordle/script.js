const words = ["words", "words"];

const submit = document.getElementById("submit");
const error = document.getElementById("error");
const word = words[Math.floor(Math.random(0, words.length))];
const letters = document.getElementById("inWord");
const show = document.getElementById("word");
let letterCharachter = [];

function asd() {
  let guess = document.getElementById("input").value;
  let i = true;

  if (guess.length !== 5) {
    error.innerHTML = "Word must be 5 letters";
    i = false;
  } else if (!/^[A-Za-z]+$/) {
    error.innerHTML = "Word can only contain letters";
    i = false;
  } else if (guess === word) {
    error.innerHTML = "You win";
  }
//not working
  guess.split("").map((ele, index) => {
    if (word[index] === ele) {
      show.innerHTML[index * 2 - 1] = ele;
    }
  });

  guess.split("").map((ele) => {
    if (word.indexOf(ele) !== -1 && letterCharachter.indexOf(ele) === -1) {
      letters.innerHTML += ` ${ele}`;
      letterCharachter.push(ele);
    }
  });
}

submit.onclick = asd;
