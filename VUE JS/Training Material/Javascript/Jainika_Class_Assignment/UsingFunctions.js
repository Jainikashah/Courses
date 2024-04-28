// Using functions:

import rootData from "./data.js";
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
    const toPush = {
        "name" : newObj.name,
        "date" : newObj.date,
        "subCategoryList" : {
            [newObj.subCategoryName] : [
                {
                    "subName" : newObj.subName,
                    "price" : newObj.subPrice,
                    "quantity" : newObj.qty
                }
            ]
        } 
    }
    resultData.push(toPush);
}




// adds subcategory
const addSubCategory = (x, newObj) => {
    
        // checks if the subcategory name already exists in the list.
        if(x.subCategoryList[newObj.subCategoryName]){
            x.subCategoryList[newObj.subCategoryName].push({
                "subName" : newObj.subName,
                    "price" : newObj.subPrice,
                    "quantity" : newObj.qty
            })
        }else{
            x.subCategoryList[newObj.subCategoryName] = [
            {
                "subName" : newObj.subName,
                "price" : newObj.subPrice,
                "quantity" : newObj.qty
            }
            ]  
        }
    }





// looping through the root json object and calling the pushData().
for(const data of rootData){
    pushData(data);
}

console.log('Result: ',resultData);