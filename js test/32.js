const reverseString = (str) => {
  let newStr = [];
  str.split("").map((ele) => newStr.unshift(ele));
  return newStr.join("");
};

console.log(reverseString("hello")); // 'olleh'
console.log(reverseString("world")); // 'dlrow'
console.log(reverseString("")); // ''
console.log(reverseString("h")); // 'h'
