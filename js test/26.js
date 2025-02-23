String.prototype.capitalize = function () {
  return this.toString()
    .split(" ")
    .map((x) => `${x.substring(0, 1).toUpperCase()}${x.substring(1, x.length)}`)
    .join(" ");
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.capitalize()); // 'How Can Mirrors Be Real If Our Eyes Aren't Real'
