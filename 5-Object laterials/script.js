var getPrice = ()=>{
  return 5.99
}


console.log(typeof getPrice)
console.log( getPrice())

var getPriceF = function(count, tax ){
   return(count * 4.00 * (1+ tax))
}

var getNewPrice =(count ,tax)=> count * 4.00 * (1+ tax)
console.log( getNewPrice(2,0.07))
console.log( getPriceF(2,0.07))