window.addEventListener("load",()=>{
   let todos = JSON.parse(localStorage.getItem("todos"))||[];

     const nameInput = document.getElementById("name");
     const newInputForm = document.querySelector("#new-todo-form")


     const username = localStorage.getItem("username") || " ";

     nameInput.value = username;

     nameInput.addEventListener("change",(e)=>{
        localStorage.setItem("username", e.target.value);
     })


     newInputForm.addEventListener("submit",(e)=>{
        e.preventDefault();

        let todo = {
            content: e.target.elements.content.value,
            category: e.target.elements.category.value,
            done: false,
            createdAt: new Date().getTime()
        }

        todos.push(todo);

        localStorage.setItem("todos", JSON.stringify(todos));

     })
})