// F-lower half B-upper half
// L-lower half R-upper half
const list = require("./advent-list-5.json");

const getRowOrColumn = (min, max, string) => {
  if (min === max || !string) {
    return min;
  }
  const firstLetter = string.charAt(0);
  const rest = string.slice(1, string.length);

  let newMin = min;
  let newMax = max;

  if (firstLetter === "F" || firstLetter === "L") {
    newMax = Math.floor(max - (max - min) / 2);
  } else {
    newMin = Math.ceil(min + (max - min) / 2);
  }

  return getRowOrColumn(newMin, newMax, rest);
};

const result = list
  .map((string) => {
    const rowString = string.slice(0, 7);
    const columnString = string.slice(7, 10);

    const row = getRowOrColumn(0, 127, rowString);
    const column = getRowOrColumn(0, 7, columnString);

    return row * 8 + column;
  })
  .sort((a, b) => b - a);

console.log(result[0]);

for (let i = 85; i <= 890; i++) {
  if (!result.includes(i)) {
    const result2 = i;
    console.log(result2);
  }
}
