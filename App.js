import React, { Component } from 'react'
// import { Font } from 'expo'
import { StyleSheet, Text, View } from 'react-native'
import { AppLoading } from 'expo'
import { Root } from 'native-base'
import { createAppContainer } from 'react-navigation'
import NavigationServices from './src/navigation/NavigationServices'
import RootStack from './src/navigation/NavStack'

import Initialize from './initialize'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fontLoaded: false,
      signedIn: false
    }
    this.prevAppState = 'active'
  }
  componentDidMount () {
    let login = false
    if (login) { this.setState({ signedIn: true }) }
  }

  // async componentWillMount () {
  //   await Font.loadAsync({
  //     'Roboto': require('native-base/Fonts/Roboto.ttf'),
  //     'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  //     'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf')
  //   })
  //   this.setState({ fontLoaded: true })
  // }

  initRender = () => {
    const { signedIn } = this.state
    const Layout = createAppContainer(RootStack(signedIn))
    // if (!fontLoaded) return null
    return <Layout ref={navigatorRef => { NavigationServices.setTopLevelNavigator(navigatorRef) }}/>
  }

  render() {
    return (
      <Root>
        <Initialize navigation={NavigationServices} />
        {this.initRender()}
      </Root>
    )
  }
}

export default App
