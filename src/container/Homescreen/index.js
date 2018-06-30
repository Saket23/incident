import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity,Text, Keyboard} from 'react-native'
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import CustomButton from '../../components/CustomButton'

/**
 * Just a centered logout button.
 */
class HomeScreen extends Component {
   onActualPress(){
    console.log(1);
    Actions.form();
  }
  componentWillMount(){
    Keyboard.dismiss;
    console.log(Keyboard.dismiss);
  }
  adminRights(){
    console.log(this.props.token1);
    if(this.props.token1=="Admin"){
        return(<Text style={styles.BandStyle} onPress = {()=>{Actions.incidentList({title: 'Incident Lists'})}} >
          View events reported
          </Text>);
    }
  }
  pendingTasks(){
    if(this.props.token1=="Finance" || this.props.token1=="Transport"){
      return(<Text style={styles.BandStyle} onPress = {()=>{Actions.pendingTask({title: 'Pending Tasks'})}} >
        View pending Tasks
        </Text>);
  }
  else if(this.props.token1=="Approver")
  { 
    return(<Text style={styles.BandStyle} onPress = {()=>{Actions.pendingTask({title: 'Pending Tasks'})}} >
        View pending Tasks
        </Text>);
  }
  }

  render () {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress = {this.onActualPress.bind(this)} style={styles.ButtonStyle} >
      <Text style={styles.TextStyle}>
      Report new incident
      </Text>
      </TouchableOpacity>
      {this.adminRights()}
      {this.pendingTasks()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:'white'
  },
  button: {
    backgroundColor: '#1976D2',
    margin: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  TextStyle:{
    fontSize: 28,
    textAlign: 'center',
    margin: 10, 
    color:'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4
  },
  ButtonStyle: {
    backgroundColor: '#006DB7',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 120,
    paddingTop:25,
    paddingBottom:25
},
BandStyle:{
  fontSize: 20,
  textAlign: 'center',
  margin: 1, 
  color:'#006DB7',
  fontWeight:'500'
}
})


const mapStateToProps = state =>{
  console.log(state);
  return {
    token1:state.auth.token
};
}

export default connect(mapStateToProps)(HomeScreen);
