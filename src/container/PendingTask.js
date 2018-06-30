import React,{Component} from 'react';
import { View, Text, FlatList,AsyncStorage,TouchableHighlight } from "react-native";
import {Actions} from 'react-native-router-flux';
import { List, ListItem,SearchBar } from 'react-native-elements';
import {verticalScale} from '../components/Scaling';
import {connect} from 'react-redux';

 class PendingTask extends Component {

    constructor(props){
        super(props);
        this.state = { data: []
        }
    }

    componentDidMount(){
      AsyncStorage.getItem('Admin_Data').then((value)  => {
          console.log(value);
        let stored_data=JSON.parse(value)
        this.setState({data: stored_data.form_d
        });
          console.log(this.state.data);
      });
    }

    renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: "86%",
            backgroundColor: "#CED0CE",
            marginLeft: "14%"
          }}
        />
      );
    };
  
  
    renderFooter = () => {
      if (!this.state.loading) return null;
  
      return (
        <View
          style={{
            paddingVertical: 20,
            borderTopWidth: 1,
            borderColor: "#CED0CE"
          }}
        >
        </View>
      );
    };
    goToNextScreen= (comment1,file_url) => {
           Actions.incidentCapture({comment:comment1,file:file_url}); 
    }
        hideShowTabs=(item) =>{
            if(this.props.token1=="Finance"){
            if(item.category=="Finance Department"){
            return(<TouchableHighlight onPress={() => this.goToNextScreen(item.comments,item.file_url)}>
            <ListItem
              title={item.comments}
              hideChevron
            />
            </TouchableHighlight>
            )
                }
            }
            else if(this.props.token1=="Transport"){
                if(item.category=="Transport Department"){
                   return( <TouchableHighlight onPress={() => this.goToNextScreen(item.comments,item.file_url)}>
                    <ListItem
                      title={item.comments}
                      hideChevron
                    />
                    </TouchableHighlight>
                )
                        }
            }
        }
    render() {
      return (
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data}
          extraData={this.state}
          renderItem={({ item }) => (
            this.hideShowTabs(item)
          )}
          keyExtractor={item => item.comments}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
        />
      </List>
    );
    }
  }
  const mapStateToProps = state =>{
    console.log(state);
    return {
      token1:state.auth.token
  };
  }
  
  export default connect(mapStateToProps)(PendingTask);