import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/screens/Home';


export default function App() {
  const Root = createStackNavigator();
  return (
    <NavigationContainer>
    <Root.Navigator  initialRouteName='Home'>
    <Root.Screen name='Home' component={Home} options={{headerShown:false}}/>
    </Root.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
