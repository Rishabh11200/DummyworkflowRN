import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';  
import HomeStackNavigator from './stacks/HomeStacks';

type RootStackParamList = {
    Auth: undefined;
    HomeStack: undefined;
    Info: undefined
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
    return (<RootStack.Navigator initialRouteName={'HomeStack'} screenOptions={{
        headerShown: false,
    }} id={undefined}>
        {/* <RootStack.Screen name='Info' component={InfoScreen} /> */}
        {/* <RootStack.Screen name='Auth' component={AuthStackNavigator} /> */}
        <RootStack.Screen name='HomeStack' component={HomeStackNavigator} />
    </RootStack.Navigator>)
}

export default RootStackNavigator;
