import React from 'react';
import { StyleSheet, Text, View , StatusBar} from 'react-native';
import Logo from './Connexion'
import Form from '../Components/Form'
export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      
      <Text style={styles.WeekEat_text}>WeekEat</Text>  
       <Form/>
       <View style={styles.signupTextCont}>
       <Text style={styles.signupText}>Vous n'avez pas encore de compte ? </Text>
       <Text style={ styles.signupButton}>inscrivez-vous </Text></View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  comp:{
    alignItems:'center',
    justifyContent:'center'
  },
  signupTextCont:{
    flex: 1,
    alignItems:'flex-end',
    justifyContent:'center',
 
   flexDirection:'row',
   

  },
  WeekEat_text:{
    backgroundColor: 'rgb(235,235,235)',
    fontWeight: 'bold',
    color:'black',
    textAlign: 'center'
 },
 signupText:{
   color:'black',
   fontSize:12
 },
 signupButton:{
   color:'blue',
   fontSize:12,
  
 }
});
