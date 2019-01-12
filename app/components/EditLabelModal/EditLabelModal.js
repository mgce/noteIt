import React, { PureComponent } from "react";
import { Input, Label, Form, Item } from "native-base";
import { colors, fonts, fontStyles, dimensions } from "../../constants/styles";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Button from "../Button";

export default class EditLabelModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      colorId: ""
    };
  }
  componentDidMount(){
      if(this.props.labelName !== undefined)
        this.setState({name:this.props.labelName})
      if(this.props.colorId !== undefined)
        this.setState({name:this.props.colorId})
  }
  onNameChange = (value) => {
    this.setState({name:value})
  }
  render() {
    return (
      <View style={styles.container}>
        <Form>
          <Item stackedLabel>
            <Label>Label name</Label>
            <Input value={this.state.name} onChangeText={this.onNameChange}/>
          </Item>
          <ColorPicker colors={this.props.colors} />
          <Button>Submit</Button>
        </Form>
      </View>
    );
  }
}

class ColorPicker extends PureComponent {
  renderItem = color => (
    <TouchableOpacity style={{ ...styles.circle, backgroundColor: color }} />
  );
  render() {
    return (
      <View style={styles.pickerContainer}>
        <Text>Label colors</Text>
        <View style={styles.picker}>
          {this.props.colors.map(color => this.renderItem(color.value))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    paddingHorizontal: 34,
    paddingVertical: 20,
    minHeight: dimensions.fullHeight / 3
  },
  pickerContainer: {
    ...fontStyles.interUi,
    flexDirection: "column",
    fontSize: fonts.sm,
    paddingVertical: 15
  },
  picker: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15
  },
  circle: {
    alignItems: "flex-end",
    borderRadius: 20,
    width: 20,
    height: 20,
    marginHorizontal: 5
  }
});
