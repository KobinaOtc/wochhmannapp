import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { styles, modalStyles } from './styles'

import { Modal } from '../../common'

class LogoutScreen extends Component {
  constructor() {
    super()
    this.state = {
      modalVisible: true
    }
  }

  handleVisibility = () => this.setState({ modalVisible: !this.state.modalVisible })
  
  render () {
    return (
      <View style={styles.contentContainer}>
        <Modal
          styles={modalStyles}
          isVisible={this.state.modalVisible}
          toggleModal={this.handleVisibility}
          modalConfirm={this.handleVisibility} />
      </View>
    )
  }
}

export default LogoutScreen