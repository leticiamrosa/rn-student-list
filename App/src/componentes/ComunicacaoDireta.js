import React, { Component } from 'react';
import { View, Text } from 'react-native';
import general from '../styles/styles';

const fonte = { style: { fonteSize: 30 } }

filhosProps = (props) => {
    return React.Children.map(props.children, 
        c => React.cloneElement(c, {...props, ...c.props})
    )
};

export const Filho = props => (
    <View>
        <Text {...fonte} > Filho: {props.nome} {props.sobrenome}</Text>
    </View>
)

export const Pai = props => (
    <View>
        <Text {...fonte} > Pai: {props.nome} {props.sobrenome}</Text>
        {/* {props.children} */}

        {/* Map passa por todo o array e adiciona as props para todos os filhos
        Primeiro coloca as propriedades do pai primeiro e depois do filho
         */}
        {/* {React.Children.map(props.children, 
            c => React.cloneElement(c, {...props, ...c.props})
        )} */}
        {/* Só aceita em um componente
        {React.cloneElement(props.children, {...props, ...props.children.props})} */}
        {this.filhosProps(props)}
    </View>
)

export const Avo = props => (
    <View>
        <Text {...fonte}>Avô {props.nome} {props.sobrenome}</Text>
        <Pai nome='Flavio' sobrenome={props.sobrenome}>
            <Filho nome='Leticia'/>
            <Filho nome='Larissa'/>
        </Pai>
        <Pai {...props} nome='Alvaro'>
            <Filho nome='Claudio'/>
            <Filho nome='Clovis'/>
        </Pai>
    </View>
)