import React from 'react';
import cesta from '../../../mocks/cesta';
import {View, Text, FlatList, StyleSheet} from 'react-native';

export default function Lista() {
    return(
        <View>
            <Text>Lista Flat: </Text>
            <FlatList
                data={cesta.lista}
                keyExtractor={item=>item.id}
                renderItem={({item}) => <View>
                    <Image source={item.imagem}></Image>
                    <Text>{item.nome}</Text>
                </View>}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    item:{
        backgroundColor: '#0C0',
        padding: 5
    },
})