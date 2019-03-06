import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';

export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}> 
        <Text style={styles.MessageProfile_text}>Connectez-vous pour continuer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent:'flex-end',
    alignItems: 'center'
    
  },
  VotreProfil_text:{
    fontSize:20,lineHeight:36,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    color:'black',
    
 },
 MessageProfile_text:{
  fontSize:30,lineHeight:36,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    color:'black',
    textAlign:'center'
},

});
