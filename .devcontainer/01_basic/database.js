// console.log("hello")

// data type in javascript
// two type of datatype
// primitive & non primitive
// example of primitive = > string,  boolean, number, symbol, Null, undefine, bigint,
let describtion = "ram"
let isAggree = true
let score= 213
let srr = null
let ewr= undefined
let bigNumbere = 231423423412341324n

// console.log(typeof (ewr))

let id = Symbol('123')
let sameId = Symbol('123')

// console.log(id===sameId)


// non primitvie
// example => array, object, function

let stuudentArrya= ["ram", "shyam", "horman","kisley"]

let permanet= {
    "name": "surendra",
    "class" : 12,
    "blod Group" : "O+",
    "Address" : "gautam nagar gangjala ward no 16"
}

// console.table(typeof[bigNumbere])
// console.table(typeof[stuudentArrya])

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// memory

// stick (primitive) & heap(non primitive)

let start = "surendra@gmail.com"

let secnd = start

secnd = "suman@gmail.com"

// console.log(start)
// console.log(secnd)


let userId ={

    name :'surendra',
    email:'surendrs@gmail.com'
}

let userend = userId
userend.name= 'kumod'

// console.log(userId)
// console.log(userend)


// heap memory 


// ================================

let newName = new String('surendra')
console.log(newName.toUpperCase() )

let url = "https://www.google.com/search?q=chatgpt&oq"

console.log(url.replace('?q=','_'))