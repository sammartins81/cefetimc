import React, {useState} from 'react'
import { Button, Text, TextInput, ImageBackground, Image, View, } from 'react-native'
import Padrao from '../estilo/Padrao'


export default props => {
    const [peso, setPeso] = useState('0');
    const [altura, setAltura] = useState('0.0');
    const [resultado, setResultado] = useState('0.0');

    

    function calcular(){ setResultado(peso/ (altura * altura))}
    

    return (
       
        <View style={Padrao.entrada}>
        <Text style={Padrao.ex}> CEFET_CAMPO_BELO_MG </Text>
        <Text style={Padrao.ex}> Calculadora de IMC </Text>
        
        
        
        <TextInput
        style={Padrao.input}
        placeholder="Digite seu peso (KG)"
        keyboardType="numeric"
        onChangeText={peso => setPeso(peso)}
        />

        <TextInput
        style={Padrao.input}
        placeholder="Informe sua Altura (m)"
        keyboardType="numeric"
        onChangeText={altura => setAltura(altura.replace(',','.'))}

        />
       

        <Button
        title="Calcular IMC"
        onPress={calcular}
        color="black"
        
        />
        
        <Text style={Padrao.resultado}> IMC ={resultado} </Text>
        
        </View>
        
    )
}
