import { useState } from 'react'

const winningConditions = [
  // Filas
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],
  // Columnas
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],
  // Diagonales
  [[0, 0], [1, 1], [2, 2]],
  [[0, 2], [1, 1], [2, 0]]
]

export const useBoard = () => {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ])

  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [showWinner, setShowWinner] = useState(false)

  const handleCellPress = (row, col) => {
    if (board[row][col] === '') {
      const newBoard = [...board]
      newBoard[row][col] = currentPlayer
      setBoard(newBoard)
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')

      checkWinner()
    }
  }
  const checkWinner = () => {
    for (const condition of winningConditions) {
      const [a, b, c] = condition
      const [rowA, colA] = a
      const [rowB, colB] = b
      const [rowC, colC] = c

      if (
        board[rowA][colA] !== '' &&
      board[rowA][colA] === board[rowB][colB] &&
      board[rowA][colA] === board[rowC][colC]
      ) {
        const winner = board[rowA][colA]
        setShowWinner(true)
        console.log(`El ganador es ${winner}`)
      }
    }
  }
  return {
    board,
    currentPlayer,
    handleCellPress,
    showWinner
  }
}
