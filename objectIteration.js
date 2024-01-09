const obj = {
    name : 'Irsa',
    age: 19,
    class: '12th',
    'spring flowers': ['Rose', 'Sunflower', 'Tulip', 'Murjan']
}

// two Ways
// 1- for in loop
// 2- Object.keys

// ----------------------------------------------for in loop----------------------------------------------
// for (let key in obj) {
//     console.log(key)   /* Print the keys*/
// }

// for(let key in obj) {
//     console.log(obj[key])      /* Prints the Values*/
// }

// for(let key in obj) {
//     console.log(key, ':' , obj[key])      /*Prints the key alue pairs */
// }      

// ----------------------------------------------Object.key-----------------------------------------------------

// console.log(Object.keys(obj[key]))





// -------------------------------------Computed values----------------------------------------

// if you want to add the values in the objects do below
// const key1 = 'objKey1'
// const key2 = 'objKey2'

// const value1 = 'objValue1'
// const value2 = 'objValue2'

// const obj2 = {
//     [key1] : value1,
//     [key2] : value2
// }

// obj2['mine hobbies'] = ['Mishikan', 'Value', 'Marry']

// console.log(obj2)