import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, TextInput} from "react-native";
import { connect, actions} from '@cliqd/janet'
import { user } from '../../../../packages/Janet/dist/App/api.actions';

import styles from '../Styles/styles'
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { setCurrentUser } from '@cliqd/janet/dist/App/Screens/user/actions';


const NewActScreen = ({
    signUserIn,
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
    setDescription,
    setHometown,
    setEthnicity,
    setFamily,
    setPolitics,
    setFuture,
    setSubstances,
    setMedia,
    setPets,
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
    hometown,
    ethnicity,
    description,
    family,
    politics,
    future,
    substances,
    media,
    pets,
    currentUser,
    getCurrentUser,
}) => {


    console.log("Sign Up")

   

    const setCurrentUser = () =>{
        signUserIn()
    }
    const navigation = useNavigation();
    return (
        <View styles={{ paddingTop: 100 }}>
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
            <Text>description</Text>
            <TextInput placeholder="Description" onChangeText={(description) => setPassword(description)} value={description}/>
            <Text>Password</Text>
            <TextInput placeholder="Password" onChangeText={(password) => setPassword(password)} value={password}/>
            <Button title='go to next page'
                onPress={()=> {navigation.navigate('Info')}}/>
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
        description: signupReducer.description,
        hometown: signupReducer.hometown,
        family: signupReducer.family,
        politics: signupReducer.politics,
        future: signupReducer.future,
        substances: signupReducer.substance,
        media: signupReducer.media,
        pets: signupReducer.pets,
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
        setDescription: (description) => dispatch(actions.signUp.setDescription(description)),
        setHometown: (hometown)=> dispatch(actions.signUp.setHometown(hometown)),
        setEthnicity: (ethnicity)=>dispatch(actions.signUp.setEthnicity(ethnicity)),
        setFamily: (family)=> dispatch(actions.signUp.setFamily(family)),
        setPolitics: (politics)=> dispatch(actions.signUp.setPolitics(politics)),
        setFuture: (future)=>dispatch(actions.signUp.setFuture(future)),
        setSubstances: (substances)=>dispatch(actions.signUp.setSubstances(substances)),
        setMedia: (media)=>dispatch(actions.signUp.setMedia(media)),
        setPets: (pets)=>dispatch(actions.signUp.setPets(pets)),
        signUserIn: () => dispatch(actions.user.SignUserIn()),
       
    })
)(NewActScreen)