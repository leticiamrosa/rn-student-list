import React from 'react';
import { Text } from 'react-native';
import { general } from '../styles/styles';

const { sectionText } = general;

export const Inverter = props => {
  const inv = props.texto.split('').reverse().join('')
  return <Text style={sectionText}>{inv}</Text>
}

export const Random = props => {
  const [min, max] = [1, 60];
  const numeros = Array(props.numeros || 6).fill(0)

  for (let i = 0; i < numeros.length; i++) {
    let novo = 0;
    while (numeros.includes(novo)) {
      novo = Math.floor(Math.random() * (max-min +1)) + min
    }
    numeros[i] = novo;
  }

  numeros.sort((a,b) => a - b)
  return <Text style={sectionText}>{numeros.join(', ')}</Text>
}

export default Inverter
// export { Inverter, Random }