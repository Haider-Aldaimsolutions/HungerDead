import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from './screens';
import { Order } from './screens';
import { Resturant } from './screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigation/Tabs';
export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={
          { headerShown: false }
        }
      >
        <stack.Screen name="Tabs" component={Tabs} />
        <stack.Screen name="Order" component={Order} />
        <stack.Screen name="Resturant" component={Resturant} />


      </stack.Navigator>
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
