import React, { Component } from 'react'
import { View } from 'react-native'

import LoginController from './LoginController'

import { globalStyles } from '../../common/commonStyles'

class LoginScreen extends Component {
  render() {
    return (
      <View style={globalStyles.basicContainerStyles}>
        <LoginController navigation={this.props.navigation} />
      </View>
      
    )
  }
}

export default LoginScreen
