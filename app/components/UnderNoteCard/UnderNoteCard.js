import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { Pencil, Trash } from "../../assets/icons/Icons";
import {colors} from "constants/styles"

export default class UnderNoteCard extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.leftContainer} onPress={()=>console.log("leftTapped")}>
          <Trash />
        </TouchableHighlight>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.primary
  },
  leftContainer: {
    alignSelf: "center",
    paddingLeft: 20
  },
  rightContainer: {
    alignSelf: "center",
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    paddingLeft: 20
  }
});
