import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './Authentification/Auth';
import Inscription from "./Authentification/Inscription";
import InscriptionEmail from "./Authentification/InscriptionEmail";
import Propose from "./SuggestFood/Propose";
/*import Login from './Login/Login';
import Form from "./Components/Form";*/
import {createStackNavigator, createAppContainer} from 'react-navigation';

// Create the navigator
const MainNavigator = createStackNavigator({
  Propose:{screen: Propose},
  Auth:{screen:Auth},
  Inscription: { screen: Inscription },
  InscriptionEmail: { screen: InscriptionEmail },
  
});
// Export it as the root component
const App = createAppContainer(MainNavigator);
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255)'
  },
});
