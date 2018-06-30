import React,{Component} from 'react';
import {Text,View,ScrollView,TextInput,PixelRatio,TouchableOpacity,Image,AsyncStorage} from 'react-native';
import {verticalScale} from '../components/Scaling';
import ImagePicker from 'react-native-image-picker';
import InputArea from '../components/InputArea';
import DropDown from '../components/DropDown';
import {Actions} from 'react-native-router-flux';

class IncidentCapture extends Component{
    constructor(props){
        super(props);
        this.state={
            imageSelected:'',
            ImageSource:null,
            comments:'',
            category:'Finance Department'
        }
    }
    componentWillMount(){
       /* AsyncStorage.removeItem("form_Data").then(()=>{
        });*/
        console.log(this.props);
    }
    onButtonPress(){
        console.log(this.props.comment);
        console.log(this.props.file);
        let form_detail={};
        if(this.props.file!==null){
            form_detail['file_url']=this.props.file;
            }
            else{
              form_detail['file_url']=1;
            }
            form_detail['comments']=this.props.comment;
            form_detail['category']=this.state.category;
            console.log(form_detail);
            let details={form_d:[]};
            console.log(details);

            AsyncStorage.getItem('Admin_Data').then((value)  => {
                console.log(value);
                if(value !=undefined){ 
                  console.log(value);
                  details.form_d=value;
                  console.log(details);
                  details = JSON.parse(details.form_d);
                  console.log(typeof(details));
                  details.form_d.push(form_detail);
                  console.log(details);
                  AsyncStorage.setItem('Admin_Data', JSON.stringify(details)).then(json => console.log('success!')).catch(error => console.log('error!'));
                 AsyncStorage.getItem('Admin_Data').then((value)  => console.log(value)); 
              }
              else{
                details.form_d.push(form_detail);
                console.log(details);
                AsyncStorage.setItem('Admin_Data', JSON.stringify(details)).then(json => console.log('success!')).catch(error => console.log('error!'));
               AsyncStorage.getItem('Admin_Data').then((value)  => console.log(value)); 
              }
             });
           Actions.home();  
    }
    _comments(value){
        console.log(value);
        this.setState({comments:value});
    }
    _onValChange = (value) =>{
        console.log(value);
        this.setState({category:value});
    }
    render(){
        return(
            <ScrollView style={{backgroundColor:"white"}}>
                <Text style={styles.labelStyle}>Upload Evidence</Text>
                <TouchableOpacity>
                <View style={styles.ImageContainer}>
                <Image style={styles.ImageContainer} source={{ uri:this.props.file }}/>
                </View>
                </TouchableOpacity>
                <InputArea
                label="Comments"
                placeholder="Please enter your comments"
                value= {this.props.comment}
                numberOfLines={100}
                multiline={true}
                />
                <DropDown value={this.state.category} onValChange={this._onValChange.bind(this)}/>
                <TouchableOpacity onPress = {this.onButtonPress.bind(this)} style={styles.ButtonStyle} >
                <Text style={styles.TextStyle}>
                Submit
                </Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles= {
    labelStyle: {
      fontSize: verticalScale(16),
      paddingLeft: verticalScale(20),
      color:'#006DB7',
      fontWeight: 'bold',
      marginTop:verticalScale(35),
      marginBottom:verticalScale(10)
    },
    TextStyle: {
      paddingTop: verticalScale(10),
      paddingBottom: verticalScale(10),
      paddingLeft: verticalScale(20),
      color:'black',
      fontWeight: 'bold',
  },
  ImageContainer: {
      borderRadius: 10,
      width: verticalScale(100),
      height: verticalScale(100),
      borderColor: '#9B9B9B',
      borderWidth: 1 / PixelRatio.get(),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
      margin:verticalScale(25)
    },
    ImageContainer1: {
    },
    textOnImage:{
      paddingLeft: verticalScale(10),
      paddingRight: verticalScale(10),
      color:'#006DB7',
      fontSize:20
    },
    ImageTextContainer:{
      borderRadius: 4,
      width: verticalScale(100),
      height: verticalScale(30),
      borderColor: '#979797',
      borderWidth: 1 / PixelRatio.get(),
      marginTop:verticalScale(35),
      marginBottom:verticalScale(10),
      marginLeft:verticalScale(30),
      backgroundColor:'#F5F5F5',
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
    }
  }

export default IncidentCapture;

