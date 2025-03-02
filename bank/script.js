const add = document.getElementById("add");
const topBar = document.getElementById("fgh");
const block = document.getElementById("window");

function addOnHover(event) {
  event.stopPropagation();
  block.classList.toggle("hidden");
  topBar.classList.toggle("hidden");
}

add.addEventListener("click", addOnHover);
document.addEventListener("click", function (e) {
  if (!block.contains(e.target) && !block.classList.contains("hidden")) {
    block.classList.toggle("hidden");
    topBar.classList.toggle("hidden");
  }
});