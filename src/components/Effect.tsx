import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ButtonComponent from './ButtonComponent';

const Effect = () => {
    const[count,setCount] = useState(0);
    const countVariable = Math.floor(count/3)
    useEffect(()=>{
          console.log(countVariable);
            
    },[countVariable])
  return (
    <View>
        <ButtonComponent title= {`Increment ${count}`}  onPress={()=>setCount(count+1)}/>
      <Text>Effect</Text>
    </View>
  )
}

export default Effect

const styles = StyleSheet.create({})