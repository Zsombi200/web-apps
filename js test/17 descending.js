const descendingOrder = (n) => {
  list = n.toString().split("");
  let length = list.length;
  n = [];
  for (let i = 0; i != length; i++) {
    let x = list
      .join("")
      .toString()
      .indexOf(Math.max(...list));
    n.push(Math.max(...list));
    list.splice(x, 1);
  }
  return n.join("");
};

console.log(descendingOrder(0)); // 0
console.log(descendingOrder(1)); // 1
console.log(descendingOrder(1021)); // 2110
console.log(descendingOrder(42145)); // 54421
console.log(descendingOrder(145263)); // 654321
console.log(descendingOrder(123456789)); // 987654321
