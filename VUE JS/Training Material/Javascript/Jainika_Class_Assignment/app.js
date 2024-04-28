// using classes:

import { SubCategory } from "./classes/CategoryClass.js";
import rootData from "./data.js";
import { Details } from "./classes/DetailsClass.js";
const resultData = [];



// push Data inside the result array.
const pushData = (newObj) => {

    // checks if the property name already exists.
    for(const data of resultData){
        if(data.name == newObj.name){
            addSubCategory(data, newObj);
            return 0;
        }
    }

    // runs only if the property name doesnt exists.
    const toPush = new Details(newObj);
    resultData.push(toPush);
}





// adds subcategory
const addSubCategory = (x, newObj) => {
    
    // checks if the subcategory name already exists in the list.
    if(x.subCategoryList[newObj.subCategoryName]){
        x.subCategoryList[newObj.subCategoryName].push(new SubCategory(newObj));
    }else{
        x.subCategoryList[newObj.subCategoryName] = [ new SubCategory(newObj) ];  
    }
}





// looping through the root json object and calling the pushData().
for(const data of rootData){
    pushData(data);
}

console.log('Result: ',resultData);