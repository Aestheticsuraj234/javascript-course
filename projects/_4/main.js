const board = document.getElementById("game-board");
const instructionText = document.getElementById("instruction-text");
const logo = document.getElementById("logo");
let score = document.getElementById("score");
let highScoreText = document.getElementById("highScore");


// game variables;
let snake = [{ x: 10, y: 10 }];
const GRID_SIZE = 20;
let food = generateFood();
let direction = "RIGHT";
let GAME_SPEED_DELAY = 200;
let isGameStarted = false;
let gameInterval;
let highScore = 0;

console.log(board);

// draw
const draw = () => {
    board.innerHTML = "";
    drawSnake();
    drawFood();

}


// draw snake

const drawSnake = () => {
    snake.forEach((segment) => {
        const snakeElement = createGameElement("div", "snake");
        setPosition(snakeElement, segment);
        board.appendChild(snakeElement);
    })
}


// createGameELement Function

const createGameElement = (tag, className) => {
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

const drawFood = () => {
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
    switch (direction) {
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
    if (head.x === food.x && head.y === food.y) {
        food = generateFood();
        increaseSpeed();

    }
    else {

        snake.pop();
    }

}

// startGame
function startGame() {
    isGameStarted = true;
    instructionText.style.display = "none";
    logo.style.display = "none";
    gameInterval = setInterval(() => {
        move();
        checkCollision();
        updateScore();
        draw();
    }, GAME_SPEED_DELAY);
}



function increaseSpeed() {
    console.log(GAME_SPEED_DELAY);
    if (GAME_SPEED_DELAY > 150) {
        GAME_SPEED_DELAY -= 5;
    }
    else if (GAME_SPEED_DELAY > 100) {
        GAME_SPEED_DELAY -= 2;
    }
    else if (GAME_SPEED_DELAY > 50) {
        GAME_SPEED_DELAY -= 1;
    }
    else if (GAME_SPEED_DELAY > 25) {
        GAME_SPEED_DELAY -= 0.5;
    }
}


// setInterval(() => {
//     move();
//     draw();
// }, 300);


// Handling Key Presses:


function handleKeyPress(event) {
    if (!isGameStarted && (event.code === "Space" || event.key === " ")) {
        startGame();
    }
    else {
        switch (event.key) {
            case "ArrowUp":
                direction = "UP";
                break;

            case "ArrowDown":
                direction = "DOWN";
                break;

            case "ArrowLeft":
                direction = "LEFT";
                break;

            case "ArrowRight":
                direction = "RIGHT";
                break;


        }
    }
}


// TEST
// checkCollision
function checkCollision() {
    const head = snake[0];
    if (head.x < 1 || head.x > GRID_SIZE || head.y < 1 || head.y > GRID_SIZE) {
        resetGame();
    }

    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            resetGame();
            break;
        }
    }


}

function resetGame() {
    updateHighScore();
    stopGame();
    snake = [{ x: 10, y: 10 }];
    food = generateFood();
    direction = "RIGHT";
    GAME_SPEED_DELAY = 200;
    updateScore();
}


function updateScore() {
    const currentScore = snake.length - 1;
    score.textContent = currentScore.toString().padStart(3, "0");
    console.log("CURRENT_SCORE:",currentScore);


}

function stopGame() {
    clearInterval(gameInterval)
    isGameStarted = false;
    instructionText.style.display = "block";
    logo.style.display = "block";

}


function updateHighScore() {
    const currentScore = snake.length - 1
    if (currentScore > highScore) {
        highScore = currentScore
        highScoreText.textContent = highScore.toString().padStart(3, "0");
    }
    highScoreText.style.display = "block";

}


document.addEventListener("keydown", handleKeyPress);

