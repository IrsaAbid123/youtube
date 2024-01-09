const obj = {
    name: 'Irsa',
    class: 12,
    params: [1, 2, 3, 4, 5]
};

function dist({ name, class: className, params }) {
    console.log(name);
    console.log(className);
    console.log(params);
}

dist(obj);
