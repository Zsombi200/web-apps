const btn = document.getElementById("roll");
const dice = document.getElementById("dice");
const previousRolls = document.getElementById("previousRolls");
let count = 0;

const diceSides = [
  "&#9856;",
  "&#9857;",
  "&#9858;",
  "&#9859;",
  "&#9860;",
  "&#9861;",
];

btn.addEventListener("click", () => {
  dice.classList.toggle("roll-animation");
  setTimeout(() => {
    dice.classList.toggle("roll-animation");
    addElement();
  }, 1500);
});

const addElement = () => {
  count++;
  const side = diceSides[Math.floor(Math.random() * 6)];
  dice.innerHTML = side;

  const element = document.createElement("li");

  const rollNumber = document.createElement("h2");
  rollNumber.innerHTML = `Roll ${count}:`;

  const showRoll = document.createElement("p");
  showRoll.innerHTML = side;

  element.appendChild(rollNumber);
  element.appendChild(showRoll);
  previousRolls.appendChild(element);

  previousRolls.style.width = "500px";

  rollNumber.style.margin = "0";

  element.style.backgroundColor = "rgb(177, 177, 177)";
  element.style.borderRadius = "10px";
  element.style.display = "flex";
  element.style.justifyContent = "space-between";
  element.style.alignItems = "center";
  element.style.padding = "10px";
  element.style.marginTop = "10px";

  element.querySelector("p").style.fontSize = "3em";
  element.querySelector("p").style.margin = "0";
};
