import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Router from './Navigation/Router'
import TabRouter from './TabRouter'

export default class App extends Component {
  render() {
    return (
        <Router />
    )
  }
}
