//Stack[primitivee], Heap[non primitive]

let myBoyfriendname = "Chen Feiyu"

let anothername = myBoyfriendname

anothername = "Mingyu"

console.log(myBoyfriendname);
console.log(anothername)


let bfOne = {
    name: "Feiyu",
    age: 24
}
let bfTwo = bfOne
bfTwo.age = 27

console.log(bfOne.age)
console.log(bfTwo.age)