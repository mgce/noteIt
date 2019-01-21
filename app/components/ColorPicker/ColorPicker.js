import React, { PureComponent, Component } from "react";
import { fonts, fontStyles } from "../../constants/styles";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { CheckmarkColorPicker } from "../../assets/icons/Icons";

export default class ColorPicker extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      labelColorId: props.labelColorId
    };
  }
  componentWillReceiveProps = nextProps => {
    this.setState({labelColorId: nextProps.labelColorId})
  }
  renderItem = color => {
    let checkmark;
    if(color.id === this.state.labelColorId)
      checkmark = <CheckmarkColorPicker />
    return (
      <TouchableOpacity key={color.id} onPress={() => 
      this.props.selectColor(color.id)} style={{ ...styles.circle, backgroundColor: color.value }}>
        {checkmark}
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Label colors</Text>
        <View style={styles.picker}>
          {this.props.colorsSource.map(color => this.renderItem(color))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingVertical: 15
  },
  picker: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15
  },
  label: {
    ...fontStyles.interUi,
    fontSize: fonts.sm
  },
  circle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    width: 20,
    height: 20,
    marginHorizontal: 5
  }
});
