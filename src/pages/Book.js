import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Dimensions, Linking, Platform} from 'react-native';
import Carousel from '../components/Carousel'
import Details from '../components/Details'
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get("window");
const height = width * 0.6; //60%

const infos = {
    "id" : 6,
    "title" : "Area do Sr.Jorge",
    "thumbnail" : "ThumbNail" ,
    "place" : "R.Ferreira nunes, 58",
    "price" : "489,99",
    "telephone": "(16) 9 9455-4878",
    "author" : "Fernando Ferreira",
    "description" : "Area com uma otima localidade, otimo espaço para crianças, uma piscina ótima, area para churrasco com churrasqueira, com espaço para até 50 pessoas.",
    "url" : [
        "https://www.tuacasa.com.br/wp-content/uploads/2020/06/area-de-lazer-pequena-1-730x862.jpg",
        "https://i.pinimg.com/736x/f1/c0/32/f1c03214d150a4b8ad0462881d0c9735.jpg",
        "https://imagens-revista.vivadecora.com.br/uploads/2019/04/Deck-ao-redor-da-piscina.-Projeto-de-Otoni-Arquitetura.jpg",
    ]
}

export default function Book({navigation}){
    const id = navigation.getParam('id')

    const handlerCallPhone = () => {
        Linking.openURL(`tel:+5516991919191`)
    }

    const handlerSendWhatsapp = () => {
        let msg = 'Olá, vim pelo LazerApp e estou interessado na sua area de lazer!'
        let phoneNumber = '5516991919191'
    
        let mobile = Platform.OS === 'ios' ? phoneNumber : '+' + phoneNumber;
        if(mobile){
            if(msg){
                let url = 'whatsapp://send?text=' + msg + '&phone=' + mobile
                Linking.openURL(url).then((data) => {
                    console.log('whatsapp opened');
                }).catch(() =>{
                    alert('Make sure Whatsapp installed on your device');
                });
            } else {
                alert('Plase insert mobile no')
            }
        }
    }
    
    const handlerNavigation = () => {
        navigation.navigate('List')
    }
    
    return (
        <View style={styles.container}>
            <Carousel image={infos.url} title={infos.title} />
            <Details infos={infos} />
            <View style={styles.buttonsView}>
                <TouchableOpacity 
                onPress={handlerSendWhatsapp}
                style={styles.buttonWhats}>
                    <Icon name='whatsapp' size={25} color='white'></Icon>
                    <Text style={styles.buttonTextWhats}> WhatsApp</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={handlerNavigation}
                style={styles.buttonTelephone}>
                    <Icon name='phone' size={25} color='white'></Icon>
                    <Text style={styles.buttonTextTelephone}> Telefone</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:30,
        backgroundColor: '#DCDCDC',
        justifyContent: 'space-between',

    },
    buttonWhats: {
        flexDirection: 'row',
        height: 50,
        width: 120,
        backgroundColor: '#00FF93',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:6,
    },
    buttonTelephone: {
        flexDirection: 'row',
        height: 50,
        width: 120,
        backgroundColor: '#3372a8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:6,
    },
    buttonTextWhats: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    buttonTextTelephone: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    buttonsView:{
        flexDirection: 'row',
        marginTop:5,
        borderRadius: 15,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 90
    },
})