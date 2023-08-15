import React, { Component } from 'react'
import { StyleSheet, Text, View,  FlatList, Alert, TouchableWithoutFeedback, Keyboard,Button, ScrollView, TextInput, TouchableOpacity, Image, SafeAreaView, } from 'react-native'
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
import Calendar from './Calendar';
import CustomSidebarMenu from './sideBar';
import Home from './Home';
import dp from './assets/dp.jpg';



export class About extends Component 
{
    
    render()
    {

    return(
      <>
      
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image source={dp} style={styles.sideMenuProfileIcon} />
      </View>

      <Text style={styles.container}>
        Hi! My name is JIMBO CARLO DELFIN and I created this To Do Application, Check To Do App, to showcase my React Native Abilities and Learnings. I'm an aspiring IT Student from Technological University of the Philippines. 
      </Text>

      </>
       );
    }
}
export default About;

const styles = StyleSheet.create({
  
   sideMenuProfileIcon: {
    margin: 30,
    height: 200,
    width : 200,
    borderRadius: 20,
    alignSelf: 'center',  
  },
  container: {
    textAlign: 'justify',
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
     color: '#1e272e',
    fontSize: 18,
    padding: 26,
  }
  });