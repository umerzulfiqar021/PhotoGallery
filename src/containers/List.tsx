import React from 'react'
import { Dimensions, FlatList, StyleSheet,Image } from 'react-native'
import { imageData } from '../api/Network'
export default function List({ items,numColumns,onEndReached }) {
  const {width} = Dimensions.get('screen')
  const size = width / numColumns
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      onEndReached={onEndReached}
      renderItem={({ item }) => (
      <Image
      source = {{
       height: size,
       width: size,
      uri: imageData(item.id,size,size)
      }}
      />
      )}
    />
  )
}



const styles = StyleSheet.create({
  item: {
    marginBottom: 1,
    padding: 15,
  },
  title: {
    color: 'white',
  },
})
