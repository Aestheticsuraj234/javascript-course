
# Loops (for, while)

Loops are fundamental control structures in programming that allow repetitive execution of a block of code. They are particularly useful when you need to perform a task multiple times or iterate over a collection of data.

## Introduction to Loops:

Loops provide a way to execute a block of code repeatedly until a certain condition is met. They help in reducing redundancy and writing more efficient code by automating repetitive tasks.

## Syntax and Usage of `for` Loops:

The `for` loop is commonly used for iterating over a fixed range of values. Its syntax consists of three parts: initialization, condition, and iteration.

```javascript
for (initialization; condition; iteration) {
    // code to be executed
}
```

Example:
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

## Syntax and Usage of `while` Loops:

The `while` loop is used for indefinite iteration, meaning it continues to execute as long as the specified condition is true.

```javascript
while (condition) {
    // code to be executed
}
```

Example:
```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

## Loop Control Statements:

- `break`: Terminates the loop prematurely when a certain condition is met.
- `continue`: Skips the current iteration and proceeds to the next iteration of the loop.

### Practical Exercise:

#### JavaScript Program using `for` Loop:

Write a JavaScript program that uses a `for` loop to iterate through an array and perform specific actions on each element.

```javascript
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2); // Example: Multiply each element by 2
}
```

#### Implementing a `while` Loop:

Write a JavaScript program that uses a `while` loop to simulate a simple counting scenario.

```javascript
let count = 0;

while (count < 5) {
    console.log(count);
    count++;
}

```
These exercises demonstrate the practical application of `for` and `while` loops in JavaScript.
```
