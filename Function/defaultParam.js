// -------------------------------default parameters-------------------------------

// Old way of setting the default value of the parameter
// const myApp = function (a, b) {
//     if (typeof b === 'undefined') {
//         b = 1
//     }
//     return a + b
// }

// const declaration = myApp(1)
// console.log(declaration)


// new Way
// const myApp = function (a, b = 1) {
//     return a + b
// }

// const declaration = myApp(1, 10)
// console.log(declaration)