import React,{Component} from 'react';
import {StyleSheet,View,Image,TextInput,Text,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {authActions} from '../actions';
import {Actions} from 'react-native-router-flux';

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            error:""
        }
    }
    submitButton(){
            if(this.state.username==""){
                this.setState({error:"Please enter the user Name"});
            }
            else if(this.state.password==""){
                this.setState({error:"Please enter the user password"});
            }
            else if(this.state.username=="Admin"){
                this.props.authActions('Admin');
                Actions.home();
                }
                else if(this.state.username=="User"){
                  this.props.authActions('User');
                  Actions.home();
                }
                else if(this.state.username=="Finance"){
                  this.props.authActions('Finance');
                  Actions.home();
                }
                else if(this.state.username=="Transport"){
                  this.props.authActions('Transport');
                  Actions.home();
                }
                else if(this.state.username=="Approver"){
                  this.props.authActions('Approver');
                  Actions.home();
                }  
                else{
                    this.setState({error:"User Name or password Not recognized"});
                }
    }
   
    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                placeholder="username"
                placeholderTextColor="#fff"
                underlineColorAndroid={'transparent'}
                style={styles.input}
                onSubmitEditing={()=>this.passwordInput.focus()}
                onChangeText={(text)=>this.setState({username:text})}
                />
                <TextInput 
                placeholder="password"
                placeholderTextColor="#fff"
                underlineColorAndroid={'transparent'}
                secureTextEntry
                ref={(input)=>this.passwordInput = input}
                onChangeText={(text)=>this.setState({password:text})}
                style={styles.input}/>
                <Text style={styles.error1}>{this.state.error}</Text>
                <TouchableOpacity style={styles.buttonStyle} onPress={this.submitButton.bind(this)}>
                        <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles=StyleSheet.create({
container:{
    padding:20
},
input :{
    height:40,
    backgroundColor:'#98c4e2',
    marginBottom:10,
    color:'#fff',
    paddingHorizontal:10
},
buttonStyle:{
    backgroundColor:"#2980b9",
    paddingVertical:15
},
buttonText:{
    textAlign:'center',
    color:'#ffffff',
    fontWeight:'700'
},
error1:{
    color:'red',
    textAlign:'center',
    marginBottom:10,
    marginTop:10
}
})

const mapStateToProps = state =>{
    console.log(state);
    return {
      token1:state.auth.token
  };
  }
  
  export default connect(mapStateToProps,{authActions})(LoginForm);