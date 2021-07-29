import * as React from 'react';
import styles from '../../Styles/styles.js'
import { Text, View, TouchableOpacity } from 'react-native';
import { connect, actions } from '@cliqd/janet'

const Profile = ({ navigation, currentUser, logOutUser }) =>  {

  // console.log({old:currentUser})

  const logOut = () => {

    logOutUser()
    clearPassword()
    console.log({logOut: currentUser})
  }
  return (
      <View style={styles.toolBarIcons}>
        <Text>Profile!</Text>
        <TouchableOpacity onPress = {() => logOut()}
            style={styles.signupContainter}>
            <Text style={styles.signupText}>
                Log Out
            </Text>
        </TouchableOpacity>
      </View>
    );
  }


  export default connect(
    ({loginReducer, userReducer}) => ({
      currentUser: userReducer.currentUser,
    }),
     (dispatch, ownProps) => ({
      logOutUser: () => dispatch(actions.user.setCurrentUser()),
      clearEmail: () => dispatch(actions.login.SetEmail()),
      clearPassword: () => dispatch(actions.login.SetPassword()),
      ...ownProps
    }),
  )(Profile)