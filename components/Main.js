import React, { Component } from 'react'
import { StyleSheet, Text, View,  FlatList, Alert, TouchableWithoutFeedback, Keyboard,Button, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalendarPicker from 'react-native-calendar-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Note from './Note';
import CustomSidebarMenu from './sideBar';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    };
  }
  render() {
    let note = this.state.noteArray.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deletenote(key)}
        />
      );
    });
    return (<>
      <View style={styles.container}>
        
        <ScrollView style={styles.scrollcontainer}>
          {note}
        </ScrollView>
        <View style={styles.footer}>
          <TextInput
            onChangeText={(noteText) =>
              this.setState({
                noteText,
              })
            }
            value={this.state.noteText}
            style={styles.textInput}
            placeholder="Enter a new Activity..."
            placeholderTextColor="white"
            underlineColorAndroid="transparent"></TextInput>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={this.addnote.bind(this)}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
</>
    );
  }
  addnote = () => {
    // alert('test');
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        date:  (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear(),
        'note':this.state.noteText
      });
      this.setState({noteArray:this.state. noteArray});
      this.setState({noteText: ''});
    }
  }
  deletenote = key => {
    this.state.noteArray.splice(key,1);
    this.setState({noteArray:this.state.noteArray})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#eb4d4b',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ff793f',
    borderBottomWidth: 10,
  },
  headertext: {
    color: '#1e272e',
    fontSize: 18,
    padding: 26,
  },
  scrollcontainer: {
    flex: 1,
    marginBottom: 50,
    backgroundColor: '#fffa65'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 15,
    backgroundColor: '#252525',
    borderTopWidth: 1.5,
    borderTopColor: '#ededed',
  },

  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 70,
    backgroundColor: '#eb4d4b',
    width: 60,
    height: 65,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 40,
  },
});
export default Main;