import React, {Component} from 'react'
import { Alert } from 'react-native'
import { Spinner } from 'native-base'
import * as firebase from 'firebase'

import { globalStyles, Button, basicButton, validateEmail, Toast, validateInputs, validatePhoneNumber } from '../../common'

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
          phoneNumber: ''
        },
        verify: {
          firstName: true,
          lastName: true,
          dob: true,
          email: true,
          password: true,
          confirmPassword: true,
          phoneNumber: true
        },
        activityIndicator: false
      }
      this.isSubmiting = false
  }

  handleInput = (key, text) => {
    this.setState(prevState => {
      return {
        ...prevState,
        inputs: {
          [key]: text
        },
        verify: {
          [key]: true
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

  // Check if password is at min 6 characters, 1 upper case, 1 special character, 1 number
  handleValidPassword = password => {
    // regExp scans password for our basic requirements,
    let regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{6,}/
    let testedPassword = regExp.test(password)
    return testedPassword
  }

  handleUpdateVerifyProperties = verifyObject => {
    if (!verifyObject) return false

      const checkForFalses = Object.values(verifyObject).filter(value => value === false)

    // Updates the verify state
    if (checkForFalses.length !== 0) {
      this.setState(prevState => {
        return {
          ...prevState,
          verify: {
            ...prevState.verify,
            ...verifyObject
          }
        }
      })
    }

    // Return false if checkForFalses has any false values.
    return (checkForFalses.length === 0)
  }

  handleFormValidation = () => {
    const {input, verify} = this.state

    // Pass inputs into validateInputs to check for empty inputs. Returns an new object.
    // Pass verifyInputs into handleUpdateVerifyProperties to update this.state.verify. Returns a boolean.
    const verifyInputs = validateInputs(inputs)
    const noMissingFields = this.handleUpdateVerifyProperties(verifyInputs)
    if (!noMissingFields) {
      Toast('Please fill out missing fields')
      this.isSubmiting = false
      return
    }

    // Checks if phone number is valid return number if invalid return false
    const phoneNumber = validatePhoneNumber(input.phoneNumber)
    if(!phoneNumber) {
      this.setState(prevState => {
        return {
          ...prevState,
          verify: {
            ...prevState.verify,
            phoneNumber: false
          }
        }
      })
      Toast('Please enter a valid phone number')
      this.isSubmiting = false
      return
    }
    // Check for correct email formatting.
    // Note! Doesn't check for working email.
    if (!validateEmail(input.email)) {
      this.setState(prevState => {
        return {
          ...prevState,
          verify: {
            ...prevState.verify,
            email: false
          }
        }
      })
      Toast('Please enter a valid email address')
      this.isSubmiting = false
      return
    }

    // Check for password validation
    if (!this.handleValidPassword(input.password)) {
      this.setState(prevState => {
        return {
          ...prevState,
          verify: {
            ...prevState.verify,
            password: false
          }
        }
      })
      Toast('Password does not meet minimum requiments (check for: upper case, lower case, numbers and special characters)')
      this.isSubmiting = false
      return
    }
    this.handleSumit()
  }

  handleSumit = () => {
    this.setState({ activityIndicator: true })
    const {
      firstName,
      lastName,
      dob,
      email,
      password,
      phoneNumber
    } = this.state
    const { navigation } = this.props
    
  }

  render() {
    return (
      <SignUpView {...this.state.inputs}
        verify={this.state.verify}
        navigation={this.props.navigation}
        handleInput={this.handleInput}
        renderSignUpButton={this.renderSignUpButton} />
    )
  }
}

export default SignUpController


