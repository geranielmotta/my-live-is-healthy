import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';

import { RootStackParamList } from '../types/react-navigation/stack.routes';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
    
      <Screen 
        name="Home"
        component={Home}
      />
      
    

    
    </Navigator>
  )
}