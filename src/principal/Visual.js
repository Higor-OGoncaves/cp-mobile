import React from 'react';
import {StyleSheet,Image, Dimensions, Text} from 'react-native';

import image1 from '../../assets/music.jpg'
const width = Dimensions.get('screen').width
export default function Visual(){
   return <>
   <Image source = {image1}
   style={estilos.image1}/>
   <Text style={estilos.titulo}>APLICATIVO MUSICAL</Text>
   </>
}
const estilos = StyleSheet.create({
   image1:{
      width:"100%",
      height:578/768 *width,
   },
   titulo:{
      width:"100%",
      position:'absolute',
      textAlign:"center",
      fontSize:25,
      color:"black",
      fontWeight:"bold",
      padding:100
   }
});
