import React,{Component} from 'react';
import {StyleSheet,View,Image,Text} from 'react-native';
import LoginForm from './LoginForm';
export default class Login extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source ={require('../images/logo.png')} />
                    <Text style={styles.title}>An app Built to Manage your Incidents</Text>
                </View>
                <View style={styles.formContainer}>
                <LoginForm />
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#fff'
},
logoContainer:{
    alignItems:'center',
    flexGrow:1,
    justifyContent:'center'
},
logo:{
    width:100,
    height:100
},
title:{
    color:'#006DB7',
    marginTop:10,
    width:160,
    textAlign:'center'
}
})