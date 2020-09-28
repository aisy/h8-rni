import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home'
import InsertData from './InsertData'
import UpdateData from './UpdateData'

const Stack = createStackNavigator();

const RouteApp = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Home"} component={Home} />
        <Stack.Screen name={"Insert"} component={InsertData} />
        <Stack.Screen name={"Update"} component={UpdateData} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default RouteApp;