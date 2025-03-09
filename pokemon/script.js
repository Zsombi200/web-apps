const button = document.getElementById("search-button");

const pokemonName = document.getElementById("pokemon-name");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonPicture = document.getElementById("pic");

const pokemonTypes = document.getElementById("types");
const pokemonHp = document.getElementById("hp");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense");
const pokemonSpecialAttack = document.getElementById("special-attack");
const pokemonSpecialDefense = document.getElementById("special-defense");
const pokemonSpeed = document.getElementById("speed");


button.addEventListener("click", () => {
  const name = document.getElementById("search-input").value.toLowerCase();
  console.log(name);
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => {
      if (name === "") {
        throw new Error("Pokemons have names")
      }
      if (!response.ok) {
        throw new Error("Pokemon was not found");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      pokemonName.innerHTML = data.name.toUpperCase();
      pokemonWeight.innerHTML = `Weight: ${data.weight}`;
      pokemonHeight.innerHTML = `Height: ${data.height}`;
      pokemonPicture.src = data.sprites.front_default;

      pokemonTypes.innerHTML = data.types[0].type.name;
      pokemonHp.innerHTML = data.stats[0].base_stat;
      pokemonAttack.innerHTML = data.stats[1].base_stat;
      pokemonDefense.innerHTML = data.stats[2].base_stat;
      pokemonSpecialAttack.innerHTML = data.stats[3].base_stat;
      pokemonSpecialDefense.innerHTML = data.stats[4].base_stat;
      pokemonSpeed.innerHTML = data.stats[5].base_stat;

      pokemonPicture.classList.add("pic")
    })
    .catch((error) => {
      alert(error);
    });
});
