import React, { Fragment } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import Produtor from './Produtor'
import useProdutores from '../../../hooks/useProdutores';

const  Produtores = ({topo: Topo}) => {
    const [titulo, lista] = useProdutores();

    const TopoLista = () =>  <Fragment>
        <Topo />
        <Text style={estilos.titulo}>{ titulo }</Text></Fragment>
        
    
    return <FlatList
        data={lista}
        renderItem={({ item }) => <Produtor distancia={item.distancia} estrelas={item.estrelas} imagem={item.imagem}nome={item.nome}/>}
        keyExtractor={ ({nome}) => nome}
        ListHeaderComponent={TopoLista}
        />
      
}


const estilos = StyleSheet.create({
    titulo: {
      fontSize: 20,
      lineHeight: 32,
      marginHorizontal: 16,
      marginTop: 16,
      fontWeight: 'bold',
      color:'#464646',
    },
  });


export default Produtores;
