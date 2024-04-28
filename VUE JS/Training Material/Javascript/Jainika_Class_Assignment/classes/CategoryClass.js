export class SubCategory{
  subName = "";
  price = "";
  qty = "";

  constructor(data){
    this.subName = data.subName;
    this.price = data.subPrice;
    this.qty = data.qty;
  }
}