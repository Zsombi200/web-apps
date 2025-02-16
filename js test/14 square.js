const squareDigits = (num) => {
  num = num.toString().split("");
  return num.map((digit) => digit ** 2).join("");
};

console.log(squareDigits(2112)); // 4114
console.log(squareDigits(3212)); // 9414
console.log(squareDigits(9159)); // 8112581
