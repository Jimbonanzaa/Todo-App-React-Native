import React, { Component } from 'react'
import { Text, View,StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export class Note extends Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.note}>
            <Text style={styles.notetext}>
                {
                    this.props.val.date 
                }
            </Text>
           
            <Text style={styles.notetext}>
                {
                  
                    this.props.val.note
                }
            </Text>
            <TouchableOpacity style={styles.notedelete}
            onPress={this.props.deleteMethod}>
                
                <FontAwesome name = 'trash' size = {18} color = '#333'/> 
            </TouchableOpacity>
            </View>
        )
    }
}

export default Note

const styles = StyleSheet.create({
    note:{
        position:"relative",
        padding:20,
        paddingRight:100,
        borderBottomWidth:2,
        borderBottomColor:'#ededed',
        backgroundColor: "#fed330"
    },
    notetext:{
        paddingLeft:20,
        borderLeftWidth:10,
        borderLeftColor:"#eb4d4b"
    },
    notedelete:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#eb2f06',
        padding:10,
        top:10,
        bottom:10,
        right:10
    },
    notedeletetext:{
        color:'white'
    }
})