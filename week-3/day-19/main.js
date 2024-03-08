// // var age = 20;

// if(age>18)
// {
//     const a = 10;
//     console.log("You are eligible to vote")
// }

// console.log(a);

// let name="Suraj";
// name="Raj";
// console.log(name)

// const age=20;
// age=18;
// console.log(age)

// classic way of defining the function;

// function add(a, b) {
//     return a + b;
// }

// // anonymous function
// var add = function (a, b) {
//     return a + b;
// }

// // arrow functions

// const Add = (a,b)=>{
//     console.log(a+b);
// }


// const add = (a, b) => a + b ;

// const square = x => x * x;


// *Destructuring

// 1. Array Destructuring
// const arr = [1, 2, 3, 4, 5 , 8,9,10];





// const [a, b, c, d, e , f,g,h, other] =arr;



// console.log(a, b, c, d, e , f , g , h , other);



// 2. Object Destructuring

// const person = { name: 'John', age: 30 };

// console.log(person.name, person.age)

// const {age,name} =person
// console.log(name,age)



// **Spread Operator:**

// const numbers = [1, 2, 3];
// const newNumbers = [...numbers,4,5,6,7,8,9,10];


// console.log(newNumbers);


// const obj1 = { foo: 'bar' , x: 42};
// const obj2 = {
//     ...obj1,
//     name:"Suraj",
//     age:20
// }

// console.log(obj2);


// **Rest Parameter**

// const sum = (number1 , number2 , number3,...others) => {
//     return number1 + number2 + number3 + others.reduce((acc,curr)=>acc+curr,0);
// }

// console.log(sum(1,2,3,4,5,6,7,8,9,10));

const PrintNames = (...names)=>{
    console.log(names)
}

PrintNames("Suraj","Raj","Rahul","Rohit","Rohan","Rajesh","Ramesh");