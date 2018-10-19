import React from "react";
import { Text, View } from "react-native";

const inv = props.text
  .split("")
  .reverse()
  .join("");
export const Inverter = props => <Text>{inv}</Text>;
