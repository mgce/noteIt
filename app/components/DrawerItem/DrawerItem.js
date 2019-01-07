import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors, fonts } from "../../constants/styles";

export default class DrawerItem extends React.PureComponent {
  render() {
    const { active } = this.props;

    let style = styles.menuItem;

    if(active)
        style = {...style, ...styles.active};
    else
        style = {...style, ...styles.inactive};

    return (
      <Text style={style} boldActive>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  menuItem: {
    marginBottom: 26,
    fontFamily: "Gilroy",
    fontSize: 30,
    fontWeight: "900",
  },
  active: {
    color: colors.primary
  },
  inactive: {
    color: colors.textPrimary
  }
});
