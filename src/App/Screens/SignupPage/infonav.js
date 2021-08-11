import React from 'react'
import { View,Text,Button,TouchableOpacity,Image,StyleSheet,TextInput } from 'react-native';

const infonav({navigation}){
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