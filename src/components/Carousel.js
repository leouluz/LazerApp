import React, { Component } from 'react'
import { ScrollView, View, Text, Image, Dimensions, StyleSheet } from 'react-native';


const { width } = Dimensions.get("window");
const height = width * 0.6; //60%

export default class Carousel extends Component {
    state = {
        active: 0
    }
    change = ({nativeEvent}) => {
        const slide = nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
        if(slide !== this.state.active){
            this.setState({active: slide})
        }
    }
  render() {
    return (
        <View StyleSheet={styles.carousel}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={this.change}
                style={styles.scroll}
            >
                {
                this.props.image.map((image, index) => (
                    <Image
                    key={index}
                    source={{uri: image }}
                    style={styles.image}
                    />
                ))
                }
            </ScrollView>
            <View style={styles.paginationTitle}>
                <Text style={styles.titleText}> {this.props.title} </Text>
            </View>
            <View style={styles.pagination}>
                {
                    this.props.image.map((i,k) => (
                        <Text key={k} style={k==this.state.active ? styles.pagingActiveText :  styles.pagingText}>⬤</Text>
                    ))
                }
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        marginTop:30,
        width,
        height,
    },
    list:{
        paddingHorizontal: 20,
    },
    listItem: {
        marginRight: 15,
    },
    image: {
        width,
        height,
        resizeMode: 'cover',
    },
    scroll:{
        width,
        height,
    },
    pagination:{
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    pagingText: {
        color:'#888',
        margin: 3,
        fontSize: (width / 30)
    },
    pagingActiveText: {
        color:'#fff',
        margin: 3,
        fontSize: (width / 30)
    },
    titleText:{
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        
    },
    paginationTitle :{
        flexDirection: 'row',
        position: 'absolute',
        bottom: 25,
        backgroundColor: '#000'
    }

})


