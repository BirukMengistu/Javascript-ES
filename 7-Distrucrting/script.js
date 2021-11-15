var getPrice = [300,450, 500]


let salery = {
  low:300, 
  average: 500,
  high: 600
}
//array destructing
let [lowsalery, averageSalery , highSalery]= getPrice;
//


let {low:newLow, average: newAversge , high:newHigh} =  salery

let lowS, averageS , highS;
   ({ low: lowS, average: averageS, high: highS} = salery)

console.log(newAversge);
console.log(lowS);
