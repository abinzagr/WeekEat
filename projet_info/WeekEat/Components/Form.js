import React from 'react';
import { StyleSheet, Text, View , TextInput,TouchableOpacity,ScrollView,InputField} from 'react-native';
export default class Form extends React.Component {
  constructor(props){
    super(props);
  }
  onPress = () => {
    this.props.navigation.navigate('Inscription');
  };
  showPass(){
    //this.setState({secureInput: !this.state.secureInput});
  }
  static navigationOptions = {
    title: 'WeekEat',
  };
  render() {
    //const {secureInput}=this.state;
    return (
      <View style={styles.container}> 
      <ScrollView style={styles.ScrollView}>
        <TextInput
         //autoCorrect='false'
         style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
        placeholder='E-mail'
        placeholderTextColor = 'black'
       
        />
       
        
        
        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
        placeholder='Mot de passe'
        secureTextEntry={true}
        placeholderTextColor = 'black'
        
        />
        </ScrollView>
        <TouchableOpacity style={styles.button}
        onPress={this.onPress}>
            <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
    
    
  },
  ScrollView:{
    paddingLeft: 30,
    paddingRight:30,
    paddingTop:20,
    flex:1,
  },
  inputBox:{
    backgroundColor: 'rgba(255,255,255,0.3)',
    color:'black',
    width:300,
    paddingVertical: 13,
    borderRadius:25 ,
    fontSize:16,
    paddingHorizontal: 20, color:'black',
    marginVertical:10,
    borderBottomWidth:1,
    paddingBottom:5,
    paddingTop:5
  },
  button:{
    backgroundColor:'rgb(255,90,95)',
    width:300,
    borderRadius:25 ,
    marginVertical:10,
    
  },
  show:{
    color:'black',
    paddingVertical: 13,
    borderRadius:25 ,
    fontSize:16,
    paddingHorizontal: 20, color:'black',
    marginVertical:10,
    paddingBottom:5,
    paddingTop:5
  },
  buttonText:{
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center',
      paddingVertical: 13
      
  }
});
