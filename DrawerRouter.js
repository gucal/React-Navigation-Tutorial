import React, { Component } from 'react'
import { Text, View } from 'react-native'
import DrawerMenu from './Navigation/DrawerScreen/DrawerMenu'
import DrawerMenuu from './Navigation/DrawerScreen/DrawerMenuu'
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: DrawerMenu,
    },
    Notifications: {
      screen: DrawerMenuu,
    },
  },
  {initialRouteName: 'Notifications'});

  const MyApp = createAppContainer(MyDrawerNavigator);
  export default MyApp;
  