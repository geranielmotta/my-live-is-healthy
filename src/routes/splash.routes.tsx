import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { AppTabRoutes } from './app.tab.routes';

const { Navigator, Screen } = createStackNavigator();

export function SplashRoutes() {
 
  const user= false

  return (
    <Navigator headerMode="none" initialRouteName="Home">
     
      <Screen
        name="Home"
        component={ AppTabRoutes }
      />
    </Navigator>
  )
}