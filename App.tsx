import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { EmergenciasProvider } from './src/context/EmergenciaContext';

const App = () => {
  return (
    <EmergenciasProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </EmergenciasProvider>
  );
};

export default App;
