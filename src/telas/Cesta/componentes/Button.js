import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View
  } from 'react-native'

  export default function (){
    return(
    <View style={estilos.ctnComprar}>
        <TouchableOpacity style={estilos.btnComprar}>
            <Text>Comprar</Text>
        </TouchableOpacity>
        </View>
    );
  };

const estilos = StyleSheet.create({
    btnComprar:{
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        width: "50%"
    },
    ctnComprar:{
        alignItems: "center",
        padding: 8
    }
});