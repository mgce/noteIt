import React, { PureComponent, Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { colors, fonts, fontStyles, dimensions } from "../../constants/styles";

export default class LabelItem extends Component {
  constructor(props) {
    super(props);
  }
  openModal = () => this.props.openModal(this.props.label);
  render() {
    return (
      <TouchableHighlight
        style={styles.itemContainer}
        onPress={this.openModal}
        underlayColor={colors.primary}
      >
        <React.Fragment>
          <View
            style={{
              ...styles.circle,
              backgroundColor: this.props.getItemColor(this.props.label)
            }}
          />
          <Text style={styles.title}>{this.props.label.name}</Text>
        </React.Fragment>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 38,
    paddingRight: 40,
    paddingBottom: 10
  },
  circle: {
    alignItems: "flex-end",
    borderRadius: 7,
    backgroundColor: colors.primary,
    width: 7,
    height: 7
  },
  title: {
    ...fontStyles.gilroy,
    color: colors.textPrimary,
    fontSize: fonts.lg,
    paddingLeft: 15
  }
});
