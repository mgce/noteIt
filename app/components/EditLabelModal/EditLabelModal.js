import React, { PureComponent, Component } from "react";
import { Input, Label, Form, Item } from "native-base";
import { colors, fonts, fontStyles, dimensions } from "../../constants/styles";
import {
  View,
  StyleSheet,
} from "react-native";
import Button from "../Button";
import ColorPicker from "components/ColorPicker"

export default class EditLabelModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.labelName,
      colorId: props.colorId
    };
    this.selectColor = this.selectColor.bind(this);
  }
  selectColor = (newColorId) => {
      if(newColorId !== this.state.colorId)
        this.setState({colorId: newColorId})
    }
  onNameChange = value => {
    this.setState({ name: value });
  };
  render() {
    return (
      <View style={styles.container}>
        <Form>
        <Label style={styles.label}>Label name</Label>
          <Item style={styles.item}>
            <Input value={this.state.name} onChangeText={this.onNameChange} />
          </Item>
          <ColorPicker colors={this.props.colors} selectedColorId={this.state.colorId} selectColor={this.selectColor}/>
          <Button>Submit</Button>
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
    padding: 0
  },
  label: {
    ...fontStyles.interUi,
    fontSize: fonts.sm
  },
});
