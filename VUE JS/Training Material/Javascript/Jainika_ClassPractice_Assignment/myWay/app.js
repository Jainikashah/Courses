import rootData from "../data.js";
import { SubCategory } from "./categories.js";
import { Details } from "./details.js";


const resultData = [];

const check = newObj => {
    for(const item of resultData){
        if(item.name == newObj.name){
            item.children.push(new SubCategory(newObj));
            return 0;
        }
    }
            

    const toAdd = new Details(newObj);
    resultData.push(toAdd);
}



for(const data of rootData){
    check(data);
}

console.log('Result: ', resultData);