import React from 'react'
import { SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import { Stack } from 'expo-router'
import Header from '../src/components/Header'
import { stHeader } from '../src/utils/styles/stHeader'
import Menu from '../src/screens/Menu'
// import { COLOR1, COlOR2 } from '../src/utils/constants'

const index = () => {
  const theme = useSelector((state) => state)
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
        headerShadowVisible: false
      }}
      />
      <Header />
      <Menu />
    </SafeAreaView>
  )
}

export default index
