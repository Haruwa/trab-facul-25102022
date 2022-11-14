import react from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function FtrCesta() {
    return <>
    <View style={estilos.ftrCesta}>
    <Text>Fazenda Terra Verde@ - Desenvolvido por Haruwa Solutions - Desenvolvedor: Jaime Garonce Meireles</Text>
    </View>
    </>
}

const estilos = StyleSheet.create({
    ftrCesta:{
        padding: 1
    }
})