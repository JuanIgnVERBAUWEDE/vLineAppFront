import React, {Component} from 'react';
import {AppRegistry, StyleSheet,Text,View,TextInput,Pressable, alert} from 'react-native'


export default class form extends Component {
    constructor(){
        super() 
        this.state = {
            partido: '',
            provincia: '',
            obrasocial: ''
        }
    }
    
    changePartido(partido) {
        this.setState({partido})
    }
    changeProvincia(provincia) {
        this.setState({provincia})
    }
    changeObraSocial(obrasocial) {
        this.setState({obrasocial})
    }

    buttonPressed() {
        if(this.state.obrasocial && this.state.provincia && this.state.partido) {
            alert.alert('Datos Cargados')
        } else {
            alert.alert('Debe completar todos los campos!')
        }

    }

    render () { 
        return( 
        <View style={styles.container}>
        <View>
            <Text style={styles.titulo}> Formulario del Cliente </Text>
        <TextInput 
            style={styles.input}
            placeholder="Partido"
            value={this.state.partido} 
            onChange={(partido) => this.changePartido(partido) } />
        <TextInput 
            style={styles.input}
            placeholder="Provincia"
            value={this.state.provincia} 
            onChange={(provincia) => this.changeProvincia(provincia) } />
        <TextInput 
            style={styles.input}
            placeholder="ObraSocial"
            value={this.state.obrasocial} 
            onChange={(obrasocial) => this.changeObraSocial(obrasocial) } />
        <Pressable
        style={styles.button}
        onPress={() => this.buttonPressed()} >
        <Text
        style={styles.textbutton}> Enviar </Text>
        </Pressable>
    </View>

    </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop:30,
        paddingLeft:15,
        paddingRight:15
    },
    button: {
        backgroundColor: 'skyblue',
        paddingTop:15,
        paddingBottom:15
    },
    textbutton: {
        textAlign:'center',
        color:'white' 
    },
    titulo:{
        textAlign:'center',
        fontSize:18,
        marginBottom:5
    },
    input: {
        height:40,
        borderColor:'#ccc',
        borderWidth:2,
        marginBottom:20
    },
    textarea: {
        height:60
    }
});

