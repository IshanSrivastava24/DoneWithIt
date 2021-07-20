import React from 'react';
import { View } from 'react-native';

import Card from './app/components/Card';
import ListingDetailsScreen from './app/screen/ListingDetailsScreen';
import ViewImageScreen from './app/screen/ViewImageScreen';
import MessagesScreen from './app/screen/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screen/AccountScreen';
import ListingScreen from './app/screen/ListingScreen';
import AppTextInput from './app/components/AppTextInput';

export default function App() {
  
  return (
    <Screen>
      <AppTextInput placeholder= "Username " icon = 'email' />
    </Screen>
  ); 
}


