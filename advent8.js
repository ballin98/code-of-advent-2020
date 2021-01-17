const list = require("./advent-list-8.json");

const SIZE = 20;

let acc = 0;
let index = 0;
let shouldContinue = true;
let last10moves = [];
let previous10moves = [];



// while (index < list.length && shouldContinue) {
//   [command, arg] = list[index];

//   if (last10moves === previous10moves && last10moves.length !== 0) {
//     shouldContinue = false;
//   }
//   if (last10moves.length < SIZE) {
//     last10moves.push(index);
//   } else {
//     console.log(
//       `last10 === previous10 = ${last10moves === previous10moves}`,
//       last10moves,
//       previous10moves
//     );

//     previous10moves = [...last10moves];
//     last10moves = [];
//     last10moves.push(index);
//   }

//   // if (last5moves.length === 5) {
//   //   last5moves.shift();
//   // }

//   // last5moves.push(`${command}${arg}`);

//   switch (command) {
//     case "acc":
//       acc += arg;
//       index++;
//       break;
//     case "jmp":
//       index += arg;
//       break;
//     case "nop":
//       index++;
//       break;
//   }
//   // console.log(`i = ${index} and acc = ${acc}`);
// }
