import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput,
    CheckBox,
    StatusBar
} from 'react-native';

export default class registerForm extends Component{
    
 
  constructor(){
    super();
    this.form ={
      firstName: '',
      lastName: '',
      retired: false,
      pregnant: false,
      disability: false,
      chronicDisease: false
    };
 }

  changeFirstName(firstName){
    this.setState({firstName});
    this.form.firstName = firstName;
      alert("firstName " + this.form.firstName);
  }
  changeLastName(lastName){
    this.setState({lastName});
    this.form.lastName = lastName;
      alert("lastName " + this.form.lastName);
  }

  changeRetired(){
      this.setState({
        retired: !this.form.retired
      });
      this.form.retired = !this.form.retired;
      alert("retired " + this.form.retired);
  }

  changePregnant(){
    this.setState({pregnant: this.form.pregnant});
    this.form.pregnant = !this.form.pregnant;
      alert("pregnant " + this.form.pregnant);
  }
  changeDisability(){
    this.setState({disability: this.form.disability});
    this.form.disability = !this.form.disability;
      alert("disability " + this.form.disability);
  }

  changeChronicDisease(){
    this.setState({chronicDisease: this.form.chronicDisease});
    this.form.chronicDisease = !this.form.chronicDisease;
      alert("chronicDisease " + this.form.chronicDisease);
  }

  onPressButton() {  
    alert('You clicked the button!')  ;
  }  

  render() {  
    return ( 
      <View style={styles.container}>
        <View>
          <View style={styles.divInput}>
            <TextInput placeholder="Nombre" 
            style={styles.input}
            value={this.form.firstName.value} 
            onChangeText={(firstName) => this.changeFirstName(firstName)}
            />
          </View>
          
          <View style={styles.divInput}>
            <TextInput placeholder="Apellido" 
            style={styles.input}
            value={this.form.lastName.value}  
            onChangeText={(lastName) => this.changeLastName(lastName)}
            />
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox 
              placeholder="Es jubilado/a"
              value={this.form.retired}
              onChange={() => this.changeRetired()}
            />
            <Text style={styles.label}>Es Jubilado/a</Text>
          </View>

          <View style={styles.checkboxContainer}>
            <CheckBox 
              value={this.form.pregnant}
              onChange={() => this.changePregnant()}
             />
            <Text style={styles.label}>Esta embarazada</Text>
          </View>

          <View style={styles.checkboxContainer}>
            <CheckBox
                value={this.form.disability}
                checked={this.form.disability}
                onChange={() => this.changeDisability()}
              />
            <Text style={styles.label}>Posee alguna Discapacidad?</Text>
          </View>

          <View style={styles.checkboxContainer}>
            <CheckBox 
              value={this.form.chronicDisease}
              onChange={() => this.changeChronicDisease()}
              />
              <Text style={styles.label}>Posee alguna Enfermedad Crónica?</Text>
          </View>

            <TouchableOpacity 
              style={styles.button}
              onPress={this.onPressButton}
            >
            <Text style={styles.textButton}>Enviar</Text>
            </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      </View>
    )
  } 

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  divInput:{
    padding:15
  },
  label: {
    margin: 1,
    fontSize: 20
  },

  checkboxContainer: {
    flex: 0.2,
    width: 280,
    flexDirection: "row",
    marginBottom: 1,
    paddingLeft: 10,
    paddingRight: 15,
    paddingTop:1,
    padding: 15,
  },

  checkbox: {
    alignSelf: "center",
  },

  button: {
    backgroundColor: 'skyblue',
    paddingTop: 15,
    paddingBottom: 15
  },

  textButton: {
    textAlign: 'center',
    color: 'white'
  },

  input: {
    width: 280,
    padding: 10,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'lightgray',
  },

});