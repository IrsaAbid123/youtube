// ---------------------------Function Returning Functions---------------------------

function myApp(){
    function hello(){
        console.log('hello world')
    }
    return hello
}

const ans = myApp()
console.log(ans())

console.log(ans)

