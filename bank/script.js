const add = document.getElementById("add");
const topBar = document.getElementById("fgh");
const block = document.getElementById("window");

function addOnHover() {
    block.classList.toggle("show")
    block.classList.toggle("hidden")
    topBar.classList.toggle("hidden")
}
add.addEventListener("click", addOnHover);
