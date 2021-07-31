import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, TextInput} from "react-native";
import { connect, actions} from '@cliqd/janet'
import { user } from '../../../../packages/Janet/dist/App/api.actions';

import styles from '../Styles/styles'

const NewActScreen = ({
    signUserUp,
    setFirst,
    setLast,
    setAge,
    setPhone,
    setEmail,
    setSex,
    setUserHeight,
    setEducation,
    setReligion,
    setPassword,
    firstName,
    lastName,
    age,
    email,
    phoneNumber,
    sex,
    userHeight,
    education,
    religion,
    password,
    currentUser,
    getCurrentUser,
}) => {


    console.log("Sign Up")

   

    const setCurrentUser = () =>{
        signUserUp()
    }
    return (
    <View style = {{ paddingTop: 100 }}>
       
        <Text>FirstName</Text>
        <TextInput placeholder="FirstName" onChangeText={(firstName) => setFirst(firstName)} value={firstName}/>
        <Text >Lastname</Text>
        <TextInput  placeholder="LastName" onChangeText={(lastName) => setLast(lastName)} value={lastName}/>
        <Text >Age</Text>
        <TextInput  placeholder="Age" onChangeText={(age) => setAge(age)} value={age}/>
        <Text >email</Text>
        <TextInput  placeholder="Email" onChangeText={(email) => setEmail(email)} value={email}/>
        <Text >phoneNumber</Text>
        <TextInput  placeholder="PhoneNumber" onChangeText={(phoneNumber) => setPhone(phoneNumber)} value={phoneNumber}/>
        <Text >sex</Text>
        <TextInput placeholder="Sex" onChangeText={(sex) => setSex(sex)} value={sex}/>
        <Text >userHeight</Text>
        <TextInput  placeholder="userHeight" onChangeText={(userHeight) => setUserHeight(userHeight)} value={userHeight}/>
        <Text >education</Text>
        <TextInput placeholder="Education" onChangeText={(education) => setEducation(education)} value={education}/>
        <Text >religion</Text>
        <TextInput  placeholder="Religion" onChangeText={(religion) => setReligion(religion)} value={religion}/>
        <Text>Password</Text>
        <TextInput placeholder="Password" onChangeText={(password) => setPassword(password)} value={password}/>
       
        <TouchableOpacity 
          onPress={() => {
            setCurrentUser()
          }}
          style={styles.loginContainter}>
                  <Text style={styles.loginText}>
                      Sign in user
                  </Text>
          </TouchableOpacity>
        
        
    </View>
    );
};


export default connect(
    ({signupReducer, userReducer})=>({
        firstName: signupReducer.firstName,
        lastName: signupReducer.lastName,
        age: signupReducer.birthDate,
        email: signupReducer.email,
        phoneNumber: signupReducer.phoneNumber,
        sex: signupReducer.sex,
        userHeight: signupReducer.userHeight,
        education: signupReducer.education,
        religion: signupReducer.religion,
        ethnicity: signupReducer.ethnicity, 
        password: signupReducer.password,
        currentUser: userReducer.currentUser,
    }),
    (dispatch, ownProps) => ({
        setFirst: (firstName) => dispatch(actions.signUp.SetFirst(firstName)),
        setLast: (lastName) => dispatch(actions.signUp.SetLast(lastName)),
        setAge: (age) => dispatch(actions.signUp.SetAge(age)),
        setPhone: (phoneNumber) => dispatch(actions.signUp.SetPhone(phoneNumber)),
        setEmail: (email) => dispatch(actions.signUp.SetEmail(email)),
        setSex: (sex) => dispatch(actions.signUp.SetSex(sex)),
        setUserHeight: (userHeight) => dispatch(actions.signUp.SetUserHeight(userHeight)),
        setEducation: (education) => dispatch(actions.signUp.SetEducation(education)),
        setReligion: (religion) => dispatch(actions.signUp.SetReligion(religion)),
        setPassword: (password) => dispatch(actions.signUp.SetPassword(password)),
        signUserUp: () => dispatch(actions.user.SignUserUp()),
       
    })
)(NewActScreen)
