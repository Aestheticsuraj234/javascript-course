### Definition:
In JavaScript, an array is a data structure that allows you to store multiple values in a single variable. These values can be of any data type, including numbers, strings, objects, or even other arrays. Arrays in JavaScript are zero-indexed, meaning the first element is accessed with an index of 0, the second with an index of 1, and so on.

### Examples:
1. **Creating an Array:**
   ```javascript
   let fruits = ['apple', 'banana', 'orange'];
   ```

2. **Accessing Array Elements:**
   ```javascript
   console.log(fruits[0]); // Output: 'apple'
   console.log(fruits[1]); // Output: 'banana'
   ```

3. **Modifying Array Elements:**
   ```javascript
   fruits[2] = 'grape';
   console.log(fruits); // Output: ['apple', 'banana', 'grape']
   ```

4. **Array with Mixed Data Types:**
   ```javascript
   let mixedArray = ['apple', 3.14, true];
   ```

### typeof Some Question:
When you use the `typeof` operator on an array in JavaScript, it returns `'object'`. This is because arrays are a type of object in JavaScript. However, you can differentiate arrays from other objects using `Array.isArray()` method.
```javascript
console.log(typeof fruits); // Output: 'object'
console.log(Array.isArray(fruits)); // Output: true
```

### Length:
The `length` property of an array in JavaScript returns the number of elements in that array.
```javascript
console.log(fruits.length); // Output: 3
```
Keep in mind that `length` returns the highest index of the array plus one, rather than the number of elements. This can lead to confusion if you have gaps in your array or if you manually set the length property to a value that's lower than the actual number of elements.