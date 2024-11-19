
import Board from '../components/Board'
import { StyleSheet, Text, View } from 'react-native'
import { useBoard } from './hooks/useBoard'
import { COLOR1, FONTS, SIZES } from '../utils/constants'
import { useSelector } from 'react-redux'

const GameVsPerson = () => {
  const { color } = useSelector((state) => state)
  const { board, handleCellPress, currentPlayer, showWinner } = useBoard()

  return (
    <View style={styles.container}>
      {
        showWinner && (
          <View>
            <Text style={styles.textWinner}>¡¡¡Winner!!!</Text>
          </View>
        )
      }
      <View>
        <Text style={{ ...styles.text, color: color.headLine }}>
          Turno de: <Text style={styles.textTurn}>{currentPlayer}</Text>
        </Text>
      </View>
      <Board board={board} onPress={handleCellPress} winner={showWinner} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: FONTS.spaceMono,
    fontSize: SIZES.xxLarge
  },
  textTurn: {
    fontFamily: FONTS.magro,
    color: COLOR1.secundary
  },
  textWinner: {
    fontFamily: FONTS.magro,
    color: COLOR1.highLight,
    fontSize: 60
  }
})

export default GameVsPerson
