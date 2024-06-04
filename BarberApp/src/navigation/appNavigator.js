import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import MainScreen from '../screens/Main';
import ScheduleScreen from '../screens/Agendamento';
import {ScheduleProvider} from '../Contexts/index'
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <ScheduleProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Agendamento" component={ScheduleScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ScheduleProvider>
  );
};

export default AppNavigator;
