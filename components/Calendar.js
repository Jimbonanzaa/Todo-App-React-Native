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
import Main from './Main'
import Note from './Note';
import CustomSidebarMenu from './sideBar';



export class Calendar extends Component {
 constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange}
        />

        <View>
          <Text>{'\n'}SELECTED DATE: </Text>
             <MaterialCommunityIcons name = 'calendar' size = {18} color = '#333'/> 
           <Text> { startDate }{'\n'} </Text>
        </View>
      </View>
    );
  }
}

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
});
