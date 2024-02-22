// // // console.log("Hello world")
// let btn_1 = document.querySelector("#btn_1");


// // btn_1.onclick = function() {
// //     console.log("Hello world")
// // }

// // btn_1.onclick = function() {
// //     console.log("Hello world_2")
// // }

// // let selectedDiv = document.querySelector(".container");

// // selectedDiv.onmouseover = function() {
// //     // wanted to change the background color of the div
// //     selectedDiv.style.backgroundColor = "red";
// // };



// btn_1.addEventListener("mouseover" , (evt)=>{

//     console.log(evt);
    
//     alert("Hello world")
// })

// *#############################__Dark-Mode__toggle_####################################

let body = document.querySelector("body");
let mode = "dark";
let toggle_button = document.querySelector("#toggle_button");


// toggle_button.addEventListener("click",(e)=>{
//     // if the mode is dark 
//     if(mode === "dark")
//     {
//         body.style.backgroundColor = "white";
//         body.style.color = "black";
//         mode = "light";
//     }
//     else{
//         body.style.backgroundColor = "black";
//         body.style.color = "white";
//         mode = "dark";
//     }
//     // else mode light

// })



toggle_button.addEventListener("click",(e)=>{
    if(mode==="dark")
    {
      
        body.classList.add("light");
        body.classList.remove("dark");
        mode = "light";

    }
    else{
        body.classList.add("dark");
        body.classList.remove("light");
        mode = "dark";
    }
})