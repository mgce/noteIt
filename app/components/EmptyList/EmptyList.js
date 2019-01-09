import React from "react";
import { StyleSheet, View, Text, TouchableHighlight, Image,  } from "react-native";
import { colors, fonts, fontStyles} from "../../constants/styles";

export default class EmptyList extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../../assets/images/notes.png")} />
        <Text style={styles.text}>Start adding notes</Text>
        <TouchableHighlight
          underlayColor = {colors.primaryDarker}
          onPress={this.props.openEditor}
          style={styles.button}
        >
        <Text style={styles.buttonText}>
            Create
        </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingBottom: 70
  },
  button: {
    borderRadius: 25,
    backgroundColor: colors.primary,
    paddingHorizontal: 65,
    paddingVertical: 10
  },
  text:{
    ...fontStyles.gilroy,
    color: colors.textPrimary,
    fontSize: fonts.lg,
    paddingBottom:10,
    paddingTop: 20
  },
  buttonText:{
    ...fontStyles.gilroy,
    color: colors.light,
    fontSize: fonts.lg
  }
});
