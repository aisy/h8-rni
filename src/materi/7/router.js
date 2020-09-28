// import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import component halaman
import Home from './Home';
import List from './List';

// membuat stack
const Stack = createStackNavigator();
// const Stack = createMaterialTopTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* component halaman */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
