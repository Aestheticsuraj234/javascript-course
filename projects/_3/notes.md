Certainly! Here's the step-by-step breakdown of the provided JavaScript code with accompanying code snippets:

1. **Variable Initialization**:
   ```javascript
   const statusDisplay = document.querySelector('.game--status');
   let gameActive = true;
   let currentPlayer = "X";
   let gameState = ["", "", "", "", "", "", "", "", ""];
   ```

2. **Message Functions**:
   ```javascript
   const winningMessage = () => `Player ${currentPlayer} has won!`;
   const drawMessage = () => `Game ended in a draw!`;
   const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
   ```

3. **Setting Initial Status Display**:
   ```javascript
   statusDisplay.innerHTML = currentPlayerTurn();
   ```

4. **Winning Conditions**:
   ```javascript
   const winningConditions = [
       [0, 1, 2],
       [3, 4, 5],
       [6, 7, 8],
       [0, 3, 6],
       [1, 4, 7],
       [2, 5, 8],
       [0, 4, 8],
       [2, 4, 6]
   ];
   ```

5. **Function to Handle Cell Played** (`handleCellPlayed`):
   ```javascript
   function handleCellPlayed(clickedCell, clickedCellIndex) {
       gameState[clickedCellIndex] = currentPlayer;
       clickedCell.innerHTML = currentPlayer;
   }
   ```

6. **Function to Handle Player Change** (`handlePlayerChange`):
   ```javascript
   function handlePlayerChange() {
       currentPlayer = currentPlayer === "X" ? "O" : "X";
       statusDisplay.innerHTML = currentPlayerTurn();
   }
   ```

7. **Function to Handle Result Validation** (`handleResultValidation`):
   ```javascript
   function handleResultValidation() {
       let roundWon = false;
       for(let i = 0; i <= 7; i++) {
           const winCondition = winningConditions[i];
           const a = gameState[winCondition[0]];
           const b = gameState[winCondition[1]];
           const c = gameState[winCondition[2]];
           if(a === '' || b === '' || c === '')
               continue;
           if(a === b && b === c) {
               roundWon = true;
               break
           }
       }

       if(roundWon) {
           statusDisplay.innerHTML = winningMessage();
           gameActive = false;
           return;
       }

       const roundDraw = !gameState.includes("");
       if(roundDraw) {
           statusDisplay.innerHTML = drawMessage();
           gameActive = false;
           return;
       }

       handlePlayerChange();
   }
   ```

8. **Function to Handle Cell Click** (`handleCellClick`):
   ```javascript
   function handleCellClick(clickedCellEvent) {
       const clickedCell = clickedCellEvent.target;
       const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

       if(gameState[clickedCellIndex] !== "" || !gameActive)
           return;

       handleCellPlayed(clickedCell, clickedCellIndex);
       handleResultValidation();
   }
   ```

9. **Function to Restart Game** (`handleRestartGame`):
   ```javascript
   function handleRestartGame() {
       gameActive = true;
       currentPlayer = "X";
       gameState = ["", "", "", "", "", "", "", "", ""];
       statusDisplay.innerHTML = currentPlayerTurn();
       document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
   }
   ```

10. **Event Listeners**:
    ```javascript
    document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
    document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
    ```

This breakdown should help in understanding each part of the code and how they contribute to the functionality of the Tic-Tac-Toe game.