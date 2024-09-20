// primitives data types
// 7 types: string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.8
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('567')
const anotherId = Symbol('567')

console.log(id===anotherId)

const bigNumber = 679063534n


// Reference type: {Non Primitive} = Arrays, Objects, Functions

const heroes = ["Mingyu", "Jun"]
let user = {
    name: "Chen Feiyu",
    age : 24,
}
const myFunction = function(){
    console.log("Sisam")
}

console.log(typeof myFunction)