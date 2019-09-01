import React, { Component } from 'react'
import { View } from 'react-native'
import { Spinner } from 'native-base'

import { globalStyles, Button, basicButton } from '../../common'

import LoginView from './LoginView'

class LoginController extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
      activityIndicator: false
    }
  }
  handleInput = (key, text) => {
    this.setState(prevState => {
      return {
        ...prevState,
        [key]: text
      }
    })
  }

  renderSignInButton = () => {
    if (this.state.activityIndicator) {
      return <Spinner color='Gold' />
    }
    return <Button title='SIGN IN' onPress={() => console.log('I am signing in')} style={basicButton} />
  }
  render() {
    return (
      <View style={globalStyles.basicContainerStyles}>
        <LoginView {...this.state}
          navigation={this.props.navigation}
          handleInput={this.handleInput}
          renderSignInButton={this.renderSignInButton} />
      </View>   
    )
  }
}

export default LoginController
