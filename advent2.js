const list = require("./advent-list-2.json");

const validPasswords1 = list.filter((password) => {
  const [min, max, letter, pass] = password;
  const lettersInWord = pass.split("").filter((ch) => ch === letter).length;
  return lettersInWord >= min && lettersInWord <= max;
});

const result1 = validPasswords1.length;

console.log(result1);

const validPasswords2 = list.filter((password) => {
  const [first, last, letter, pass] = password;
  const lettersInWord = pass
    .split("")
    .filter((ch, i) => ch === letter && (i + 1 === first || i + 1 === last));
  return lettersInWord.length === 1;
});

const result2 = validPasswords2.length;

console.log(result2);
