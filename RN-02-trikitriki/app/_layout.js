import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import store from './store'
import { Provider } from 'react-redux'

SplashScreen.preventAutoHideAsync()

const App = ({ onLayoutRootView }) => {
  return <Stack onLayout={onLayoutRootView} />
}

export default () => {
  const [fontsLoaded] = useFonts({
    mogra: require('../src/utils/fonts/Mogra-Regular.ttf'),
    spaceMono: require('../src/utils/fonts/SpaceMono-Regular.ttf'),
    lato: require('../src/utils/fonts/Lato-Regular.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return null
  return (
    <Provider store={store}>
      <App onLayoutRootView={onLayoutRootView} />
    </Provider>
  )
}
