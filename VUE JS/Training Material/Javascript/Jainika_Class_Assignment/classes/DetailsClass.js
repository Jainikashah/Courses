import { SubCategory } from "./CategoryClass.js";

export class Details {
    name="";
    date="";
    subCategoryList={};

    constructor(data){
        this.name = data.name;
        this.date = data.date;
        this.subCategoryList = { 
            [ data.subCategoryName ] : [ new SubCategory(data) ]

        };
    }
    
}


