import React, {useEffect} from 'react';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reducers} from './redux/Reducers/CombainReducer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNavigation} from './navigation/ScreenNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const store = createStore(reducers, applyMiddleware(thunk));

const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {background: '#FFFFFF'},
  };
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <SafeAreaView style={styles.container}>
          <ScreenNavigation />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
