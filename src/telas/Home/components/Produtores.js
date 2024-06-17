import React, { Fragment, useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import Produtor from './Produtor'
import { carregaProdutores } from "../../../servicos/carregaDados";

const  Produtores = ({topo: Topo}) => {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista ] = useState([]);

    useEffect(() => {
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }, []);

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
