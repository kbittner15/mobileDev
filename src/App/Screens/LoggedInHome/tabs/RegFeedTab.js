import React, { useEffect, useState, Fragment } from 'react';
import styles from '../../Styles/styles.js'
import { Text, View, TouchableOpacity } from 'react-native';
import Cards from '../../../Components/Cards'
import { connect, actions} from '@cliqd/janet'
import { render } from 'react-dom';


const Feed = ({ 
  navigation, 
  getUserCards,
  peopleCards,
}) => {


 
const like = card =>{
  try{
    console.log("Like")
  }
  catch(e){
    console.log("Ran out of cards.")
    alert("Ran out of cards.")
  }
}

const disLike = card => {
  try{
    console.log("Dislike")
  }
  catch(e){
    console.log("Ran out of cards.")
    alert("Ran out of cards.")
  }
}

let i = 0
useEffect(() => {
  getUserCards()  
},[]);

useEffect(()=>{
  if (!peopleCards){
    getUserCards()  
    i = i + 1
  }
}, [i])


    return (
      <Fragment>
    
        <View style={styles.CardIcons}>
        <TouchableOpacity onPress = {() => like()}
            style={styles.signupContainter}>
            <Text style={styles.signupText}>
                Like
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => disLike()}
            style={styles.loginContainter}>
            <Text style={styles.loginText}>
                Dislike
            </Text>
        </TouchableOpacity>
        </View>

            
      </Fragment>
     
    );
  }

  export default connect(
    ({ userReducer })=>({
      peopleCards: userReducer.peopleCards,
    }),
    (dispatch, ownProps) => ({
      getUserCards: () => dispatch(actions.user.GetUserCards()),
    })
  
)(Feed)
