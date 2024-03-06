// const promise_1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve()
//     }, 2000)
// })

// // then()= resolve
// // catch()= reject
// // promise_1.then().catch()

// promise_1.then(() => {
//     console.log("Promise is resolved")
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve()
//     }, 2000)
// }).then(()=>{
//     console.log("Promise2 is resolved")
// })

// const promise_3 = new Promise((resolve, reject) => {
//     let AGE = 10;

//     if (AGE >= 18) {
//         resolve()
//     }
//     else {
//         reject()
//     }

// })


// promise_3.then(()=>{
//     console.log("You are eligible to vote")
// }).catch(()=>{
//     console.log("You are not eligible to vote")
// })


// const promise_4 = new Promise((resolve, reject) => {
//     let AGE = 20;

//     if (AGE >= 18) {
//         resolve("You are eligible to vote")
//     }
//     else {
//         reject("You are not eligible to vote")
//     }

// })


// promise_4.then((value) => {
//     console.log(value)


// }).catch((error) => {
//     console.log(error)

// })



// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.5) {
//                 resolve("Data fetched successfully!");
//             } else {
//                 reject(new Error("Failed to fetch data"));
//             }
//         }, 1000);
//     });
// }

// fetchData().then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.error(error)
// })


// fetch("https://api.github.com/users/Aestheticsuraj234").then((value) => {
//     return value.json()
// }).then((data) => {
//     console.log(data)

// }).catch((err) => {
//     console.error(err)
// }).finally(() => {
//     console.log("Finally block")
// })

async function GetData(){
    try {
        const response = await fetch("https://api.github.com/users/Aestheticsuraj234");
        const data = await response.json();
        console.log(data)
        
    } catch (error) {
        console.error(error)
    }

    finally{
        console.log("Finally block")
    }

}

GetData()