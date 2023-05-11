import { StyleSheet } from 'react-native'
import { FONTS, SIZES } from '../constants'

export const stMenu = StyleSheet.create({
  container: {
    height: '95%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  card: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: SIZES.small,
    marginTop: SIZES.large
  },
  title: {
    fontFamily: FONTS.magro,
    fontSize: SIZES.xxLarge
  },
  btn: {
    width: '90%',
    padding: SIZES.small,
    borderRadius: 10,
    margin: SIZES.large
  },
  btnText: {
    fontFamily: FONTS.magro,
    fontSize: SIZES.large,
    textAlign: 'center'
  }
})
