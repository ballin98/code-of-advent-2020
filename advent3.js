const list = require("./advent-list-3.json");

const countTrees = (right, down) => {
  let treesCount = 0;
  const columnsCount = list[0].length;
  const rowsCount = list.length;
  let j = right;
  for (let i = down; i < rowsCount; i += down) {
    if (list[i][j] === "#") {
      treesCount++;
    }
    j = j + right >= columnsCount ? j + right - columnsCount : j + right;
  }
  return treesCount;
};

const result1 = countTrees(3, 1);
console.log(result1);

const newRules = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

const result2 = newRules
  .map(([right, down]) => countTrees(right, down))
  .reduce((acc, curr) => acc * curr, 1);
console.log(result2);
