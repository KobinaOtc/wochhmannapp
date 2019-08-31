import React, { Component } from 'react'
import { View } from 'react-native'
import { Spinner } from 'native-base'

import { globalStyles, Button } from '../../common'

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
    return <Button />
  }
  render() {
    return (
      <View style={globalStyles.basicContainerStyles}>
        <LoginView {...this.state}
          handleInput={this.handleInput} />
      </View>   
    )
  }
}

export default LoginController
