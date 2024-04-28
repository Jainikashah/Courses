import { SubCategory } from "./classes/Category.js";
import { Details } from "./classes/Details.js";
import rootData from "./data.js";

const resultData = [];
let reference = {};
const check = (newObj) => {
  if (!reference.hasOwnProperty(newObj.name)) {
    reference[newObj.name] = [];
    for (const item of rootData) {
      if (item.name == newObj.name) {
        reference[newObj.name].push(new SubCategory(newObj));
      }
    }
    console.log(reference);
    const toPush = new Details({
      parent: newObj,
      children: reference[newObj.name],
    });
    resultData.push(toPush);
  }
};

for (const data of rootData) {
  check(data);
}

console.log(resultData);
