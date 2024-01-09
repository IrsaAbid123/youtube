const obj = {
    name : 'Irsa',
    age: 19,
    class: '12th'
}

console.log(obj.name)
console.log(obj.age)

// ---------------------------------------how to add the property in an abject-----------------------------
obj.gender = 'female'
console.log(obj)

// ----------difference between dot and bracket notation ----------------------------------
// 1- when you have a key with space in it an enclosed in string you have yo use bracket notation- 
const key = 'emmail';
const obj2 = {
    name : 'Irsa',
    class: 12,
    ' my hobbies' : ['Painting', 'Crafting', 'Journalization']
}
console.log(obj2[' my hobbies'])

// 2- when you want to add a key in the object from a variable
 
obj2.key = 'jdhkjfe@gmail.com'
console.log(obj2)    /*result object doesnt have the key as email but it add 'kry' as a key*/

obj2[key] = 'sjkdhf@gmail.com'
console.log(obj2)