import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { Content, Container, Form, Input, Item } from 'native-base'

import { styles } from './styles'
import { globalStyles } from '../../common/commonStyles'

const logo = require('../../../assets/icon.png')

 class LoginView extends Component {
   render() {
     return (
       <Container style={globalStyles.basicContainerStyles}>
          <Content padder
            style={globalStyles.basicContainerStyles}
            contentContainerStyle={styles.keyboardAwareContainer}>
            <View style={styles.childViewOne}>
              <Image source={logo} style={styles.imageStyles} />
            </View>

            <Form style={styles.childViewTwo}>
               <Text style={styles.textOneStyles}>SIGN IN</Text>
               <Item style={styles.itemStyles}>
                 <Input style={styles.inputStyles}
                  onChangeText={text => this.props.handleInput('email', text)}
                  placeholder='Email'
                  value={this.props.email}
                  maxLength={250}
                  returnKeyType='next'
                  autoCapitalize='none'
                  keyboardType='email-address' />
               </Item>

               <Item style={styles.itemStyles}>
                 <Input style={styles.inputStyles}
                  onChangeText={text => this.props.handleInput('password', text)}                  
                  placeholder='Password'
                  value={this.props.password}
                  maxLength={250}
                  returnKeyType='done'
                  secureTextEntry
                  autoCapitalize='none' />  
               </Item>

            </Form>
            <View style={styles.childViewThree}>
              {this.props.renderSignInButton()}
            </View>
            <View style={styles.childViewFour}>
              <View style={styles.buttonRowSectionStyles}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('SignUpScreen')}>
                  <Text style={styles.linkStyles}> Sign up</Text>
                </TouchableOpacity>
              </View>
              <View style={[{ alignSelf: 'center' }, styles.childViewFour]}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('ForgotPasswordScreen')}>
                  <Text style={styles.linkStyles}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Content>   
       </Container>  
     )
   }
 }

 export default LoginView