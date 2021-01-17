const list = require("./advent-list-6.json");

const result = list
  .map((group) => {
    let uniqueAnswers = [];
    group.forEach((answers) => {
      const answersArr = answers.split("");
      answersArr.forEach((answer) => {
        if (!uniqueAnswers.includes(answer)) {
          uniqueAnswers.push(answer);
        }
      });
    });
    return uniqueAnswers;
  })
  .map((uniqueAnswers) => uniqueAnswers.length)
  .reduce((acc, curr) => acc + curr, 0);

console.log(result);

//////////////////////////////////////////////////////////
// NAPICU NAKODENE
const everyAnswer = list.map((group) => ({
  answers: group.flatMap((answers) => answers.split("")),
  sizeOfGroup: group.length,
}));

const result2 = everyAnswer
  .map((group) => {
    let groupAnswers = [];
    let alreadyCheckedAnswes = [];
    group.answers.forEach((answer) => {
      if (
        group.answers.filter((ch) => ch === answer).length ===
          group.sizeOfGroup &&
        !alreadyCheckedAnswes.includes(answer)
      ) {
        groupAnswers.push(answer);
        alreadyCheckedAnswes.push(answer);
      } else {
        alreadyCheckedAnswes.push(answer);
      }
    });
    return groupAnswers;
  })
  .map((uniqueAnswers) => uniqueAnswers.length)
  .reduce((acc, curr) => acc + curr, 0);

console.log(result2);
