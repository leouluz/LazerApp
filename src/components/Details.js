import React, { Component } from 'react'
import {  View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Details extends Component {

  render() {
    return (
      <View style={styles.container}> 
        <Text style={styles.dailyPrice}>Valor da diaria</Text>
        <View style={styles.detailsDivPrice}>
          <Text style={styles.textPrice}>{this.props.infos.price} </Text>
          <Icon name="heart" size={60} color="red"></Icon>
        </View>
          <ScrollView
          style={styles.scrollDetails}
          >
            <View style={styles.line}>
              <Text style={styles.titleDetails}>Local: </Text>
              <Text style={styles.titleInfo}>{this.props.infos.place}</Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.titleDetails}>Dono: </Text>
              <Text style={styles.titleInfo}>{this.props.infos.author}</Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.titleDetails}>Telefone: </Text>
              <Text style={styles.titleInfo}>{this.props.infos.telephone}</Text>
            </View>
            <View style={styles.lineDescription}>
              <Text style={styles.titleDetails}>Descrição: </Text>
              <Text style={styles.titleInfo}>{this.props.infos.description}</Text>
            </View>
          </ ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 5
  },
  scrollDetails: {
      paddingHorizontal: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
      marginTop: 10
    },
  titleDetails:{
      fontSize: 18,
      fontWeight: 'bold',
    },
  titleInfo:{
      fontSize: 16
    },
  detailsDivPrice:{
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      flexDirection: 'row'
    },
  textPrice:{
      fontSize: 50,
      fontWeight: 'bold',
    },
  dailyPrice:{
      marginStart: 15,
      marginTop: 10,
    },
  line:{
      flex:1,
      flexDirection: 'row'
    },
  lineDescription:{
      flex:1,
      marginTop: 2
    },

})


