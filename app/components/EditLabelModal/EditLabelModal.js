import React, { PureComponent, Component } from "react";
import { Input, Label, Form, Item } from "native-base";
import { colors, fonts, fontStyles, dimensions } from "../../constants/styles";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Button from "../Button";
import ColorPicker from "components/ColorPicker";
import { Close } from "../../assets/icons/Icons";

export default class EditLabelModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: props.labelId,
      name: props.labelName,
      labelColorId: props.labelColorId
    };
    this.selectColor = this.selectColor.bind(this);
    this.submit = this.submit.bind(this);
  }
  selectColor = newColorId => {
    if (newColorId !== this.state.labelColorId)
      this.setState({ labelColorId: newColorId });
  };
  onNameChange = value => {
    this.setState({ name: value });
  };
  submit = () => {
    const label = {
      id: this.state.id,
      name: this.state.name,
      labelColorId: this.state.labelColorId
    };
    if (this.state.id !== null) this.props.editAction(label);
    else this.props.addAction(label);
    this.props.closeModal();
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.close} onPress={this.props.closeModal}>
          <Close />
        </TouchableOpacity>
        <Form>
          <Label style={styles.label}>Label name</Label>
          <Item>
            <Input
              style={styles.item}
              value={this.state.name}
              onChangeText={this.onNameChange}
              placeholder={"Your label name"}
            />
          </Item>
          <ColorPicker
            colorsSource={this.props.colorsSource}
            labelColorId={this.state.labelColorId}
            selectColor={this.selectColor}
          />
          <Button onPress={this.submit}>Submit</Button>
        </Form>
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
  close: {
    alignItems: "flex-end"
  },
  item: {
    ...fontStyles.interUi,
    padding: 0,
    margin: 0
  },
  label: {
    ...fontStyles.interUi,
    fontSize: fonts.sm
  }
});
