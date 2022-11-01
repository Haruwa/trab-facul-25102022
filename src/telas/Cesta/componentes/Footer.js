import react from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Footer() {
    return <>
    <View style={estilos.ctnFooter}>
    <Text>Greenland Farm@ - Desenvolvido por Haruwa Solutions - Desenvolvedor: Jaime Garonce Meireles</Text>
    </View>
    </>
}

const estilos = StyleSheet.create({
    ctnFooter:{
        padding: 1
    }
})