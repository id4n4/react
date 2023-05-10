import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { counterStyles } from '../utils/styles/counterStyle'
import { btnStyles } from '../utils/styles/button'
import { useCounter } from '../../app/Provider'

export const ItemCounter = ({ id, title, value }) => {
  const { removeCounter, decrease, reset, increase } = useCounter()
  return (
    <View style={counterStyles.container}>
      {/* Close button */}
      <View style={counterStyles.containerClose}>
        <TouchableOpacity
          style={btnStyles.close}
          onPress={() => removeCounter(id)}
        >
          <Text style={counterStyles.whiteText}>Cerrar</Text>
        </TouchableOpacity>
      </View>

      {/* Title and value */}
      <Text style={counterStyles.title}>{title}</Text>
      <Text style={counterStyles.value}>{value}</Text>

      {/* Btn increase, reset and decrease */}
      <View style={counterStyles.containerBtn}>
        <TouchableOpacity
          style={btnStyles.decrease}
          onPress={() => decrease(id)}
        >
          <Text style={counterStyles.whiteText}>Decrementar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={btnStyles.reset}
          onPress={() => reset(id)}
        >
          <Text>reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={btnStyles.increase}
          onPress={() => increase(id)}
        >
          <Text style={counterStyles.whiteText}>Incrementar</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}
