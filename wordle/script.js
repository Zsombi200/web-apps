const words = ["words", "words"];

const submit = document.getElementById("submit");
const error = document.getElementById("error");
const word = words[Math.floor(Math.random(0, words.length))];
const letters = document.getElementById("inWord");
console.log(word);

function asd() {
  let guess = document.getElementById("input").value;
  let i = true;
  console.log(guess);

  if (guess.length !== 5) {
    error.innerHTML = "Word must be 5 letters";
    i = false;
  } else if (!/^[A-Za-z]+$/) {
    error.innerHTML = "Word can only contain letters";
    i = false;
  }
// not working 
  guess
    .split("")
    .map((ele) =>
      word.indexOf(ele) === -1
        ? asd
        : (letters.innerHTML += ` ${ele}`)
    );
}
submit.onclick = asd;
