import React from 'react'
import { View, Text, Modal as RnModal, TouchableOpacity, TouchableHighLight } from 'react-native'
import { Button, basicButton } from '../index'

const Modal = (props) => {

  return (
    <RnModal visible={props.isVisible} onRequestClose={props.toggleModal}>
      <TouchableOpacity activeOpacity={1} disabled={true} style={props.styles.contentContainer}>
        <View style={props.styles.modal}>
          <View style={props.styles.textView}>
          <Text style={[props.styles.text, { fontSize: 20 }]}>SIGN OUT</Text>
          <Text style={props.styles.text}>Are you sure you want to sign out?</Text>
          </View>
          <View style={props.styles.buttonView}>
            <Button title='Yes' onPress={() => props.modalConfirm()} style={basicButton} />
            <Button title='No' onPress={() => props.toggleModal()} style={basicButton} />
          </View>
        </View>
      </TouchableOpacity>
    </RnModal>
  )
}

export { Modal }