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
import Main from './components/Main'
import Note from './components/Note';
import Calendar from './components/Calendar';
import CustomSidebarMenu from './components/sideBar';
import Home from './components/Home';
import About from './components/About';


const NavigationDrawerStructure = (props) => 
{
  const toggleDrawer = () => 
  {
    props.navigationProps.toggleDrawer();
  };
  
  return (
    <View style={{ flexDirection: 'row', marginLeft: 15 }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={30} color = 'white'/>
      </TouchableOpacity>
    </View>
  );
};





function HomeStack ({ navigation }) 
{
  return (
    <Stack.Navigator initialRouteName = "HomeStack">
      <Stack.Screen
        name = "Home"
        component = {Home}
        options =
        {{
          

          headerStyle:
          {
            backgroundColor: '#eb4d4b',
            shadowColor: '#646E78'
          },

          headerTintColor: '#ffffff',
          
        }}
      />
    </Stack.Navigator> 
  );
}

function AboutStack ({ navigation }) 
{
  return (
    <Stack.Navigator initialRouteName = "AboutStack">
      <Stack.Screen
        name = "About"
        component = {About}
        options =
        {{
          headerLeft: () => 
          (
            <NavigationDrawerStructure navigationProps = {navigation} />
          ),

          headerStyle:
          {
            backgroundColor: '#eb4d4b',
            shadowColor: '#646E78'
          },

          headerTintColor: '#ffffff',
          
        }}
      />
    </Stack.Navigator> 
  );
}


function TodoStack ({ navigation }) 
{
  return (
    <Stack.Navigator initialRouteName = "TodoStack">
      <Stack.Screen
        name = "To - Do List"
        component = {Main}
        options =
        {{
          headerLeft: () => 
          (
            <NavigationDrawerStructure navigationProps = {navigation} />
          ),

          headerStyle:
          {
            backgroundColor: '#eb4d4b',
            shadowColor: '#646E78'
          },

          headerTintColor: '#ffffff',
          
        }}
      />
    </Stack.Navigator> 
  );
}

function CalendarStack ({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="CalendarStack">
      <Stack.Screen
        name="Calendar"
        component={Calendar}
        options={{
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#eb4d4b', //Set Header color
            shadowColor: '#646E78',
          },
          headerTintColor: '#ffffff', //Set Header text color
          headerTitleStyle: {},
        }}
      />
      
    </Stack.Navigator>
  );
     
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


 function App() {
  return (
    
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#47597e',
          itemStyle: { marginVertical: 5 },
        }}

        
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({ focused, size }) => (
              <FontAwesome name="home" size={24} color="#fff" />
            ),
          }}
          component={HomeStack}
        />

        <Drawer.Screen
          name="About"
          options={{
            drawerLabel: 'About',
            drawerIcon: ({ focused, size }) => (
              <FontAwesome name="database" size={24} color="#fff" />
            ),
          }}
          component={AboutStack}
        />

        <Drawer.Screen
          name="Todo"
          options={{
            drawerLabel: 'To Do List',
            drawerIcon: ({ focused, size }) => (
              <Entypo name="clipboard" size={24} color="#fff" />
            ),
          }}
          component={TodoStack}
        />
      
        <Drawer.Screen
          name="Calendar"
          options={{
            drawerLabel: 'Calendar',
            drawerIcon: ({ focused, size }) => (
               <FontAwesome name="calendar" size={24} color="#fff" />
            ),
          }}
          component={CalendarStack}
        />
      </Drawer.Navigator>


    </NavigationContainer>

  );
}

export default  App;




//###################################################################################





