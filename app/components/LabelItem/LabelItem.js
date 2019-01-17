import React, { PureComponent, Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import { colors, fonts, fontStyles, dimensions } from "../../constants/styles";
import { Trash, DarkPencil } from "../../assets/icons/Icons";

export default class LabelItem extends Component {
  constructor(props) {
    super(props);
    this.deleteLabel = this.deleteLabel.bind(this);
  }
  openModal = () => this.props.openModal(this.props.label);
  deleteLabel = () => {
    return this.props.deleteAction(this.props.label);
  };
  render() {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.labelContainer}>
          <View
            style={{
              ...styles.circle,
              backgroundColor: this.props.getItemColor(this.props.label)
            }}
          />
          <Text style={styles.title}>{this.props.label.name}</Text>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity onPress={this.deleteLabel}>
            <Trash />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.openModal}>
            <DarkPencil />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    paddingLeft: 38,
    paddingRight: 40,
    paddingBottom: 10,
    width: "100%"
  },
  labelContainer: {
    alignItems: "center",
    flexDirection: "row",
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
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto"
  }
});
