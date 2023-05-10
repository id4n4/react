import { createContext, useContext, useState } from 'react'
import { Alert } from 'react-native'

const counterContext = createContext()

export const useCounter = () => {
  return useContext(counterContext)
}

export const Provider = (props) => {
  const [counters, setCounters] = useState([])
  const [id, setId] = useState(0)

  const addcounter = () => {
    setCounters([
      ...counters,
      {
        id,
        value: 0,
        title: `Counter ${id}`
      }
    ])
    setId(id + 1)
  }
  const removeCounter = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id))
  }
  const decrease = (id) => {
    setCounters(counters.map((counter) => {
      if (counter.id === id) {
        if (counter.value === 0) showAlerDecrease()
        else {
          return {
            ...counter,
            value: counter.value - 1
          }
        }
      }
      return counter
    }))
  }
  const reset = (id) => {
    setCounters(counters.map((counter) => {
      if (counter.id === id) {
        return {
          ...counter,
          value: 0
        }
      }
      return counter
    }))
  }
  const increase = (id) => {
    setCounters(counters.map((counter) => {
      if (counter.id === id) {
        return {
          ...counter,
          value: counter.value + 1
        }
      }
      return counter
    }))
  }
  const showAlerDecrease = () => {
    Alert.alert(
      'Valor mínimo alcanzado',
      'El contador ya está en cero',
      [
        { text: 'OK', onPress: () => console.log('OK presionado') }
      ],
      { cancelable: false }
    )
  }
  return (
    <counterContext.Provider
      value={{
        counters,
        addcounter,
        removeCounter,
        decrease,
        reset,
        increase
      }}
    >
      {props.children}
    </counterContext.Provider>
  )
}
