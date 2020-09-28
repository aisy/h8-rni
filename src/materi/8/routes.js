import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import icon
import AntIcon from 'react-native-vector-icons/AntDesign';

import HomeScreen from './pages/Home';
import ConfigScreen from './pages/Config';
import ProfileScreen from './pages/Profile';

const TopStack = createMaterialTopTabNavigator();
const BottomNavStack = createBottomTabNavigator();

const ProfilePage = () => {
  return (
    <TopStack.Navigator>
      <TopStack.Screen name={"User"} component={ProfileScreen} />
      <TopStack.Screen name={"Config"} component={ConfigScreen} />
    </TopStack.Navigator>
  );
}

const RouteApp = () => {
  return (
    <NavigationContainer>
      <BottomNavStack.Navigator
        tabBarOptions={{
          activeTintColor: "red",
          style: {
            height: 65,
            paddingBottom: 5,
            paddingTop: 5,
          },
          labelStyle: {
            fontSize: 12
          }
        }}
      >
        <BottomNavStack.Screen
          name={"Home"}
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <AntIcon name={"home"} color={color} size={focused ? 24 : 20} />
            )
          }}
        />
        <BottomNavStack.Screen
          name={"Profile"}
          component={ProfilePage}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <AntIcon name={"user"} color={color} size={focused ? 24 : 20} />
            )
          }}
        />
      </BottomNavStack.Navigator>
    </NavigationContainer>
  );
}

export default RouteApp
