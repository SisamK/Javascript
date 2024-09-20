const babe = "Mingyu"
const loveCount = 100

console.log(`hello my love is ${babe} and I love him ${loveCount}`)


const dramaName = new String(` Immorality1 `)

console.log(dramaName.__proto__)
console.log(dramaName.length)
console.log(dramaName.toUpperCase())
console.log(dramaName.indexOf('o'))

const newString = dramaName.substring(0,4)
console.log(newString)

const anotherString = dramaName.slice(-2, 5)

console.log(anotherString)

const sliceString = dramaName.trim()
console.log(sliceString)