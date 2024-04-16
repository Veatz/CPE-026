import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthOptionScreen from './components/AuthOptionScreen';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen'; 
import GetStartedScreen from './components/GetStartedScreen'; 
import PageOne from './components/PageOne';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthOptions">
        <Stack.Screen name="AuthOptions" component={AuthOptionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="GetStarted" component={GetStartedScreen} />
        <Stack.Screen name="PageOne" component={PageOne} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
