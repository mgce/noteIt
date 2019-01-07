import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "../Text";
import { colors, fonts } from "../../constants/styles";
import Header from "../Header";
import DrawerItem from "../DrawerItem"

export default class DrawerContent extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Header inDrawer title="Menu" closeDrawer={this.props.closeDrawer} />
        <View style={styles.menuItemsContainer}>
          <DrawerItem active>
            Notes
          </DrawerItem>
          <DrawerItem>
            Add Note
          </DrawerItem>
          <DrawerItem>
            Trash
          </DrawerItem>
          <DrawerItem>
            Edit lab
          </DrawerItem>
          <DrawerItem>
            Contact us
          </DrawerItem>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
    flexDirection: "column"
  },
  menuItemsContainer: {
    paddingLeft: 50,
    marginTop: 73
  }
});
