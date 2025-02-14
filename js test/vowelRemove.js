const disemvowel = (str) => {
  let letters = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i != letters.length; i++) {
    for (; str.indexOf(letters[i]) != -1; ) {
      str = str.replace(letters[i], "");
      console.log(letters[i]);
    }
  }
  return str;
};

console.log(disemvowel("This website is for losers LOL!")); // 'Ths wbst s fr lsrs LL!'
