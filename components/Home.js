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
import logo from './assets/logo.png'; 
import home from './assets/HOME.png';
import about from './assets/ABOUT.png';
import todo from './assets/TODO.png';
import calendar from './assets/CALENDAR.png';

export default function Home({ navigation }) {
  
  return (
<>
<View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image source={logo} style={styles.sideMenuProfileIcon} />
</View>

<View style={styles.container}>
<TouchableOpacity onPress={() => navigation.navigate('Home')}>
{/*Donute Button Image */}
      <Image source={home} style={styles.menu} />
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('About')}>
      <Image source={about} style={styles.menu} />
 </TouchableOpacity>
      
</View>

<View style={styles.container}>
<TouchableOpacity onPress={() => navigation.navigate('Todo')}>
{/*Donute Button Image */}
<Image source={todo} style={styles.menu} />
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
{/*Donute Button Image */}
<Image source={calendar} style={styles.menu} />
</TouchableOpacity>
      

      
</View>
</>
      
    
  );
}


const styles = StyleSheet.create({
 sideMenuProfileIcon: {
    marginBottom: 20,
    marginTop: 20,
    height: 120 ,
    width :120,
    borderRadius: 40,
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
  },
  menu: {
        height: 230,
        width :175,
  },
container: 
{
 flexDirection: 'row',
 alignItems: 'center', 
 }
 
});

