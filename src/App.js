import React from 'react';
import {View} from 'react-native';
import Login from './Pages/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import store, {persistor} from './Rematch/Store';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {TransitionSpecs} from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<View />} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                transitionSpec: {
                  open: TransitionSpecs.TransitionIOSSpec,
                  close: TransitionSpecs.TransitionIOSSpec,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </ReduxProvider>
  );
}
