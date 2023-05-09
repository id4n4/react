import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const Main = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
      <TouchableOpacity style={theStyles.button}>
        <Text> Agregar Counter </Text>
      </TouchableOpacity>
    </View>
  )
}

const theStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
})
