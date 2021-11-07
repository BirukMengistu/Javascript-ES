let codes ='ABCDFE'
let count = 0
//(``)

for(var code of codes){
  count++
}

var caterories =[ 'hardware', 'software' , 'vaporware']

for(var item of caterories){
  console.log(item)
}


var caterories1 =[ , , ,]

for(var item of caterories1){
  console.log(item)
}

let message = '1345'

console.log(`message : ${message}`)

function showMessage(message){
  let messageId ='1234-dr'
    console.log(`messageId : ${messageId} message : ${message}`)
}

function showNewMessage(segment , ...values){

   console.log(segment)
   console.log(values)
 
   
}

let segment = 'Hello Bob'
let amount ='2000'
showNewMessage `Invoice : ${message} for ${amount}`;

showMessage('Hello')
console.log(caterories1.length)
console.log(caterories.length)
console.log(typeof codes)
console.log(count)