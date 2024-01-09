//  when you want to console a soecific value which is not present in the function but outside of the function , first it will search that value in that function if that value doesnt find in that function it will go into its lexical environment but if "value" is also not present in there it will go outside in the global lexical environment to find that value if it will present there it will console it othervise throw an error 


let value = 234;
const myApp = function(){
    const myfunc1 = () => {
        console.log('value of my func is', value)
    }
    myfunc1()
}

const declaration = myApp()
console.log(declaration)