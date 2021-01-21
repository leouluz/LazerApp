import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function Login(){

    // FUNÇÃO PARA VERIFICAR USUARIO NO BANCO
    // const [email, setEmail] = useState('');

    // async function handleSubmit(){
    //     const response = await api.post('/sessions', {
    //         email
    //     })
    //     const {_id} = response.data;
    // }


    return(
        <View
            enabled={Platform.OS==='ios'}
            behavior="padding"
            style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.label}>Nome do App...........................................</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Usuário"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TouchableOpacity 
                style={styles.button}
                >
                    <Text styles={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    form:{
        alignItems: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
    button: {
        height:42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
    buttonText:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize:16,
    }

})