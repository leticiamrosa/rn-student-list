import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
        numero: this.props.numeroInicial,
    };
  }

  adiciona() {
    const { numero } = this.state;
    this.setState({
        numero: numero + 1,
    })
  }

  limpar() {
      this.setState({ numero: 0 })
  }

  render() {
      const { numero } = this.state;
    return (
      <View>
        <Text> {numero} </Text>
      <TouchableHighlight
        onPress={() => this.adiciona()}
        onLongPress={() => this.limpar()}
      >
        <Text>Incrementar/Zerar</Text>
      </TouchableHighlight>
      </View>
    );
  }
}
