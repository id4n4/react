import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { FONTS } from '../utils/constants'

const Board = ({ board, onPress, winner }) => {
  const { color } = useSelector((state) => state)
  return (
    <View style={styles.container}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <TouchableOpacity
              key={colIndex}
              style={styles.cell}
              onPress={() => onPress(rowIndex, colIndex)}
              disabled={cell !== '' || winner}
            >
              <Text
                style={{
                  ...styles.cellText,
                  color: cell === 'X' ? color.headLine : color.highLight,
                  fontFamily: FONTS.magro
                }}
              >{cell}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  row: {
    flexDirection: 'row'
  },
  cell: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cellText: {
    fontSize: 48,
    fontWeight: 'bold',
    fontFamily: FONTS.magro
  }
})

export default Board
