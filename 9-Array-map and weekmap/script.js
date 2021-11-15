// Module basics
// named exports
// classes
// extenses and super
//constructor function propperties
//static members and new.target


let employee1 = { nmae: 'Jaket'}
let employee2 = { nmae: 'Janet'}

let employees = new Map();
employees.set(employee1, 'ABC');
employees.set(employee2, '123');


let arr= [
    [employee1, 'ABC'],
    [employee2, '123']
]

let list = [...employees.values()]

let newEmployees = new Map(arr)
console.log(employees.size)
console.log(newEmployees.size)
console.log(list)

console.log(list[0])




