import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";

export default class Circle extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={{ ...this.props.style, ...styles.circle }} />;
  }
}

const styles = StyleSheet.create({
  circle: {
    borderRadius: 7,
    width: 7,
    height: 7
  }
});
