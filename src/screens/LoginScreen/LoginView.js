import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
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
                  placeholder='Email' />
               </Item>

               <Item style={styles.itemStyles}>
                 <Input style={styles.inputStyles}
                  placeholder='Password' />  
               </Item>

            </Form>
          </Content>   
       </Container>  
     )
   }
 }

 export default LoginView