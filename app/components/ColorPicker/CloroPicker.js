import React, { PureComponent } from "react";
import { fonts, fontStyles } from "../../constants/styles";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";

export default class ColorPicker extends PureComponent {
    renderItem = color => (
      <TouchableOpacity style={{ ...styles.circle, backgroundColor: color }} />
    );
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.label}>Label colors</Text>
          <View style={styles.picker}>
            {this.props.colors.map(color => this.renderItem(color.value))}
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
      alignItems: "flex-end",
      borderRadius: 20,
      width: 20,
      height: 20,
      marginHorizontal: 5
    }
  });
  