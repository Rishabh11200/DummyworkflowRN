import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/home/Home.screen';
 

type RootStackParamList = {
  Home: undefined;
};

const HomeStack = createStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator id={undefined} >
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        headerShown: false,
      }} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
