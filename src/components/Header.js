import React, { Component } from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import logo from '../assets/logo1.png';


export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Icon name='arrow-circle-left' size={40} color='#3372a8'/>
                </TouchableOpacity>
                <Image 
                style={styles.logo}
                source={logo}
                resizeMode="contain"/>
                <TouchableOpacity>
                    <Icon name='plus-circle' size={40} color='#3372a8'/>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    logo:{
        height:50,
        width: 200
    }
})