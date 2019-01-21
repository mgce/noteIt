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
  renderEditor() {
    LeftIcon = (
      <TouchableOpacity onPress={this.props.goBack}>
        <Close />
      </TouchableOpacity>
    );
    RightIconGroup = (
      <View style={styles.rightIcon}>
        <TouchableOpacity onPress={this.props.openLabelModal}>
          <Label />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.leftNeighbour}
          onPress={this.props.submit}
        >
          <Checkmark />
        </TouchableOpacity>
      </View>
    );

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.light} barStyle="dark-content" />
        {LeftIcon}
        <Text style={styles.title}>{this.props.title}</Text>
        {RightIconGroup}
      </View>
    );
  }
  renderInDrawer() {
    const LeftIcon = (
      <TouchableOpacity onPress={this.props.goBack}>
        <Close />
      </TouchableOpacity>
    );
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.light} barStyle="dark-content" />
        {LeftIcon}
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
  renderHome() {
    const LeftIcon = (
      <TouchableOpacity onPress={this.props.openDrawer}>
        <Hamburger />
      </TouchableOpacity>
    );

    const RightIcon = (
      <TouchableOpacity style={styles.rightIcon}>
        <Magnifier />
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.light} barStyle="dark-content" />
        {LeftIcon}
        <Text style={styles.title}>{this.props.title}</Text>
        {RightIcon}
      </View>
    );
  }
  render() {
    const { inDrawer, home, editor } = this.props;

    if (inDrawer) return this.renderInDrawer();

    if (editor) return this.renderEditor();
    else return this.renderHome();
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
  leftIcon: {
    alignItems: "center"
  },
  rightIcon: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "flex-start"
  },
  leftNeighbour: {
    paddingHorizontal: 20
  }
});

export default Header;
