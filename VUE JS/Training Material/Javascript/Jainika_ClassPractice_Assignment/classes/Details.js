import { SubCategory } from "./Category.js";

// export class Details{
   
//     parent = {
//         name : '',
//         date : ''
//     }
//     children = [];

//     constructor(data){
//         this.parent.name = data.name;
//         this.parent.date = data.date;
//         this.children =[ new SubCategory(data)];
//     }
// }

export class Details{
   
   name = '';
   date = '';
   children = new SubCategory();

    constructor(data){
        if(data){
        this.name = data.parent.name;
        this.date = data.parent.date;
        this.children = data.children.map((item) => {
            return new SubCategory(item);
        })
    }
}
}