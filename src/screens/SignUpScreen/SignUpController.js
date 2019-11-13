import React, {Component} from 'react'
import { Spinner } from 'native-base'

import { globalStyles, Button, basicButton, validateEmail, Toast } from '../../common'

import SignUpView from './SignUpView'

class SignUpController extends Component {

  constructor(props) {
      super(props)
      this.state = {
          inputs: {
          firstName: '',
          lastName: '',
          dob: '',
          email: '',
          password: '',
          confirmPassword: '',
          phoneNumber: '',
        },
          activityIndicator: false
      }
  }

  handleInput = (key, text) => {
    this.setState(prevState => {
      return {
        ...prevState,
        inputs: {
          [key]: text
        }
      }
    })
  }

  renderSignUpButton = () => {
    if (this.state.activityIndicator) {
      return <Spinner color='red' />
    }
    return <Button title='SIGN UP' style={basicButton} />
  }

  render() {
    return (
      <SignUpView {...this.state.inputs}
        navigation={this.props.navigation}
        handleInput={this.handleInput}
        renderSignUpButton={this.renderSignUpButton} />
    )
  }
}

export default SignUpController


