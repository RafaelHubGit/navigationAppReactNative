
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
// import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateral } from './src/navigator/MenuLateral';
import { DefaultTheme } from 'react-native-paper';
// import { Tabs } from './src/navigator/Tabs';

import { Provider as PaperProvider } from 'react-native-paper';


const theme = {
  ...DefaultTheme,
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {/* <StackNavigator /> */}
        {/* <MenuLateralBasico /> */}
        <MenuLateral />
        {/* <Tabs /> */}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
