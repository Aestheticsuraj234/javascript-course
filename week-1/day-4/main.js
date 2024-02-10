// *what is function?*
// !A function is a block of code that can be called and executed at any time.

// *How to create a function?*
//? function xyz()
//? {
//?     console.log("My name is Suraj😎")

//? }

//? xyz();

// *What is Parameter and Argument?

function AddTwoNumbers(number1 , number2) 
{

    console.log("This is not going to be printed");
   return number1 + number2;

}

// let sum = AddTwoNumbers(199,100);

// console.log(sum);

// *What is Scopes in JavaScript?

//? Global Scope ( var);
// {
//     var name = "Suraj";
//     console.log(name);

// }

// console.log(name);


//? Local Scope (let, const);

// {
//     const name = "Suraj";
//     console.log(name);
// }

// console.log(name);

let number = 20;
number = 30;

console.log(number);    