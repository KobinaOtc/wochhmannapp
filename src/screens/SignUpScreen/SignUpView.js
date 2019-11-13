import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Content, Container, Form, Input, Item } from 'native-base'

import { styles } from './styles'
import { globalStyles } from '../../common/commonStyles'

class SignUpView extends Component {
  render() {
    return (
      <Container style={globalStyles.basicContainerStyles}>
        <Content padder
         style={globalStyles.basicContainerStyles}
         contentContainerStyle={styles.keyboardAwareContainer}>

          <Form style={styles.childViewTwo}>
            <Text style={styles.textOneStyles}>SIGN UP</Text>
              <Item style={styles.itemStyles}>
                <Input style={styles.inputStyles}
                  onChangeText={text => this.props.handleInput('firstName', text)}
                  placeholder='First Name'
                  value={this.props.firstName}
                  maxLength={250}
                  returnKeyType='next'
                  autoCapitalize='none'
                  keyboardType='email-address' />
              </Item>

              <Item style={styles.itemStyles}>
                <Input style={styles.inputStyles}
                  onChangeText={text => this.props.handleInput('lastName', text)}
                  placeholder='Last Name'
                  value={this.props.lastName}
                  maxLength={250}
                  returnKeyType='next'
                  autoCapitalize='none'
                  keyboardType='email-address' />
              </Item>

              <Item style={styles.itemStyles}>
                <Input style={styles.inputStyles}
                  onChangeText={text => this.props.handleInput('dob', text)}
                  placeholder='DOB'
                  value={this.props.dob}
                  maxLength={250}
                  returnKeyType='next'
                  autoCapitalize='none'
                  keyboardType='email-address' />
              </Item>

              <Item style={styles.itemStyles}>
                <Input style={styles.inputStyles}
                  onChangeText={text => this.props.handleInput('phoneNumber', text)}                  
                  placeholder='Phone Number'
                  value={this.props.phoneNumber}
                  maxLength={250}
                  returnKeyType='done'
                  secureTextEntry
                  autoCapitalize='none' />  
              </Item>

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

              <Item style={styles.itemStyles}>
                <Input style={styles.inputStyles}
                  onChangeText={text => this.props.handleInput('confirmPassword', text)}                  
                  placeholder='Confirm Password'
                  value={this.props.confirmPassword}
                  maxLength={250}
                  returnKeyType='done'
                  secureTextEntry
                  autoCapitalize='none' />  
              </Item>

          </Form>
          <View style={styles.childViewThree}>
            {this.props.renderSignUpButton()}
          </View>
        </Content>   
      </Container>
   ) 
  }
}

export default SignUpView
