import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { fonts, colors } from "../styles/styles";

const Logo = props => (
  <View>
    <Text style={styles.paragraph}>{props.texto}</Text>
  </View>
);

export default Logo;

const styles = StyleSheet.create({
  paragraph: {
    fontSize: fonts.input,
    color: colors.text
  }
});
