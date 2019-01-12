import React, { PureComponent } from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";
import { colors, fonts, fontStyles} from "../../constants/styles";

export default class Button extends PureComponent {
  render() {
    return (
      <TouchableHighlight
        underlayColor={colors.primaryDarker}
        onPress={this.props.openEditor}
        style={styles.button}>
        <Text style={styles.buttonText}>{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    backgroundColor: colors.primary,
    paddingHorizontal: 65,
    paddingVertical: 10
  },
  buttonText: {
    ...fontStyles.gilroy,
    alignSelf: "center",
    color: colors.light,
    fontSize: fonts.lg
  }
});
