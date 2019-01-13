import React, { PureComponent } from "react";
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
      name: "",
      colorId: ""
    };
  }
  componentDidMount() {
    if (this.props !== undefined)
      this.setState({
        name: this.props.labelName,
        colorId: this.props.colorId
      });
  }
  onNameChange = value => {
    this.setState({ name: value });
  };
  render() {
    return (
      <View style={styles.container}>
        <Form>
          <Item style={styles.item}>
            <Label style={styles.label}>Label name</Label>
            <Input value={this.state.name} onChangeText={this.onNameChange} />
          </Item>
          <ColorPicker colors={this.props.colors} />
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
    flexDirection: "column"
  },
  label: {
    ...fontStyles.interUi,
    fontSize: fonts.sm
  },
});
