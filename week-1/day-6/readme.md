

1. **toString()**: Converts an array to a string representing the array and its elements.

```javascript
const array = [1, 2, 3];
const arrayAsString = array.toString();
console.log(arrayAsString); // Output: "1,2,3"
```

2. **join()**: Joins all elements of an array into a string, optionally specifying a separator.

```javascript
const array = [1, 2, 3];
const joinedString = array.join('-');
console.log(joinedString); // Output: "1-2-3"
```


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





7. **sort()**: Sorts the elements of an array in place and returns the sorted array.

```javascript
const array = [5, 2, 8, 1, 4];
array.sort();
console.log(array); // Output: [1, 2, 4, 5, 8]
```

In this example, the `sort()` method sorts the elements of the `array` in ascending order. By default, the `sort()` method sorts elements as strings. To sort elements in numeric order, you can provide a compare function as an argument to `sort()`:

```javascript
const array = [5, 2, 8, 1, 4];
array.sort((a, b) => a - b);
console.log(array); // Output: [1, 2, 4, 5, 8]
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
