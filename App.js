import React from 'react';
import { StatusBar, ScrollView} from 'react-native';
import {Montserrat_400Regular, Montserrat_700Bold, useFonts,} from '@expo-google-fonts/montserrat';
import AppLoading  from 'expo-app-loading';

import Cesta from './src/telas/Cesta';

{/* Importa o mock*/}
import legumes from './src/mocks/cesta';
import BtnComprar from './src/telas/Cesta/componentes/BtnComprar';
import FtrCesta from './src/telas/Cesta/componentes/FtrCesta';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <AppLoading/>
  }

  return (
        <ScrollView>
          <StatusBar />
          <Cesta {...legumes}/>
          <BtnComprar />
          <FtrCesta />
        </ScrollView>
  )
   
  
}