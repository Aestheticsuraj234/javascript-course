const myObj = {
    name: 'John',
    age: 30,
    cars: {
        car1: 'Ford',
        car2: 'BMW',
        car3: 'Fiat'
    }

}

let str = JSON.stringify(myObj);
console.log(str);

let myJson = `{"name":"john","age":30,"cars":{"car1":"Ford","car2":"BMW","car3":"Fiat"}}`
let obj = JSON.parse(myJson);

console.log(obj);

const res = fetch("/data.json");
