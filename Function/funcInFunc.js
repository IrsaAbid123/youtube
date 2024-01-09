const myFunc = function () {
    const helloWorld = () => console.log('hello world!!!!')

    const add = (a, b) => {
        return a + b
    }

    const mul = function (a, b) {
        return a * b
    }
    helloWorld()
    console.log(add(1, 2))
    console.log(mul(1, 2))
}

const declaration = myFunc()
console.log(declaration)