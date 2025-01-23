import { Animated, PanResponder, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'


const Pan = () => {
    const pan = useRef(new Animated.ValueXY()).current
    const panImage = useRef(new Animated.ValueXY()).current


    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null,{dx:pan.x, dy: pan.y}],
                
            ),
            onPanResponderRelease: () =>{
                pan.extractOffset()
            }
        })
    ).current
    const panResponderImage = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null,{dx:panImage.x, dy: panImage.y}],
                
            ),
            onPanResponderRelease: () =>{
                panImage.extractOffset()
            }
        })
    ).current
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.titleText}>Drag!</Text>
    <Animated.View
      style={{
        transform: [{translateX: pan.x}, {translateY: pan.y}],
      }}
      {...panResponder.panHandlers}>
      <View style={styles.box} />
      
    </Animated.View>
    <Animated.Image
    style = {[styles.box,
        {transform:[{translateX: panImage.x}, {translateY: panImage.y}],}
    ]}
    source={require('../assets/images/images.jpeg')}
         {...panResponderImage.panHandlers}
         
         />
  </SafeAreaView>
  )
}

export default Pan

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      titleText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: 'bold',
      },
      box: {
        height: 150,
        width: 150,
        backgroundColor: '#067',
        borderRadius: 15,
        marginTop: 5,
        
      },
    });
    
