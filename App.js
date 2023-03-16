import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';

import Visual from './src/principal/Visual';
import Home from './src/principal/Home';

export default function App() {
  return (
    <SafeAreaView style={estilos.safeAreaView}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Visual />
      <Home />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
