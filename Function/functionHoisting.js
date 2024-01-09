// ----------------------------------We can also involke the function before and after making a function
//                                           in just the function declaration case is called '''hosting'''------------------------
singASong()
function singASong() {
    console.log('Happy birthday to you ............')
}
singASong()

// --------We cannot do the same thing in the case of function expression and also not in the case of arrow function
//            -----------------------------------Will Throw an error--------------------------------

singASong()    /* function expression */
var singASong = function() {
        console.log('Happy birthday to you ............')
    }
    singASong()


singASong()   /* Arrow function */
const  singASong = () => {
        console.log('Happy birthday to you ............')
    }
    singASong()