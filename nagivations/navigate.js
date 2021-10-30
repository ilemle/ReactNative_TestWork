import React from 'react';
import MainScreen from '../src/Sreens/MainScreen/MainScreen';
import HumanList from '../src/Sreens/HumanList/HumanList';
import HumanInfo from '../src/Sreens/HumanInfo/HumanInfo';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="HumanList"
          component={HumanList}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="HumanInfo"
          component={HumanInfo}
          options={{headerMode: 'none', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
