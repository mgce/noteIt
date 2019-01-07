import React from "react";
import { Text as RNText, StyleSheet } from "react-native";
import { colors } from "../../constants/styles";

export default class Text extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { bold, boldActive, boldInactive } = this.props;
    const {style} = this.props;
    let selectedStyle = styles.regular;

    if (bold) {
      selectedStyle = styles.bold;
    } else if (boldActive) selectedStyle = styles.boldActive;
    else if (boldInactive) selectedStyle = styles.boldInactive;

    if(style)
      selectedStyle = {...style, ...selectedStyle};

    return <RNText style={selectedStyle}>{this.props.children}</RNText>;
  }
}

const styles = StyleSheet.create({
  bold: {
    fontFamily: "Gilroy",
    fontSize: 30,
    fontWeight: "900"
  },
  regular: {
    fontFamily: "Inter UI",
    fontSize: 14,
    fontWeight: "normal"
  },
  boldActive: {
    fontFamily: "Gilroy",
    fontSize: 30,
    fontWeight: "900",
    color: colors.primary
  },
  boldInactive: {
    fontFamily: "Gilroy",
    fontSize: 30,
    fontWeight: "900",
    color: colors.textPrimary
  }
});
