import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useRef } from 'react'
import ButtonComponent from './ButtonComponent'
import Input from './Input';

const Ref = () => {
    const inputRef = useRef(null);
    const handleClick = () => {
        // Focus the input element on button click
        inputRef.current.focus();
      };

  return (
    <View>
                <Input  Ref={inputRef}/>
      <ButtonComponent title='focues' onPress={handleClick}/>
    </View>
  )
}

export default Ref

const styles = StyleSheet.create({})