
// toString();
// let r = numbers.toString();

// console.log(typeof r)

// join();

// let r = numbers.join(' - ');
// console.log(typeof r);


// push();
// let r = numbers.push(6);

// console.log(numbers);


// pop();

// let r = numbers.pop();
// console.log(numbers);


// shift();

// let r = numbers.shift();
// console.log(numbers);


// unshift();

// let r = numbers.unshift(0);

// console.log(numbers);

// concat();

// let r  = numbers.concat([6, 7, 8, 9, 10]);

// console.log(r);



// sort();

// numbers.sort((a,b)=>b-a);
// console.log("After Sorting our Array🔥",numbers);


// forEach();

// numbers.forEach((values, index, arr) => {
    //     console.log(values * 2)
    // })
    
    
    // const array = [1, 2, 3];
    // const newArray = array.map((element) => {
    //   return element * 2;
    // });
    // console.log(newArray); 
    // // console.log(array)

//     const array = [1, 2, 3, 4, 5];
// const newArray = array.filter((element , ) => {
//   return element > 2;
// });
// console.log(newArray); 


const array = [1, 2, 3, 4, 5];
const sum = array.reduce((first, second ) => {
  return first + second;
});
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)