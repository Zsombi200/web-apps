const fizzBuzz = () => {
  for (let i = 1; i < 100; i++) {
    let output = i;
    if (i % 3 === 0) {
      output += " Fizz";
    } else if (i % 5 === 0) {
      output += " Buzz";
    }
    console.log(output);
  }
};

fizzBuzz(); // 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, ...
