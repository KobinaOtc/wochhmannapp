import React, { Component } from 'react'
import { View } from 'react-native'
import * as firebase from 'firebase'

import { styles, modalStyles } from './styles'

import { Modal } from '../../common'

class LogoutScreen extends Component {
  constructor() {
    super()
    this.state = {
      modalVisible: true
    }
  }

  handleVisibility = () => {
    this.setState(prevState => { 
      return { modalVisible: !this.state.modalVisible } 
    })
    this.props.navigation.goBack()
  }

  handleLogout = () => {
    this.setState(prevState => { 
      return { modalVisible: !this.state.modalVisible } 
    })
    firebase.auth().signOut()
    this.props.navigation.navigate('loginStack')
  }
  
  render () {
    return (
      <View style={styles.contentContainer}>
        <Modal styles={modalStyles}
          isVisible={this.state.modalVisible}
          toggleModal={this.handleVisibility}
          modalConfirm={this.handleLogout} />
      </View>
    )
  }
}

export default LogoutScreen