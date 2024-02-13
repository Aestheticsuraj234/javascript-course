
1. **push()**: Adds one or more elements to the end of an array and returns the new length of the array.

```javascript
const array = [1, 2, 3];
const newLength = array.push(4, 5);
console.log(array); // Output: [1, 2, 3, 4, 5]
console.log(newLength); // Output: 5
```

2. **pop()**: Removes the last element from an array and returns that element.

```javascript
const array = [1, 2, 3];
const lastElement = array.pop();
console.log(array); // Output: [1, 2]
console.log(lastElement); // Output: 3
```

3. **shift()**: Removes the first element from an array and returns that removed element.

```javascript
const array = [1, 2, 3];
const firstElement = array.shift();
console.log(array); // Output: [2, 3]
console.log(firstElement); // Output: 1
```

4. **unshift()**: Adds one or more elements to the beginning of an array and returns the new length of the array.

```javascript
const array = [2, 3];
const newLength = array.unshift(0, 1);
console.log(array); // Output: [0, 1, 2, 3]
console.log(newLength); // Output: 4
```

5. **concat()**: Returns a new array comprised of this array joined with other array(s) and/or value(s).

```javascript
const array1 = [1, 2];
const array2 = [3, 4];
const newArray = array1.concat(array2);
console.log(newArray); // Output: [1, 2, 3, 4]
```

6. **splice()**: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

```javascript
const array = [1, 2, 3, 4, 5];
const removedElements = array.splice(1, 2, 'a', 'b', 'c');
console.log(array); // Output: [1, 'a', 'b', 'c', 4, 5]
console.log(removedElements); // Output: [2, 3]
```

7. **slice()**: Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).

```javascript
const array = [1, 2, 3, 4, 5];
const newArray = array.slice(1, 4);
console.log(newArray); // Output: [2, 3, 4]
```

8. **forEach()**: Executes a provided function once for each array element.

```javascript
const array = [1, 2, 3];
array.forEach((element) => {
  console.log(element);
});
// Output:
// 1
// 2
// 3
```

9. **map()**: Creates a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
const array = [1, 2, 3];
const newArray = array.map((element) => {
  return element * 2;
});
console.log(newArray); // Output: [2, 4, 6]
```

10. **filter()**: Creates a new array with all elements that pass the test implemented by the provided function.

```javascript
const array = [1, 2, 3, 4, 5];
const newArray = array.filter((element) => {
  return element % 2 === 0;
});
console.log(newArray); // Output: [2, 4]
```

11. **reduce()**: Reduces an array to a single value by executing a provided function for each value of the array.

```javascript
const array = [1, 2, 3, 4, 5];
const sum = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)
```

These are some of the most important array methods in JavaScript, each serving its unique purpose in array manipulation and data transformation.