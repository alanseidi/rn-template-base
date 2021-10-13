import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
//TODO - Instalar a font que será utilizada, as fonts deverão ser do google fonts ex: yarn add @expo-google-fonts/raleway
//TODO - Colocar as fonts que serão utilizadas aqui
import {
  useFonts
} from '@expo-google-fonts/'; //TODO - colocar o nome da fonte instalada ex: raleway, ficará assim "from '@expo-google-fonts/raleway'";

import Routes from './src/routes';

export default function App() {
  //TODO - Carregar as fontes que serão usadas aqui
  const [fontsLoaded] = useFonts({});
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  );
}
