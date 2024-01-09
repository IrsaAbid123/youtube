// -------------------------Function without arguments---------------------------
// function singASong(){
//     console.log('Happy birthday to you ............')
// }

// singASong()
// -------------------------------------Function with arguments-----------------------------------
// function addTwoNumbers(a, b){
//     return a + b
// }
// console.log(addTwoNumbers(1, 2))

// ------------------------------function that return even or odd acknwolagement---------------------------------

// function isEven(number){
//     return number % 2 === 0
// }

// const evenOrOddNumber = isEven(-2)
// console.log(evenOrOddNumber)

// -------------------------------function to get the targeted number's index----------------------------

 const getIndex = (arr2, target) =>{
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] === target) {
            return i
        }
    }
    return null
}

const arr2 = [1, 2, 3, 4, 5]
const targetedValue = getIndex(arr2, 5)
console.log(targetedValue)