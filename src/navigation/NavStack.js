import React from 'react'
import { Animated, Easing } from 'react-native'
import { Icon } from 'native-base'
import { createDrawerNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation'

import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import HomeScreen from '../screens/HomeScreen'
import LogoutScreen from '../screens/LogoutScreen'

import { styles } from './styles'

const noTransitionConfig = () => ({
    transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0
    }
})

const DrawerNav = createDrawerNavigator({
  'Home': { screen: HomeScreen },
  'Sign Out': { screen: LogoutScreen }
}, {
  contentOptions: {
    activeTintColor: '#d5be00',
    labelStyle: styles.drawerLabelStyles,
    itemContainerStyle: {
      marginTop: 0
    },
    iconContainerStyle: {
      opacity: 1
    }
  }
})

const Homestack = createStackNavigator({
  Home: {
    screen: DrawerNav,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Icon onPress={() => navigation.toggleDrawer()} name='ios-menu' size={30} style={{ paddingLeft: 10 }} />
    })
  }
}, {
    navigationOptions: ({ navigation }) => {
      let headerTitle = 'Home'
      return {
        title: headerTitle
      }
    }
})

const LoginStack = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      headerMode: 'none'
    })
  },
  SignUpScreen: {
    screen: SignUpScreen,
    navigationOptions: ({ navigation }) => ({
      headerMode: 'none'
    })
  },
  ForgotPasswordScreen: {
    screen: ForgotPasswordScreen,
    navigationOptions: ({ navigation }) => ({
      headerMode: 'none'
    })
  }
})

const RootStack = (signedIn = false) => {
  return createSwitchNavigator(
    {
      loginStack: { screen: LoginStack },
      drawerStack: { screen: Homestack }
    }, {
      headerMode: 'none',
      initialRouteName: signedIn ? 'drawerStack' : 'loginStack',
      transitionConfig: noTransitionConfig
    }
  )
}

export default RootStack
