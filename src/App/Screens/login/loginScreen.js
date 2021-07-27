import React, { useState, useEffect } from "react"
import { connect, actions } from '@cliqd/janet'
import { View, Text,  TextInput, TouchableOpacity ,StyleSheet} from "react-native";

import styles from '../Styles/styles'

const loginScreen = ({
  logUserIn,
  setEmail,
  setPassword,
  email,
  password,
  currentUser,
}) => {

  const verify = () => {
    if(currentUser){
      const { navigate } = this.props.navigation;
       navigate("Home")
    }else{
      alert("Sorry, your email or password is incorrect")
    }
  }

  return(     
      <View style = {{paddingTop:200}}>
      <Text></Text>
      <Text>Email</Text>
          <TextInput 
              style = {styles.inputStyle}
              placeholder = "email"
              onChangeText = {(email) => setEmail(email)}
              value = {email}
              />
          <Text>Password</Text>
          <TextInput 
              style = {styles.inputStyle}
              placeholder = "Password"
              onChangeText = {(password) => setPassword(password)}
              value = {password}
              />
          <TouchableOpacity 
          onPress={() => {
          logUserIn()
          verify()
          }}
          style={styles.loginContainter}>
                  <Text style={styles.loginText}>
                      Login
                  </Text>
          </TouchableOpacity>
      
      </View>
      )
      
  

}


export default connect(
    ({loginReducer, userReducer}) => ({
      email: loginReducer.email,
      password: loginReducer.password,
      currentUser: userReducer.currentUser,
    }),

     (dispatch, ownProps) => ({
      setEmail: (email) => dispatch(actions.login.SetEmail(email)),
      setPassword: (password) => dispatch(actions.login.SetPassword(password)),
      logUserIn: () => dispatch(actions.user.LogUserIn()),
      ...ownProps
    }),
  )(loginScreen)
