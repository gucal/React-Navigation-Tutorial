import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'

const AppStackNavigator = createStackNavigator({
    Login: LoginScreen,
    Home: HomeScreen
  });
  
  const AppNavigator = createAppContainer(AppStackNavigator);
  export default AppNavigator;
