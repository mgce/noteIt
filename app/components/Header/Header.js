import React from "react";
import { View, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { Text, Right, Left } from "native-base";
import { colors, fonts } from "../../constants/styles";
import {
  Hamburger,
  Close,
  Magnifier,
  Label,
  Checkmark
} from "../../assets/icons/Icons";

class Header extends React.PureComponent {
  render() {
    const { inDrawer, home, editor } = this.props;

    let LeftIcon;
    let RightIcon;
    let RightIconGroup;

    if (inDrawer)
      LeftIcon = (
        <TouchableOpacity onPress={this.props.closeDrawer}>
          <Close />
        </TouchableOpacity>
      );

    if (home) {
      LeftIcon = (
        <TouchableOpacity onPress={this.props.openDrawer}>
          <Hamburger />
        </TouchableOpacity>
      );

      RightIcon = (
        <TouchableOpacity style={styles.rightIcon}>
          <Magnifier />
        </TouchableOpacity>
      );
    }

    if (editor) {
      LeftIcon = (
        <TouchableOpacity onPress={this.props.goBack}>
          <Close />
        </TouchableOpacity>
      );
      RightIcon = null;
      RightIconGroup = (
        <View style={styles.rightIcon}>
          <TouchableOpacity>
            <Label />
          </TouchableOpacity>
          <TouchableOpacity style={styles.leftNeighbour}>
            <Checkmark />
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.light} barStyle="dark-content" />
        {LeftIcon}
        <Text style={styles.title}>{this.props.title}</Text>
        {RightIcon}
        {RightIconGroup}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 13,
    paddingHorizontal: 18
  },
  title: {
    color: colors.primary,
    fontFamily: "Gilroy",
    fontSize: fonts.xl,
    fontWeight: "900",
    paddingHorizontal: 18
  },
  leftIcon:{
    alignItems:"center"
  },
  rightIcon: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "flex-start"
  },
  leftNeighbour:{
    paddingHorizontal: 20
  }
});

export default Header;
