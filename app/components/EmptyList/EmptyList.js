import React from "react";
import { StyleSheet, View, Text, Image} from "react-native";
import { colors, fonts, fontStyles} from "../../constants/styles";
import Button from "../Button"

export default class EmptyList extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../../assets/images/notes.png")} />
        <Text style={styles.text}>Start adding notes</Text>
        <Button onPress={this.props.openEditor}>Create</Button>
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
  text:{
    ...fontStyles.gilroy,
    color: colors.textPrimary,
    fontSize: fonts.lg,
    paddingBottom:10,
    paddingTop: 20
  }
});
