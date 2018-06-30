import React,{Component} from 'react';
import {Scene,Router,Actions} from 'react-native-router-flux';
import LoginAnimation from '../src/LoginAnimation';
import HomeScreen from '../src/container/Homescreen';
import Navbar from '../src/components/Navbar';
import incidentForm from '../src/container/IncidentForm';
import incidentList from '../src/container/IncidentList';
import incidentCapture from '../src/container/IncidentCapture';
import pendingTask from '../src/container/PendingTask';
import Login from '../src/components/Login';

const RouterComponent = () =>{
return(
    <Router>
    <Scene key="auth">
    <Scene 
    key="login" 
    component={LoginAnimation} 
    hideNavBar={true}   
    />
    <Scene 
    key="home" 
    component={HomeScreen} 
    navTransparent={1}
    navBar={Navbar}
    title="Report an Incident"
    />
    <Scene 
    key="form" 
    component={incidentForm} 
    navTransparent={1}
    navBar={Navbar}
    />
    <Scene 
    key="incidentList"
    component={incidentList} 
    navTransparent={1}
    navBar={Navbar}
    />
    <Scene 
    key="incidentCapture"
    component={incidentCapture} 
    navTransparent={1}
    navBar={Navbar}
    />
    <Scene 
    key="pendingTask"
    component={pendingTask} 
    navTransparent={1}
    navBar={Navbar}
    />
    <Scene 
    key="login"
    component={Login} 
    hideNavBar={true}
    initial
    />
    </Scene>
    </Router>
);
}

export default RouterComponent;