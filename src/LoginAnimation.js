import React, { Component } from 'react';

import AuthScreen from './container/Authscreen/index';
import HomeScreen from './container/Homescreen/index';
import {connect} from 'react-redux';
import {authActions} from './actions';
import {Actions} from 'react-native-router-flux';

/**
 * The root component of the application.
 * In this component I am handling the entire application state, but in a real app you should
 * probably use a state management library like Redux or MobX to handle the state (if your app gets bigger).
 */

export class LoginAnimation extends Component {
  constructor(props){
    super(props);
  }
  state = {
    isLoggedIn: false, // Is the user authenticated?
    isLoading: false, // Is the user loggingIn/signinUp?
    isAppReady: false // Has the app completed the login animation?
  }

  /**
   * Two login function that waits 1000 ms and then authenticates the user succesfully.
   * In your real app they should be replaced with an API call to you backend.
   */

  _simulateLogin = (username, password) => {
    this.setState({ isLoading: true })
    //add your app level here
    
    if(username=="Admin"){
    this.props.authActions('Admin');
    setTimeout(() => this.setState({ isLoggedIn: true, isLoading: false }), 1000)
    Actions.home();
    }
    if(username=="User"){
      this.props.authActions('User');
      setTimeout(() => this.setState({ isLoggedIn: true, isLoading: false }), 1000)
      Actions.home();
    }
    if(username=="Finance"){
      this.props.authActions('Finance');
      setTimeout(() => this.setState({ isLoggedIn: true, isLoading: false }), 1000)
      Actions.home();
    }
    if(username=="Transport"){
      this.props.authActions('Transport');
      setTimeout(() => this.setState({ isLoggedIn: true, isLoading: false }), 1000)
      Actions.home();
    }
    if(username=="Approver"){
      this.props.authActions('Approver');
      setTimeout(() => this.setState({ isLoggedIn: true, isLoading: false }), 1000)
      Actions.home();
    }   
  }

  _simulateSignup = (username, password, fullName) => {
    this.setState({ isLoading: true })
    setTimeout(() => this.setState({ isLoggedIn: true, isLoading: false }), 1000)
  }

  /**
   * Simple routing.
   * If the user is authenticated (isAppReady) show the HomeScreen, otherwise show the AuthScreen
   */

  render () {
      return (
        <AuthScreen
          login={this._simulateLogin.bind(this)}
          signup={this._simulateSignup}
          isLoggedIn={this.state.isLoggedIn}
          isLoading={this.state.isLoading}
          onLoginAnimationCompleted={() => this.setState({ isAppReady: true })}
        />
      )
  }
}

const mapStateToProps = state =>{
  console.log(state);
  return {
    token1:state.auth.token
};
}

export default connect(mapStateToProps,{authActions})(LoginAnimation);