import React from 'react';
import { View,Text,Button,TouchableOpacity,Image,StyleSheet,TextInput } from 'react-native';

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