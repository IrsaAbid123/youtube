//  -------------------------------how to spread an object OR Spread operator----------------------------------
const obj1 = {
    name: 'Irsa',
    class: 12,
    age: 19
}

const obj2 = {
    name: 'Irsa2',
    class: 13,
    age: 20
}

const newArray = [...obj1, ...obj2]

console.log(newArray)