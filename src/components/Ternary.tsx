import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Ternary = ({title,loading}) => {
  return (
    <View>
        {
            loading ? <Text>{title}</Text> : <Text>loading is not true</Text>
        }
      <Text>Ternary</Text>
    </View>
  )
}

export default Ternary

const styles = StyleSheet.create({})