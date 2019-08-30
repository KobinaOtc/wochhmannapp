import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { globalStyles } from '../../common/commonStyles'

import LoginView from './LoginView'

class LoginController extends Component {
  render() {
    return (
      <View style={globalStyles.basicContainerStyles}>
        <LoginView/>
      </View>   
    )
  }
}

export default LoginController
