import React, { useEffect } from 'react';
import styles from '../../Styles/styles.js'
import { Text, View } from 'react-native';
import Cards from '../../../Components/Cards'
import { connect, actions} from '@cliqd/janet'


const Feed = ({ 
  navigation, 
  peopleCards,
  getUserCards,
}) => {

  useEffect(() => {
    getUserCards()  
  },[]);


useEffect(() => {
  console.log({peopleCards})
},[peopleCards])

    return (
      <View style={styles.CardIcons}>
          
        
        {/*
        <Cards />
        */}
      </View>
     
    );
  }

  export default connect(
    ({ userReducer })=>({
      peopleCards: userReducer.peopleCards,
    }),
    (dispatch, ownProps) => ({
      getUserCards: () => dispatch(actions.user.GetUserCards())

    })
)(Feed)
