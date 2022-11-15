import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View
  } from 'react-native'

  export default function BtnComprar(){
    return(
    <View style={estilos.viwComprar}>
        <TouchableOpacity style={estilos.btnComprar}>
            <Text>Comprar</Text>
        </TouchableOpacity>
        </View>
    );
  };

const estilos = StyleSheet.create({
    btnComprar:{
        alignItems: "center",
        backgroundColor: "#ABDDAB",
        padding: 10,
        width: "50%"
    },
    viwComprar:{
        alignItems: "center",
        padding: 8
    }
});