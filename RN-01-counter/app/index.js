import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native'
import Main from '../src/screens/Main'

const index = () => {
  return (
    <SafeAreaView>
      {/* Use the `Screen` component to configure the layout. */}
      <Stack.Screen options={{ title: 'Counter', headerTitleAlign: 'center' }} />
      <Main />
    </SafeAreaView>
  )
}

export default index
