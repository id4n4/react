import React from 'react'
import { FlatList } from 'react-native'
import { ItemCounter } from './ItemCounter'

export const ListCounter = ({ counters }) => {
  return (
    <FlatList
      data={counters}
      renderItem={({ item }) =>
        <ItemCounter
          title={item.title}
          value={item.value}
          id={item.id}
        />}
      keyExtractor={item => item.id}
    />
  )
}
