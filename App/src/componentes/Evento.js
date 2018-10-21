import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { general } from '../styles/styles';

export default class Evento extends Component {
  constructor(props) {
    super(props);
    this.state = {
        texto: '',
    };
  }

  alterarTexto(texto, value) {
      this.setState({ texto: value})
  }

  render() {
    const { section, container } = general;
    const { sectionText, input } = general;
    const { texto } = this.state;
    return (
      <View style={container}>
        <View style={section}>
            <Text style={sectionText}>Texto Digitado: {texto}</Text>
            <TextInput
                value={texto}
                style={input}
                onChangeText={value => this.alterarTexto('texto', value)}
            />
        </View>
      </View>
    );
  }
}
