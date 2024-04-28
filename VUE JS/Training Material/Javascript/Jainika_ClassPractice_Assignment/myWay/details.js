import { SubCategory } from "./categories.js";

export class Details{
    name = '';
    date = '';
    children = [];

    constructor(data){
        this.name = data.name;
        this.date = data.date;
        this.children = [ new SubCategory(data) ];
    }
}