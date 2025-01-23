import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useState } from 'react'

const Input = ({onSubmitEditing,placeholder,style}) => {
    const[input,setInput] = useState('')
  return (
    <View>
        <TextInput
        value= {input}
        style = {[styles.Input,style]}
        onChangeText={(value)=> setInput(value)}
        placeholder= {placeholder ? placeholder : 'Enter value' }
        // ref={Ref}
        onSubmitEditing={()=>{
          if (!input) return
          onSubmitEditing(input)
          setInput('')
        }
         
        }
        />
      
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
Input: {
    borderWidth: 1,
    padding: 12,
    marginTop: 5,
    width: 150,
    borderRadius: 3,
}
})