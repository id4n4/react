import React from 'react'
import { Text, View } from 'react-native'
import { Image } from 'expo-image'
// import blacklogo from '../utils/img/tic-tac-toe.png'
// import whiteLogo from '../utils/img/tic-tac-toe-white.png'
import orangeLogo from '../utils/img/tic-tac-toe-orange.png'
import { useSelector } from 'react-redux'
import { FONTS } from '../utils/constants'

const LogoMenu = () => {
  const { color } = useSelector((state) => state)
  return (
    <View style={{
      width: '100%',
      padding: 10,
      alignItems: 'center'
    }}
    >
      <Image
        style={{
          width: 200,
          height: 200,
          borderRadius: 10
        }}
        contentFit='cover'
        transition={1000}
        source={orangeLogo}
      />
      <Text
        style={{
          fontSize: 100,
          fontFamily: FONTS.magro,
          color: color.headLine
        }}
      >TRIQUI
      </Text>
    </View>
  )
}

export default LogoMenu
