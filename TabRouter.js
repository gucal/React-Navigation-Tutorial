import React, { Component } from 'react'
import { Button, Text, View } from 'react-native';
import SettingTab from './Navigation/TabScreen/SettingTab '
import Home from './Navigation/TabScreen/Home'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

  const TabNavigator = createBottomTabNavigator({
    Home: Home,
    Settings: SettingTab,
  });
  
  export default createAppContainer(TabNavigator);