import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Logo from "./componentes/Logo";
import { general } from "./styles/styles";
import If from "./componentes/If";
import { Inverter, Random } from "./componentes/Multi";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.section}>
        <Logo texto="Logo" />
        <If numero={32} />
        <Inverter texto="React Native" />
        <Random numeros={9}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...general
});
