let price =4.5 , quantity = 30;
let   productName = 'car ' , filed ='dynamicField'

const productView = {
  price,
  [filed + '-001']:productName,
  productName ,
  quantity,
  "ToString"(){
    return  'Name product' + this.productName + ( this.price * this.quantity);
  }
};
var ident = 'productID'
const productNewView = {
  get[ident](){ return true; },

  set [ident](value){
  
  }
}

console.log( productNewView.productID)

productView.Total = function() {
  return this.price * this.quantity;
}
console.log(typeof productView)
console.log( productView)
console.log( productView.price)
console.log( productView.price)

console.log( productView["ToString"]())
console.log( productView.Total())