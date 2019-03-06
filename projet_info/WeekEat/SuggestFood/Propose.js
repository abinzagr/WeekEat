import React from 'react';
import { StyleSheet, Text, View , TextInput,TouchableOpacity,ScrollView,InputField,Picker} from 'react-native';
import fire from '../Components/Firebase';
import * as firebase from "firebase";
class UselessTextInput extends React.Component {
    render() {
      return (
        <TextInput
          {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
          editable = {true}
          maxLength = {40}
        />
      );
    }
  }
class UselessTextInputMultiline extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: 'Useless Multiline Placeholder',
      };
    }
}  

export default class Propose extends React.Component {
  constructor(props){
    super(props);
   
    }
    static navigationOptions = {
        headerTitleStyle:{textAlign: 'center',flex:1},
        title: 'Proposer votre repas',
      };
      state = {typePlat: '',
    conso:''}
      ModifPlat= (typePlat) => {
         this.setState({ typePlat: typePlat })
      }
      ModifConso= (conso) => {
        this.setState({ conso: conso })
     }
  render() {
    return (
      <View style={styles.container}> 
      <View><Text style={styles.Repas_text}>Informations générales</Text>
      <Text style={{marginLeft: 5,
    marginRight: 5,fontWeight: 'bold',}}>Titre de votre repas</Text>
      <TextInput style={styles.textinputTitre} placeholder='Exemple: Paella'
     />
    <Text style={{marginLeft: 5,
    marginRight: 5,fontWeight: 'bold',}}>Description de votre repas</Text>
     <UselessTextInput
     style={styles.textinputDesc}
         multiline = {true}
         numberOfLines = {4}
         placeholder='Decrivez votre repas en quelques lignes'
         onChangeText={(text) => this.setState({text})}
         
       />
        <Text style={{marginLeft: 5,
    marginRight: 5,fontWeight: 'bold',}}>Importer des photes de votre plat (jusqu'à 3 photos autorisées)</Text>
      </View>
     
      <Text style={{marginLeft: 5,
    marginRight: 5,fontWeight: 'bold',}}>La spécialité de votre plat</Text>
    <Picker selectedValue = {this.state.typePlat} onValueChange = {this.ModifPlat} >
               <Picker.Item label = "Française" value = "française" />
               <Picker.Item label = "Italienne" value = "italienne" />
               <Picker.Item label = "Espagnole" value = "espagnole" />
               <Picker.Item label = "Portugaise" value = "portugaise" />
               <Picker.Item label = "Espagnole" value = "espagnole" />
               <Picker.Item label = "Maghrebine" value = "maghrebine" />
               <Picker.Item label = "Africaine" value = "africaine" />
               <Picker.Item label = "Autre" value = "autre" />
            </Picker>
     <Text style={{marginLeft: 5,
    marginRight: 5,fontWeight: 'bold',}}>Prix/personne</Text>
      <TextInput style={styles.textinputTitre} placeholder='0.00€'
     />
     <Text style={{marginLeft: 5,
    marginRight: 5,fontWeight: 'bold',}}>A consommer</Text>
     <Picker selectedValue = {this.state.conso} onValueChange = {this.ModifConso} >
               <Picker.Item label = "Sur place" value = "place" />
               <Picker.Item label = "A emporter" value = "emporter" />
            </Picker>
      <View><Text style={styles.Repas_text}>Côté pratique </Text></View>
      
      </View>
    );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  DropPlat: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red'
 },
  textinputTitre:{
    marginLeft: 5,
    marginRight: 12,
    height: 40,
    borderColor: 'grey',
    borderWidth: 0.7,
    paddingLeft: 10,
    borderRadius:10 ,
    marginVertical:7,
    width:300,
},
 textinputDesc:{
    marginLeft: 5,
    marginRight: 12,
    height: 70,
    borderColor: 'grey',
    borderWidth: 0.7,
    paddingLeft: 10,
    borderRadius:10 ,
    marginVertical:7,
    width:300,
},

  Repas_text:{
    fontSize:20,lineHeight:20,
    fontWeight: 'bold',
    paddingHorizontal: 3,
    paddingHorizontal: 7, color:'black',
    marginVertical:10,
    borderBottomWidth:0.7,
    marginLeft: 0.7,
   
    width:228,
    
 },

});
