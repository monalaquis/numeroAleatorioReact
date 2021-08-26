import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity,
StyleSheet} from 'react-native';
//useState = usado para deixar o codigo nativo
const App = () => {

   const [numero, setNumero] = useState()
   //Função par gerar o numero aleatorio
   function handleNumber()
   {
      const novo_number = Math.floor(Math.random()*100)
      //função que seta o novo numero 
      setNumero(novo_number)
   }
   
  return (
        <SafeAreaView style={style.container}>
            <Text style={style.numero}>{numero}</Text>
            <TouchableOpacity onPress={handleNumber} style={ style.botao}>
               <Text>Gerar numero</Text>
            </TouchableOpacity>
         </SafeAreaView>
  );
};
const style = StyleSheet.create({
   container: {
      backgroundColor: '#fff000',
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',

   },
   numero: {
      fontSize: 68,
      color: '#000',
      fontWeight: 'bold',
   },

   botao: {
      backgroundColor: '#f8f8ff',
      width: '80%',
      paddingHorizontal: 5,
      paddingVertical: 10,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,

   },

});

export default App;