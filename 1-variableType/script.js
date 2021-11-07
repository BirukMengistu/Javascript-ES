
let updateFun =[]
for(var i = 0 ; i<2 ; i++){
    updateFun.push(function(){
        return i
    })
}
console.log(updateFun[0]()) ;


// display 2

let updateFunc =[]
for(let i = 0 ; i<2 ; i++){
    updateFunc.push(function(){
        return i
    })
}
console.log(updateFunc[0]()) ;
// display 2

// const variavle use Cap
// used to define fuction ,  static value.
const MARK_pct =100;

console.log(MARK_pct)
if(MARK_pct <= 100)
{
    const MARK_pct =12
}

console.log(MARK_pct)
