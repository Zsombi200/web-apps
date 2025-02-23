const findShort = (str) => {
  return Math.min(...str.split(" ").map((x) => x.length));
};

console.log(findShort("Test where final word shortest see"));
console.log(findShort("Lets all go on holiday somewhere very cold"));
console.log(findShort("i want to travel the world writing code one day"));
