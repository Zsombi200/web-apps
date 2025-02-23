const kidsWithCandies = (candies, extraCandies) => {
  return candies.map((ele) =>
    ele + extraCandies >= Math.max(...candies) ? true : false
  );
};

console.log(kidsWithCandies([12, 1, 12], 10)); // [true, false, true]
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // [true, false, false, false, false]
