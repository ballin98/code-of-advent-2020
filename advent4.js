const list = require("./advent-list-4.json");

const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

const validPassports = list.filter((obj) => {
  const keys = Object.keys(obj);
  let hasAllFields = true;
  requiredFields.forEach((field) => {
    if (!keys.includes(field)) {
      hasAllFields = false;
    }
  });
  return hasAllFields;
});

const result = validPassports.length;

const validPassports2 = validPassports.filter((obj) => {
  const keys = Object.keys(obj);
  let hasAllValidFields = true;

  keys.forEach((key) => {
    const val = obj[key];
    switch (key) {
      case "byr":
        if (!/[0-9]{4}/.test(val) || Number(val) < 1920 || Number(val) > 2002) {
          hasAllValidFields = false;
        }
        break;
      case "iyr":
        if (!/[0-9]{4}/.test(val) || Number(val) < 2010 || Number(val) > 2020) {
          hasAllValidFields = false;
        }
        break;
      case "eyr":
        if (!/[0-9]{4}/.test(val) || Number(val) < 2020 || Number(val) > 2030) {
          hasAllValidFields = false;
        }
        break;
      case "hgt":
        if (/[0-9]*[ci][mn]/.test(val)) {
          if (/[0-9]*cm/.test(val)) {
            //cm
            const num = val.split("c")[0];
            if (num < 150 || num > 193) {
              hasAllValidFields = false;
            }
          } else {
            //in
            const num = val.split("i")[0];
            if (num < 59 || num > 76) {
              hasAllValidFields = false;
            }
          }
        } else {
          hasAllValidFields = false;
        }
        break;
      case "hcl":
        if (!/#[0-9a-f]/.test(val)) {
          hasAllValidFields = false;
        }
        break;
      case "ecl":
        if (!/[abgho][mlrzto][bunylh]/.test(val)) {
          hasAllValidFields = false;
        }
        break;
      case "pid":
        if (!/[0-9]{9}/.test(val)) {
          hasAllValidFields = false;
        }
        break;
    }
  });
  return hasAllValidFields;
});

console.log(validPassports2.length);
//194
