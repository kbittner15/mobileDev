import React, { useState, useEffect } from "react"
import { connect, actions } from '@cliqd/janet'
import { View, Text,  TextInput, TouchableOpacity ,StyleSheet} from "react-native";
 import styles from '../Styles/styles'



const generalInformationScreen = ({
  SET_FIRST,
  SET_LAST,
  SET_EMAIL,
  SET_AGE,
  SET_ZIP,
  email,
  age,
  firstName,
  lastName,
  zipcode,
  SignUserIn,
  
}) => {
// ##deletes the password and email everytime you delete the app
useEffect(() => {

  setFirst()
  setLast()
  setEmail()
  setZip()

}, [])

console.log({firstName,lastName,email,zipcode})
    return(

     
      <View style = {{paddingTop:200}}>
      <Text></Text>
      <Text>Email</Text>
          <TextInput 
              style = {styles.inputStyle}
              placeholder = "firstname"
              onChangeText = {(firstname) => setFirst(firstname)}
              value = {firstname}
              />
              

          <Text>Password</Text>
          <TextInput 
              style = {styles.inputStyle}
              placeholder = "last name"
              onChangeText = {(lastname) => setLast(lastname)}
              value = {lastname}
              />
              
          <TouchableOpacity
              style = {styles.submitButton}
              onPress={() => Signuserup()} 
             >
              <Text style = {styles.submitButtonText}> Login </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => logUserIn()} style={styles.signupContainer}>
                  <Text style={styles.signupText}>
                      Login
                  </Text>
          </TouchableOpacity>
      
      </View>
      )
      
  

}

// ##how we connect to janet
// ##this export default collect will be in all functions that read data 
// ##connecting to janets reducers (state variables in cache) 
// ## this is the first two parts of the connect functions
// ## the second part of the connect function is to put in functions into janet we build these functions withing janet
export default connect(
    ({loginReducer}) => ({
      email: signupReducer.email,
      firstName: signupReducer.firstName,
      lastName: signupReducer.lastName,
      age: signupReducer.age,
      zipcode: signupReducer.zipcode,

    }),

     (dispatch, ownProps) => ({
		//  ##janet function this is how we access the functions within janet these are found in janet/app/scrrens/actions.js
      SETEMAIL: (email) => dispatch(actions.signup.SETEMAIL(email)),
	  // ##janet function this is how we access the functions within janet these are found in janet/app/scrrens/actions.js
	  SETFIRST: (firstName) => dispatch(actions.signup.SETEMAIL(firstName)),
    SignUserIn: () => dispatch(actions.singup.SignUserIn()),
      ...ownProps
    }),
  )(generalInformationScreen)
