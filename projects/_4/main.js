const board = document.getElementById("game-board");


// game variables;
let snake = [{x:10,y:10}];
const GRID_SIZE = 20;
let food = generateFood();
let direction = "RIGHT";

console.log(board);

// draw
const draw = ()=>{
    board.innerHTML = "";
    drawSnake();
    drawFood();

}


// draw snake

const drawSnake=()=>{
snake.forEach((segment)=>{
    const snakeElement = createGameElement("div", "snake");
    setPosition(snakeElement, segment);
    board.appendChild(snakeElement);
})
}


// createGameELement Function

const createGameElement = (tag, className)=>{
    const element = document.createElement(tag);
       element.className = className;
    return element;
}

// setPosition

function setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}


// drawFood();

const  drawFood = ()=>{
    const foodElement = createGameElement("div", "food");
    setPosition(foodElement, food);
    board.appendChild(foodElement);
}

function generateFood() {
    const x = Math.floor(Math.random() * GRID_SIZE) + 1;
    const y = Math.floor(Math.random() * GRID_SIZE) + 1;
    return { x, y };
}



function move() {
    const head = { ...snake[0] };
    switch(direction){
        case "UP":
            head.y--;
            break;
        case "DOWN":
            head.y++;
            break;
        case "LEFT":
            head.x--;
            break;
        case "RIGHT":
            head.x++;
            break;

    }
    snake.unshift(head);
    snake.pop();
}
// 

setInterval(() => {
    move();
    draw();
}, 300);
