'strict mode';

var getProduct = ( productId , ...catagories)=>{
  console.log(catagories);
  console.log(productId);
 // console.log( arguments.length)
}

getProduct(01, 'car' , 20345);



var showProduct = new Function("...catagorie", "return catagorie");
console.log(showProduct('search', 'adversise'));


var price = [12,20,18,3, 45, 3, 3]
var maxPrice = Math.max(...price)
var minPrice = Math.min(...price)
console.log('Max price ', maxPrice)
console.log('Min price ', minPrice)

var maxDigit = Math.max(...'3427356')

console.log('Min price ', maxDigit)
