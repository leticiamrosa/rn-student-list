import React from "react";
import { Text, View } from "react-native";

const componentName = props => (
  <View>{props.numero % 2 == 0 ? <Text>Par</Text> : <Text>Impar</Text>}</View>
);

export default componentName;
