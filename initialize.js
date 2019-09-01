import React, { Component } from 'react'
import * as firebase from 'firebase'
// import { firebase as reactFirebase } from 'react-native-firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCoLEfuknXtBlOoryg7-QTkiVlmwEkIScA",
    authDomain: "woch-mann-2e8cb.firebaseapp.com",
    databaseURL: "https://woch-mann-2e8cb.firebaseio.com",
    projectId: "woch-mann-2e8cb",
    storageBucket: "",
}

firebase.initializeApp(firebaseConfig)

class Initialize extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'HomeScreen' : 'LoginScreen')
    })
  }
  render () {
        return null
    }
}

export default Initialize