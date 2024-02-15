


// *tostring()

// let r = numbers.toString();
// console.log(r , typeof r); // 1,2,3,4,5,6,7,8,9,10

// *join()
// let r = numbers.join("-");
// console.log(r , typeof r); // 1 2 3 4 5 6 7 8 9 10


// *push()

// let r = numbers.push(11,12,13);
// // console.log(numbers)
// console.log(r , typeof r); 


// *pop()

// let r = numbers.pop();
// console.log(numbers)
// console.log(r)


// *shift()

// let r = numbers.shift();
// console.log(numbers);
// console.log(r);

// *unshift()

// let r = numbers.unshift(0);
// console.log(numbers);
// console.log(r);

// *concat()

// let r = numbers.concat([11,12,13]);
// console.log(r);


// *sort()

// function compare(a,b){
//     return b-a;
// }

// let newNum = [89,12,90,34,0];

// newNum.sort(compare);
// console.log(newNum);


const add = (a,b)=>{
    console.log(a+b);
}


// *forEach()


// let r = numbers.forEach((value)=>{
//         return 2*value;
// })

// console.log(r) // undefined undefined


// *map();

// let newArray = numbers.map((value)=>{
//     return value*2;
// })

// console.log("New Array",newArray);
// console.log("Actual Array",numbers);


// *filter();
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let greaterTHAN3 = numbers.filter((value , index ,array)=>{
//         return value >= 3;
// })

// console.log(greaterTHAN3);

// *reduce();


let adds = numbers.reduce((prev , curr)=>{
    return prev + curr;
})

console.log(adds);



