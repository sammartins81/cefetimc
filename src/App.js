import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import CalculoIMC from './componentes/CalculoIMC';

export default class App extends Component {
  render(){
    return(
      <View style={estilos.container}>
        <CalculoIMC />
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
      },

      fonte:{
        fontSize: 40,
      },
});