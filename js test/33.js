const persistence = (num) => {
  let count = 0;
  while (num.toString().length > 1) {
    num = num.toString().split("").reduce((acc, digit) => digit * acc, 1);
    count++;
  }
  return count;
};

console.log(persistence(999)); // 4
// because 9*9*9=729, 7*2*9=126, 1*2*6=12, and finally 1*2=2

console.log(persistence(93)); // 3
// because 9*3=27, 2*7=14, 1*4=4 and 4 has only one digit

console.log(persistence(5)); // 0
// because 5 is already a single-digit number
