const list = require("./advent-list-7.json");

const processedList = list.map((rule) => {
  const [bagType, containsString] = rule.split(" contain ");
  const bagRule = {
    bagType,
    contains: containsString.split(", ").map((bag) => ({
      bagType: bag.split(" ").slice(1).join(" "),
      quantity: bag.split(" ")[0],
    })),
  };
  return bagRule;
});
// console.dir(processedList, { depth: null });

const MY_BAG = "shiny gold bag";

const canHoldMyBag = processedList
  .filter((bag) => {
    const bagsThatCanContain = bag.contains.map(({ bagType }) => bagType);
    return bagsThatCanContain.includes(MY_BAG);
  })
  .map(({ bagType }) => bagType);

//fajny nazov
const bagsThatCanHoldBagsThatCanHoldMyBag = processedList.filter((bag) => {
  const bagsThatCanContain = bag.contains.map(({ bagType }) => bagType);
  let canContain = false;
  canHoldMyBag.forEach((bagType) => {
    if (bagsThatCanContain.includes(bagType)) {
      canContain = true;
    }
  });
  return canContain;
});

console.dir(bagsThatCanHoldBagsThatCanHoldMyBag.length, { depth: null });

// console.log(result);
