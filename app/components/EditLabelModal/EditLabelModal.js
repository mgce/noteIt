import React, { PureComponent, Component } from "react";
import { Input, Label, Form, Item } from "native-base";
import { colors, fonts, fontStyles, dimensions } from "../../constants/styles";
import {
  View,
  StyleSheet,
} from "react-native";
import Button from "../Button";
import ColorPicker from "components/ColorPicker"

export default class EditLabelModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: props.labelId,
      name: props.labelName,
      colorId: props.colorId
    };
    this.selectColor = this.selectColor.bind(this);
    this.submit = this.submit.bind(this);
  }
  selectColor = (newColorId) => {
      if(newColorId !== this.state.colorId)
        this.setState({colorId: newColorId})
    }
  onNameChange = value => { 
    this.setState({ name: value });
  };
  submit = () => {
    const label = {
        id: this.state.id,
        name: this.state.name,
        colorId: this.state.colorId
    }
    if(this.state.id !== null)
        this.props.editAction(label);
    else
        this.props.addAction(label);
    this.props.closeModal();    
  }
  render() {
    return (
      <View style={styles.container}>
        <Form>
        <Label style={styles.label}>Label name</Label>
          <Item >
            <Input style={styles.item} value={this.state.name} onChangeText={this.onNameChange} />
          </Item>
          <ColorPicker colors={this.props.colors} selectedColorId={this.state.colorId} selectColor={this.selectColor}/>
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
  item: {
      ...fontStyles.interUi,
    padding: 0,
    margin: 0
  },
  label: {
    ...fontStyles.interUi,
    fontSize: fonts.sm
  },
});
