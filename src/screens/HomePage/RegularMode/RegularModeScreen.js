import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Messages from './tabs/RegMessagesTab.js'
import Feed from './tabs/RegFeedTab.js'
import Profile from './tabs/RegProfileTab.js'
import Matches from './tabs/RegMatchesTab.js'
import Tabs from '../../../Components/BottomTabs/Index'






const HomeScreen = ({ navigation }) => {
  return (
    
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default HomeScreen;