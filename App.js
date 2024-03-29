import 'react-native-gesture-handler'

import { StatusBar } from 'expo-status-bar';
import React from 'react';

import AppLoading from 'expo-app-loading';
import { useFonts, Lora_400Regular } from '@expo-google-fonts/lora';


import Routes from './src/router';

export default function App() {

  let [fontsLoaded] = useFonts({
    Lora_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
    <StatusBar style="light" backgroundColor="#000" translucent={true} />
    <Routes/>
  </>
  );
}

