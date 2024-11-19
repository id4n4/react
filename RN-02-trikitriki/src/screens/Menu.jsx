
import { Text, TouchableOpacity, View } from 'react-native'
import { stMenu } from '../utils/styles/stMenu'
import { useSelector } from 'react-redux'
import LogoMenu from '../components/LogoMenu'
import { useRouter } from 'expo-router'

const Menu = () => {
  const router = useRouter()
  const theme = useSelector((state) => state)
  return (
    <View style={stMenu.container}>
      <LogoMenu />
      <View
        style={{
          ...stMenu.card,
          backgroundColor: theme.color.headLine
        }}
      >
        <Text
          style={{
            ...stMenu.title,
            color: theme.color.background
          }}
        >
          MENÚ
        </Text>
        <TouchableOpacity
          style={{
            ...stMenu.btn,
            backgroundColor: theme.color.button
          }}
          onPress={() => router.push('/ia')}
        >
          <Text
            style={{
              ...stMenu.btnText,
              color: theme.color.buttonText
            }}
          >1 vs IA
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...stMenu.btn,
            backgroundColor: theme.color.button
          }}
          onPress={() => router.push('/person')}
        >
          <Text
            style={{
              ...stMenu.btnText,
              color: theme.color.buttonText
            }}
          >1 vs 1
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Menu
