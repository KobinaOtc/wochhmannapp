import React, { Component } from 'react'
import { View, Text } from 'react-native'

import SignUpController from './SignUpController'

class SignUpScreen extends Component {
  render () {
    return (
      <SignUpController navigation={this.props.navigation} />
    )
  }
}

export default SignUpScreen