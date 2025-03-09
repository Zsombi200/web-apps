const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");

fetch("https://api.adviceslip.com/advice")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Data cant be retrived");
    }
    return response.json();
  })
  .then((data) => {
    quoteText.innerHTML = data.slip.advice;
    authorText.innerHTML = data.slip.id;
  })
  .catch((error) => console.error(error));
