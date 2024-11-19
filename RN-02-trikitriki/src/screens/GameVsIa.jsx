import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Board from '../components/Board'

const GameVsIa = () => {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ])

  const [currentPlayer, setCurrentPlayer] = useState('X')

  const handleCellPress = (row, col) => {
    if (board[row][col] === '') {
      const newBoard = [...board]
      newBoard[row][col] = currentPlayer
      setBoard(newBoard)
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }
  }

  return (
    <View style={styles.container}>
      <Board board={board} onPress={handleCellPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default GameVsIa
