import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppLoading } from 'expo'
import { Root } from 'native-base'
import { createAppContainer } from 'react-navigation'
import NavigationServices from './src/navigation/NavigationServices'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ready: false
    }
    this.prevAppState = 'active'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open to start working on your app!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
