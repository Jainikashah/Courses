export class SubCategory{
    subCategoryName = '';
    subName = '';
    price = '';
    qty = '';

    constructor(data){
        if(data){
        this.subCategoryName = data.subCategoryName;
        this.subName = data.subName;
        this.price = data.subPrice;
        this.qty = data.qty;
        }
    }
}