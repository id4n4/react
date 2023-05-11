import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../utils/slices/themeSlice'
import { Switch, View } from 'react-native'
import { stSwitch } from '../utils/styles/stSwitch'

const Header = () => {
  const theme = useSelector((state) => state)
  const dispatch = useDispatch()
  const changeTheme = () => {
    dispatch(setTheme(theme.theme === 'light' ? 'dark' : 'light'))
  }
  return (
    <View style={stSwitch.container}>
      <Switch
        trackColor={{ false: theme.color.headLine, true: theme.color.headLine }}
        thumbColor={theme.color.highLight}
        ios_backgroundColor='red'
        onValueChange={changeTheme}
        value={theme.switch}
      />
    </View>
  )
}

export default Header
