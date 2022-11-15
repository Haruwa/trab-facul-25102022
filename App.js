import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Montserrat_400Regular, Montserrat_700Bold, useFonts,} from '@expo-google-fonts/montserrat';
import AppLoading  from 'expo-app-loading';

import Cesta from './src/telas/Cesta';

{/* Importa o mock*/}
import mock from './src/mocks/cesta';
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
      <SafeAreaView>
        <StatusBar/>
        {/* Passa o mock para o componente ...-> server para descontruir o objeto*/}
        {/* igual a dizer -> topo ={mock.topo}, detalhes = {mock.detalhes}*/}
        <Cesta {...mock} />
        <BtnComprar />
        <FtrCesta />
      </SafeAreaView>
  );
}
