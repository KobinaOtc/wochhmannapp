import React, { Component } from 'react'
import { View } from 'react-native'
import { Spinner } from 'native-base'

import { globalStyles, Button, basicButton, validateEmail } from '../../common'
import * as firebase from 'firebase'

import LoginView from './LoginView'

class LoginController extends Component {
  constructor () {
    super()
    this.state = {
      email: 'admin@email.com',
      password: 'asfd1234',
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
    return <Button title='SIGN IN' onPress={() => this.checkInputs()} style={basicButton} />
  }

  checkInputs = () => {
    if (this.state.email === '' || this.state.password ==='') {
      console.log('Please enter email and password')
      return
    }
    if (!validateEmail(this.state.email)) {
      console.log('Please enter valid email')
      return
    }
    this.handleSubmit()
  }

  handleSubmit = () => {
    this.setState({ activityIndicator: true })
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => console.log(res))
       .catch(err => {
         this.setState({ activityIndicator: false })
         console.log(err)
        })
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
