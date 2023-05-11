import React from 'react'
import GameVsIa from '../../src/screens/GameVsIa'
import Header from '../../src/components/Header'
import { stHeader } from '../../src/utils/styles/stHeader'
import { useSelector } from 'react-redux'
import { Stack, useRouter } from 'expo-router'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

const ia = () => {
  const theme = useSelector((state) => state)
  const router = useRouter()
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.color.background,
        height: '100%'
      }}
    >
      <Stack.Screen options={{
        title: 'Reto ID4NFOUR',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          ...stHeader.title,
          color: theme.color.headLine
        },
        headerStyle: { backgroundColor: theme.color.background },
        headerShadowVisible: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => router.push('/')}>
            <Text>Menu</Text>
          </TouchableOpacity>
        )
      }}
      />
      <Header />
      <GameVsIa />
    </SafeAreaView>
  )
}

export default ia
