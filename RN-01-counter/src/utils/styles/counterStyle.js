import { StyleSheet } from 'react-native'

export const counterStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#012340',
    marginVertical: 10,
    marginHorizontal: 30,
    borderRadius: 10,
    paddingBottom: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  value: {
    fontSize: 18,
    color: 'lightseagreen'
  },
  containerClose: {
    width: '100%',
    alignItems: 'flex-end'
  },
  whiteText: {
    color: 'white'
  },
  containerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10
  }
})
