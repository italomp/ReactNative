import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Routes from './Routes';

function App(): JSX.Element {
  return (
    <Routes />
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default App;
