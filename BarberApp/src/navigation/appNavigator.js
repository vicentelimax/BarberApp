import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import MainScreen from '../screens/Main';
import ScheduleScreen from '../screens/Agendamento';
import RegisterScreen from '../screens/Registro';
import {ScheduleProvider} from '../Contexts/index';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const AppNavigator = () => {

  const [initial, setInitial] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem('user').then(value => {
      setInitial(value)
    })
  }, [])

  return (
    <ScheduleProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initial ? 'Main' : "Login"}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Agendamento" component={ScheduleScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ScheduleProvider>
  );
};

export default AppNavigator;
