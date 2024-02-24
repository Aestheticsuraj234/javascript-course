window.addEventListener("load", () => {
   todos = JSON.parse(localStorage.getItem("todos")) || [];

   const nameInput = document.getElementById("name");
   const newInputForm = document.querySelector("#new-todo-form")


   const username = localStorage.getItem("username") || " ";

   nameInput.value = username;

   nameInput.addEventListener("change", (e) => {
      localStorage.setItem("username", e.target.value);
   })


   newInputForm.addEventListener("submit", (e) => {
      e.preventDefault();

      let todo = {
         content: e.target.elements.content.value,
         category: e.target.elements.category.value,
         done: false,
         createdAt: new Date().getTime()
      }

      todos.push(todo);

      localStorage.setItem("todos", JSON.stringify(todos));

      e.target.reset();

      DisplayTodos();
   })

   DisplayTodos();

})


function DisplayTodos() {
   const todoList = document.querySelector('#todo-list');
   todoList.innerHTML = "";

   let todos = JSON.parse(localStorage.getItem('todos')) || [];

   todos.forEach((todo, index) => {
      const todoItem = document.createElement('div');
      todoItem.classList.add('todo-item');

      const label = document.createElement('label');
      const input = document.createElement('input');
      const span = document.createElement('span');
      const content = document.createElement('div');
      const actions = document.createElement('div');
      const edit = document.createElement('button');
      const deleteButton = document.createElement('button');

      input.type = 'checkbox';
      input.checked = todo.done;
      span.classList.add('bubble');
      if (todo.category == 'personal') {
         span.classList.add('personal');
      } else {
         span.classList.add('business');
      }


      content.classList.add('todo-content');
      actions.classList.add('actions');
      edit.classList.add('edit');
      deleteButton.classList.add('delete');

      content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
      edit.innerHTML = 'Edit';
      deleteButton.innerHTML = 'Delete';

      label.appendChild(input);
      label.appendChild(span);
      actions.appendChild(edit);
      actions.appendChild(deleteButton);
      todoItem.appendChild(label);
      todoItem.appendChild(content);
      todoItem.appendChild(actions);

      todoList.appendChild(todoItem);

      if (todo.done) {
         todoItem.classList.add('done');
     }


      input.addEventListener('change', (e) => {
         todo.done = e.target.checked;
         localStorage.setItem('todos', JSON.stringify(todos));
         if (todo.done) {
            todoItem.classList.add('done');
         } else {
            todoItem.classList.remove('done');
         }
         DisplayTodos();
      });


      edit.addEventListener('click', (e) => {
         const input = content.querySelector('input');
         input.removeAttribute('readonly');
         input.focus();

      })


      content.querySelector('input').addEventListener('blur', (e) => {
         const inputValue = e.target.value;
         todos[index].content = inputValue;
         localStorage.setItem('todos', JSON.stringify(todos));
         DisplayTodos();
      });



      deleteButton.addEventListener('click', (e) => {
         const index = todos.indexOf(todo);
         if (index !== -1) {
            todos.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
            DisplayTodos();
            location.reload();
         }
      });

   })
}