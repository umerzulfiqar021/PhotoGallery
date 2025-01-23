import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'


interface props{
    title: string,
    color?: string,
    onPress?:()=>void
}
const ButtonComponent= ({title,onPress}:props) => {
  return (
    <View>
        <TouchableOpacity style = {styles.button} 
        onPress={onPress}
        >
          <Text style = {{color: 'white'}}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ButtonComponent
const styles = StyleSheet.create({
 button:{
  borderWidth: 1,
  padding: 8,
  borderRadius: 4,
  backgroundColor: '#021'
 }
})