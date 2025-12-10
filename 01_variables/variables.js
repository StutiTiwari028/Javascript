const accId=34567
let firstName="stuti"
let email="abc@google.com"
var password="12345"
city="Lucknow"

firstName="Sheetal"
email="stuti@gmail.com"
password="998976"
city="Delhi"

console.log([accId,firstName,email,password,city])
console.table([accId,firstName,email,password,city])

let State;
console.log(State); //undefined

/* var shouldn't be used, Variables declared with var are function-scoped. value is mutable whereas let is block scoped, Variable defined in a block (like for loop) is only accessible in that block.*/