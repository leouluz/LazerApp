import React from 'react';
import { StyleSheet, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SpotList from '../components/SpotList'
import Header from '../components/Header'

export default function List(){

    return (
        <>
            <Header/>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <SpotList/>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
})