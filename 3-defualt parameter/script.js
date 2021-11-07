var getPrice = ()=>{
  return 5.99
}


console.log(typeof getPrice)
console.log( getPrice())

var getPriceF = function( count = 1 , tax ){
   return(count * 4.00 * (1+ tax))
}

var getNewPrice=(tax,count = 6)=> count * 4.00 * (1+ tax)
console.log( getNewPrice(2,0.07) )
console.log( getPriceF(5, 0.07) )

console.log( getNewPrice( 0.07 ))