import React from 'react'
import Header from '../../src/components/Header'
import { stHeader } from '../../src/utils/styles/stHeader'
import { useSelector } from 'react-redux'
import { Stack, useRouter } from 'expo-router'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import GameVsPerson from '../../src/screens/GameVsPerson'
import { AntDesign } from '@expo/vector-icons'

const person = () => {
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
            <AntDesign name='arrowleft' size={24} color={theme.color.headLine} />
          </TouchableOpacity>
        )
      }}
      />
      <Header />
      <GameVsPerson />
    </SafeAreaView>
  )
}

export default person
