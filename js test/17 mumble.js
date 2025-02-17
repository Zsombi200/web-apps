const accum = (str) => {
  return str
    .split("")
    .map((x, index) => `${x.substr(0, 1).toUpperCase()}${x.repeat(index)}`)
    .join("-");
};

console.log(accum("abcd")); // 'A-Bb-Ccc-Dddd'
console.log(accum("cwAt")); // 'C-Ww-Aaa-Tttt'
console.log(accum("RqaEzty")); // 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
