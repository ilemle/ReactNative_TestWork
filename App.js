import React, {useState} from 'react';
import MainScreen from './src/Sreens/MainScreen/MainScreen';
// import type {Node} from 'react';
import {SafeAreaView,LogBox} from 'react-native';
import Navigate from './nagivations/navigate';
import {Provider} from 'react-redux';
import { store } from './src/store/store';

LogBox.ignoreLogs(['Remote debugger']);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Navigate />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
