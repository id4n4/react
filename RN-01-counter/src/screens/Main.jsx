import { Text, TouchableOpacity, View } from 'react-native'
import { btnStyles } from '../utils/styles/button'
import { ListCounter } from '../components/ListCounter'
import { useCounter } from '../../app/Provider'

const Main = () => {
  const { counters, addcounter } = useCounter()
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <TouchableOpacity
          style={btnStyles.button}
          onPress={addcounter}
        >
          <Text> Agregar Counter </Text>
        </TouchableOpacity>
      </View>
      <ListCounter counters={counters} />
    </View>
  )
}

export default Main
