import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

class App extends Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}
const AppStackNavigator = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen
});

const AppNavigator = createAppContainer(AppStackNavigator);
export default AppNavigator;