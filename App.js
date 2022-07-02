import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NativeBaseProvider } from "native-base";
import {theme} from './src/styles/theme'
import Navigation from "./src/components/navigation/Navigation";
import {AuthProvider} from "./src/context/AuthContext";
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar translucent backgroundColor={'#000'} />
      <AuthProvider>
        <Navigation/>
      </AuthProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
