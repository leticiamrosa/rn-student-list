import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Logo from "./componentes/Logo";
import { general } from "./styles/styles";
import If from "./componentes/If";
import { Inverter } from "./componentes/Multi";

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Logo texto="Logo" />
        <If numero={32} />
        <Inverter texto="React Native" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...general
});
