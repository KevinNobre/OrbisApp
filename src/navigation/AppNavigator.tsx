import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegistroScreen from '../screens/RegistroScreen/RegistroScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ReporteEmergenciaScreen from '../screens/ReporteEmergencia/ReporteEmergenciaScreen';
import SelecionarLocalizacaoScreen from '../screens/SelecionarLocalizacaoScreen/SelecionarLocalizacaoScreen';
import ComunidadeScreen from '../screens/ComunidadeScreen/ComunidadeScreen';
import PerfilScreen from '../screens/PerfilScreen/PerfilScreen';
import EmergenciasScreen from '../screens/EmergenciasScreen/EmergenciasScreen';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
  <Stack.Screen name="Login" component={LoginScreen} />
  <Stack.Screen name="Registro" component={RegistroScreen} />
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="ReporteEmergencia" component={ReporteEmergenciaScreen} />
  <Stack.Screen name="SelecionarLocalizacao" component={SelecionarLocalizacaoScreen}/>
  <Stack.Screen name="Comunidade" component={ComunidadeScreen} />
  <Stack.Screen name="Perfil" component={PerfilScreen} />
  <Stack.Screen name="SOS" component={EmergenciasScreen} />
  </Stack.Navigator>
  );
};

export default AppNavigator;
