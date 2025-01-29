import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import RootStackNavigator from './RootStackNavigator';

const MainNavigator = () => {
  return (
    <NavigationContainer >
      <RootStackNavigator/>
    </NavigationContainer>
  );
};

export default MainNavigator;
