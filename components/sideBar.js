import React from 'react';
import logo from './assets/logo.png'; 

import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';


const CustomSidebarMenu = (props) => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#eb4d4b' }}>
      {/*Top Large Image */}
      <Image source={logo} style={styles.sideMenuProfileIcon} />
      
      <View style={styles.sidebarDivider}></View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
   sideMenuProfileIcon: {
    marginTop: 40,
    marginBottom: 40,
    height: 120 ,
    width :120,
    borderRadius: 40,
    alignSelf: 'center',
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
  },
  textstyle: {
    alignSelf: 'center',
    marginTop:15,
    fontSize: 20,
    color: '#ffffff',
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
  },
  textsub: {
    alignSelf: 'center',
    marginTop:10,
    fontSize: 11,
    color: '#ffffff',
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
  },
  sidebarDivider:{
    marginTop:10,
    height:1,
    width:"100%",
    backgroundColor:"#D3D3D3",
    marginVertical:5,
  }
});

export default CustomSidebarMenu;
