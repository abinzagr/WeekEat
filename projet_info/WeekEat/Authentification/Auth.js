import React from 'react';
import { StyleSheet, Text, View , TextInput,TouchableOpacity,ScrollView,InputField} from 'react-native';
import fire from '../Components/Firebase';
import * as firebase from "firebase";
export default class Auth extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
        mail:'',
        pass:'',
    })
  }
  inscription = (mail,pass) =>{
try{
    if(this.state.pass.length<6){
        alert("6 caractères mininum sont récquis")
    }
    firebase.auth().createUserWithEmailAndPassword(mail,pass)
}
catch{
    console.log("Echec de l'inscription");
}
  }
  
  connexion = (mail,pass) => {
    try{
        if(this.state.pass.length<6){
            alert("6 caractères mininum récquis")
        }
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(mail,pass).then(function(user){console.log(user)})
    }
    catch{
        console.log("Error de connection");
    }
}
 /* onPress = () => {
    this.props.navigation.navigate('Inscription');
  };*/
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
      <Text style={styles.MessageProfile_text}>Connectez-vous pour continuer</Text>
      <ScrollView style={styles.ScrollView}>
        <TextInput
         //autoCorrect='false'
         style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
         onChangeText={(mail)=>this.setState({mail})}
        placeholder='E-mail'
        placeholderTextColor = 'black'
        />
        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
        onChangeText={(pass)=>this.setState({pass})}
        placeholder='Mot de passe'
        secureTextEntry={true}
        placeholderTextColor = 'black'
        
        />
        </ScrollView>
        <TouchableOpacity style={styles.buttonCon}
        onPress={()=>this.connexion(this.state.mail,this.state.pass)}>
            <Text style={styles.buttonTextCon}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonIns}
        onPress={()=>this.props.navigation.navigate('Inscription')}> 
            <Text style={styles.buttonTextIns}>Inscription</Text>
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
  MessageProfile_text:{
    fontSize:30,lineHeight:50,
      fontWeight: 'bold',
      paddingHorizontal: 5,
      color:'black',
      textAlign:'center'
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
    paddingVertical: 20,
    borderRadius:25 ,
    fontSize:16,
    paddingHorizontal: 30, color:'black',
    marginVertical:10,
    borderBottomWidth:1,
    paddingBottom:5,
    paddingTop:5
  },
  buttonCon:{
    backgroundColor:'rgb(255,90,95)',
    width:300,
    borderRadius:25 ,
    marginVertical:10,
    marginTop:10
    
  },
  buttonIns:{
    backgroundColor:'rgb(66,103,178)',
    width:300,
    borderRadius:25 ,
    marginVertical:10,
    marginTop:10
    
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
  buttonTextCon:{
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center',
      paddingVertical: 13
      
  },  buttonTextIns:{
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center',
    paddingVertical: 13
    
}
});
