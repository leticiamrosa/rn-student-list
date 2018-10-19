import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Logo from "./componentes/Logo";
import { general } from "./styles/styles";

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Logo texto="Logo" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...general
});
