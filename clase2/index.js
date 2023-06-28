const result = 2**3 //Math.pow(2, 3)

// console.log({ result })

const names = ['Santiago', '  Manuel  ', ' Juan', 'Diego ', 'Franco ', ' fatima', 'Iram']

const myName = 'Iram'

/*const newNames = []

for (let i = 0; i <= names.length - 1; i++) {
  const name = names[i].toLowerCase()
  newNames.push(name)
}*/

const newNames = names.map((el) => el.toLowerCase().trim())

console.log(newNames)

const filteredNames = names
  .map((el) => el.toLowerCase())
  .filter(el => el[0] === 'f')

const exists = names.includes(myName)

// fconsole.log({ newNames, filteredNames, exists })

// ES8

const user = {
  name: 'Iram',
  lastname: 'Gutiérrez',
  country: 'MX',
  edad: 34
}

const entries = Object.entries(user)
const keys = Object.keys(user)
const values = Object.values(user)

//console.log({ entries, keys, values })

/**
 * 

[
    [ 'name', 'Iram' ],
    [ 'lastname', 'Gutiérrez' ],
    [ 'country', 'MX' ],
    [ 'edad', 34 ]
]

 */

const output = entries.reduce((output, el) => {
  output += `${el[0]}: ${el[1]}
  `
  return output
}, '')

//console.log(output)

// suma

const nums = [1, 2, 3, 4, 5]

const resultado = nums.reduce((acc ,el) => {
  console.log(el)

  acc = acc + el // 0 + 1 = 1 // 1 + 2 = 3 // 3 +3 = 6 // 6 +4 = 10 // 10 +5 = 15

  return acc // 1 // 3 // 6 // 10 // 15
}, 0)

// console.log({ resultado })

const user2 = {
  name: 'Iram',
  lastname: 'Gutiérrez',
  country: 'MX',
  edad: 34
}

//const name = user2.name
//const country = user2.country

const { name, country } = user2

const { edad, ...newUser } = user2

console.log(edad, newUser)

const userA = {
  name: 'Iram',
  lastname: 'Gutiérrez'
}

const userB = { ...userA }

userB.name = 'Diego'

console.log({ userA, userB })

const arr = [
  [1, 3, 5, 7],
  [4, 5, 7, 8, 9]
]

const arr2 = arr.flat()

console.log({ arr, arr2 })

/**
 * 
 
??
||
&&

 */

const iram = {
  
}

const username = '' || 'Anonimo'

const saldo_default = 20

const saldo = iram.saldo ?? saldo_default

console.log({ saldo })


const name2 = true && false && 'Carlos'

console.log(name2)




