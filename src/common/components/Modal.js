import React, { Component } from 'react'
import { View, Text, Modal as RnModal, TouchableOpacity, TouchableHighLight } from 'react-native'

const Modal = (isVisible, toggleModal, modalConfirm) => {

  return (
    <RnModal visible={isVisible} onRequestClose={toggleModal}>
        <TouchableOpacity>
          <View>
              <View>
              <Text>SIGN OUT</Text>
              <Text>Are you sure you want to sign out?</Text>
              </View>
              <View>
              <TouchableHighLight onPress={modalConfirm}>
                  <Text>Yes</Text>
              </TouchableHighLight>
              <TouchableHighLight onPress={toggleModal}>
                  <Text>No</Text>
              </TouchableHighLight>
              </View>
          </View>
        </TouchableOpacity>
    </RnModal>
  )
}

export { Modal }