let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');

function makeMove(index) {
  if (!cells[index].textContent) {
    cells[index].textContent = currentPlayer;
    if (checkWin()) {
      alert(`${currentPlayer} wins!`);
      resetGame();
      return;
    }
    if (checkDraw()) {
      alert('It\'s a draw!');
      resetGame();
      return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWin() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let line of lines) {
    if (
      cells[line[0]].textContent &&
      cells[line[0]].textContent === cells[line[1]].textContent &&
      cells[line[0]].textContent === cells[line[2]].textContent
    ) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return [...cells].every(cell => cell.textContent !== '');
}

function resetGame() {
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
}
