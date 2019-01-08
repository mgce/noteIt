import React from "react";
import { StyleSheet, View } from "react-native";
import { Form, Item, Input, Textarea, Label } from "native-base";
import { colors, fonts } from "constants/styles";
import Header from "components/Header";
import { Navigation } from "react-native-navigation";
import {observer, inject} from 'mobx-react/native'

@inject("notes")
@observer
export default class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.saveNote = this.saveNote.bind(this);
  }
  goBack() {
    Navigation.dismissAllModals();
  }
  setTitle = value => {
    this.setState({ title: value });
  };
  setBody = value => {
    this.setState({ body: value });
  };
  saveNote = () => {
    const note = {
      title: this.state.title,
      body: this.state.body,
      dateCreate: Date.now(),
      dateModified: Date.now()
    };
    this.props.notes.addNote(note);
    this.goBack();
  };
  render() {
    return (
      <View style={styles.container}>
        <Header editor goBack={this.goBack} submit={this.saveNote}/>
        <Form>
          <Item>
            <Input
              onChangeText={this.setTitle}
              style={styles.title}
              placeholder="Title"
              placeholderTextColor={colors.primary}
              value={this.state.title}
            />
          </Item>
          <Textarea
            onChangeText={this.setBody}
            rowSpan={15}
            placeholder="Put your note here.."
            value={this.state.body}
          />
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
    paddingHorizontal: 5
    // height: dimensions.fullHeight,
    // width: dimensions.fullWidth
  },
  title: {
    color: colors.primary,
    fontFamily: "Gilroy",
    fontSize: fonts.lg,
    fontWeight: "900",
    paddingRight: 10
  },
  textarea: {
    color: colors.textPrimary,
    fontFamily: "Inter UI",
    fontSize: fonts.md,
    fontWeight: "900"
  }
});
