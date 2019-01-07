import React from "react";
import { View, StyleSheet } from "react-native";
import { Pencil, Trash } from "../../assets/icons/Icons";

export default class UnderNoteCard extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Trash />
        </View>
        <View style={styles.rightContainer}>
          <Pencil />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  leftContainer: {
    alignSelf: "center",
    paddingLeft: 30
  },
  rightContainer: {
    alignSelf: "center",
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    paddingLeft: 30
  }
});
