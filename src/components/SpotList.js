import React from 'react';
import {withNavigation} from 'react-navigation';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';


const spot = [
    {
        "techs" : ["VueJS", "ReactJS"],
        "id" : 1,
        "thumbnail" : "Titulo" ,
        "company" : "Area do Sr.Jorge",
        "price" : "300,00",
        "url" : "https://www.tuacasa.com.br/wp-content/uploads/2020/06/area-de-lazer-pequena-1-730x862.jpg",    
    },
    {
        "techs" : ["Laravel", "Node"],
        "id" : 2,
        "thumbnail" : "ThumbNail" ,
        "company" : "Area Baiha alegre",
        "price" : "400,00",
        "url" : "https://i.pinimg.com/736x/f1/c0/32/f1c03214d150a4b8ad0462881d0c9735.jpg",
    },
    {
        "techs" : ["Laravel", "Node"],
        "id" : 3,
        "thumbnail" : "ThumbNail" ,
        "company" : "Area Dia alegre",
        "price" : "500,00",
        "url" : "https://imagens-revista.vivadecora.com.br/uploads/2019/04/Deck-ao-redor-da-piscina.-Projeto-de-Otoni-Arquitetura.jpg",
    },
    {
        "techs" : ["Laravel", "Node"],
        "id" : 4,
        "thumbnail" : "ThumbNail" ,
        "company" : "Telexfree",
        "price" : "89,99",
        "url" : "https://www.jotform.com/pt/resources/assets/icon/min/jotform-icon-orange-400x400.png",
    },
    {
        "techs" : ["Laravel", "Node"],
        "id" : 5,
        "thumbnail" : "ThumbNail" ,
        "company" : "Telexfree",
        "price" : "89,99",
        "url" : "https://www.jotform.com/pt/resources/assets/icon/min/jotform-icon-orange-400x400.png",
    },
    {
        "techs" : ["Laravel", "Node"],
        "id" : 6,
        "thumbnail" : "ThumbNail" ,
        "company" : "Telexfree",
        "price" : "89,99",
        "url" : "https://www.jotform.com/pt/resources/assets/icon/min/jotform-icon-orange-400x400.png",
    },
];

function SpotList({navigation}){

    function handlerNavigation(id){
        navigation.navigate('Book', {id})
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Areas da cidade de  <Text style={styles.bold}>Sertãozinho</Text></Text>
            <FlatList
            style={styles.list}
            data={spot}
            keyExtractor={spot => spot.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
                <View style={styles.listItem}>
                    <Image style={styles.thumbnail} source={{uri: item.url}} ></Image>
                    <Text style={styles.company} >{item.company}</Text>
                    <Text style={styles.price} >R${item.price}</Text>
                    <TouchableOpacity onPress={() => handlerNavigation(item.id)} style={styles.button}>
                        <Text style={styles.buttonText} >Solicitar Reserva</Text>
                    </TouchableOpacity>
                </View>
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:30,
    },
    title: {
        fontSize:20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    bold: {
        fontWeight: 'bold',
    },
    list:{
        paddingHorizontal: 20,
    },
    listItem: {
        marginRight: 15,
    },
    thumbnail: {
        width: 200,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 4
    },
    company: {
        fontSize:24,
        fontWeight: 'bold',
        color: "#333",
        marginTop: 10,
    },
    price: {
        fontSize:15,
        color:'#999',
        marginTop: 5,
    },
    button: {
        height: 32,
        backgroundColor: '#3372a8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:6,
        marginTop:15
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    }
})

export default withNavigation(SpotList);