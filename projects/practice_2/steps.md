

Step 1: Retrieve Todo List Element✅
```javascript
const todoList = document.querySelector('#todo-list');
todoList.innerHTML = "";
```
- It retrieves the todo list element from the DOM using its ID `"todo-list"`.
- It clears the existing content of the todo list by setting its `innerHTML` to an empty string.

Step 2: Use defined  Todos from Local Storage✅
```javascript
 todos = JSON.parse(localStorage.getItem('todos')) || [];
```
- It retrieves the todos from `localStorage` using the key `"todos"`.
- If there are no todos stored in `localStorage`, it initializes an empty array.

Step 3: Iterate Through Todos✅
```javascript
todos.forEach((todo, index) => {
```
- It iterates over each todo in the `todos` array using the `forEach` method.
- It provides access to each todo object and its index within the array.

Step 4: Create Todo Item Container✅
```javascript
const todoItem = document.createElement('div');
todoItem.classList.add('todo-item');
```
- It creates a new `div` element to represent a todo item.
- It adds the CSS class `todo-item` to the todo item element.

Step 5: Create Todo Elements✅
```javascript
const label = document.createElement('label');
const input = document.createElement('input');
const span = document.createElement('span');
const content = document.createElement('div');
const actions = document.createElement('div');
const edit = document.createElement('button');
const deleteButton = document.createElement('button');
```
- It creates various HTML elements (`label`, `input`, `span`, `div`, `button`) to represent different parts of a todo item.

Step 6: Set Properties and Content for Todo Elements✅
```javascript
input.type = 'checkbox';
input.checked = todo.done;
span.classList.add('bubble');
```
- It sets the type and checked status of the checkbox input based on the todo's completion status.
- It adds the CSS class `bubble` to the span element.

Step 7: Add CSS Classes to Span Based on Category✅
```javascript
if (todo.category == 'personal') {
    span.classList.add('personal');
} else {
    span.classList.add('business');
}
```
- If the todo's category is `'personal'`, it adds the CSS class `personal` to the span element. Otherwise, it adds the CSS class `business`.

Step 8: Set Content and Inner HTML for Todo Elements
```javascript
content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
edit.innerHTML = 'Edit';
deleteButton.innerHTML = 'Delete';
```
- It sets the inner HTML content for the todo content div element to include an input field with the todo's content value. The input field is set to read-only initially.
- It sets the inner HTML content for the edit and delete buttons.

Step 9: Append Todo Elements to Todo Item Container✅
```javascript
label.appendChild(input);
label.appendChild(span);
actions.appendChild(edit);
actions.appendChild(deleteButton);
todoItem.appendChild(label);
todoItem.appendChild(content);
todoItem.appendChild(actions);
```
- It appends the created elements (`input`, `span`, `edit`, `deleteButton`) to their respective parent elements (`label`, `actions`, `todoItem`).

Step 10: Append Todo Item to Todo List✅
```javascript
todoList.appendChild(todoItem);
```
- It appends the todo item container to the todo list element.

Step 11: Toggle Todo Completion Status
```javascript
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
```
- It adds an event listener to the checkbox input to toggle the completion status of the todo.
- When the checkbox state changes, it updates the todo's `done` property and stores the updated todos in `localStorage`.
- It adds or removes the CSS class `done` to visually indicate the completion status of the todo item.
- It calls the `DisplayTodos` function to refresh the todo list UI.

Step 12: Enable Todo Item Editing
```javascript
edit.addEventListener('click', (e) => {
    const input = content.querySelector('input');
    input.removeAttribute('readonly');
    input.focus();
});
```
- It adds an event listener to the edit button to enable editing of the todo content.
- When the edit button is clicked, it removes the `readonly` attribute from the content input field and sets focus to it.

Step 13: Save Edited Todo Content
```javascript
content.querySelector('input').addEventListener('blur', (e) => {
    const inputValue = e.target.value;
    todos[index].content = inputValue;
    localStorage.setItem('todos', JSON.stringify(todos));
    DisplayTodos();
});
```
- It adds an event listener to the input field to save the edited todo content when focus is lost (on blur).
- When the input field loses focus, it updates the todo's content in the `todos` array and stores the updated todos in `localStorage`.
- It calls the `DisplayTodos` function to refresh the todo list UI.

Step 14: Delete Todo Item
```javascript
deleteButton.addEventListener('click', (e) => {
    const index = todos.indexOf(todo);
    if (index !== -1) {
        todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(todos));
        DisplayTodos();
        location.reload();
    }
});

```
- It adds an event listener to the delete button to delete the todo item.
- When the delete button is clicked, it removes the todo from the `todos` array, updates `localStorage`, refreshes the todo list UI, and reloads the page to reflect the changes.

This breakdown explains each part of the `DisplayTodos` function and its role in displaying, editing, and deleting todo items. Let me know if you have any further questions!