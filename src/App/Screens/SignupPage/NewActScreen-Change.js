import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, TextInput} from "react-native";
import { connect, actions} from '@cliqd/janet'
import { user } from '../../../../packages/Janet/dist/App/api.actions';

import styles from '../Styles/styles'
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import { setCurrentUser } from '@cliqd/janet/dist/App/Screens/user/actions';

const Stack = createStackNavigator()
function NewPic({navigation}){
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
                onPress={()=> {navigation.navigate('Home')}}/>
        </View>
    );
}
function Home({navigation}){
    return(
        <View styles={{paddingTop:100}}>
             <Text >sex</Text>
             <TextInput placeholder="Sex" onChangeText={(sex) => setSex(sex)} value={sex}/>
             <Text >userHeight</Text>
             <TextInput  placeholder="userHeight" onChangeText={(userHeight) => setUserHeight(userHeight)} value={userHeight}/>
             <Text >education</Text>
             <TextInput placeholder="Education" onChangeText={(education) => setEducation(education)} value={education}/>
             <Text>hometown</Text>
             <TextInput placeholder="Hometown" onChangeText={(hometown) => setPassword(hometown)} value={hometown}/>
             <Text>ethnicity</Text>
             <TextInput placeholder="Ethnicity" onChangeText={(ethnicity) => setPassword(ethnicity)} value={ethnicity}/>
             <Button title='go to next page'
                onPress={()=>{navigation.navigate('Questions')}}/>

        </View>
    );
}
function Questions({navigation}){
    return(
        <View>
             <Text>family</Text>
             <TextInput placeholder="Family" onChangeText={(family) => setPassword(family)} value={family}/>
             <Text>politics</Text>
             <TextInput placeholder="Politics" onChangeText={(politics) => setPassword(politics)} value={politics}/>
             <Text>future</Text>
             <TextInput placeholder="Future" onChangeText={(future) => setPassword(future)} value={future}/>
             <Text>substances</Text>
             <TextInput placeholder="Substances" onChangeText={(substances) => setPassword(substances)} value={substances}/>
             <Text>media</Text>
             <TextInput placeholder="Media" onChangeText={(media) => setPassword(media)} value={media}/>
             <Text>pets</Text>
             <TextInput placeholder="Pets" onChangeText={(pets) => setPassword(pets)} value={pets}/>
             <Text>religion</Text>
             <TextInput  placeholder="Religion" onChangeText={(religion) => setReligion(religion)} value={religion}/>
            <Button title ='sign up '
                onPress={()=>{setCurrentUser()}}/>
        

        </View>
    );
}

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
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Picture'>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Picture' component={NewPic}/>
                <Stack.Screen name='Questions' component={Questions}/>
            </Stack.Navigator>
        </NavigationContainer>
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