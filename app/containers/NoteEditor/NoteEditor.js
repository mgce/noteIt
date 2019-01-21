import React from "react";
import { StyleSheet, View } from "react-native";
import { Form, Item, Input, Textarea } from "native-base";
import { colors, fonts } from "constants/styles";
import Header from "components/Header";
import { Navigation } from "react-native-navigation";
import {observer, inject} from 'mobx-react/native'
import Modal from "react-native-modal"
import SelectLabelModal from "components/SelectLabelModal"

@inject("notes", "labels")
@observer
export default class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: "",
      body: "",
      dateCreated: null,
      labels: [],
      isModalVisible: false
    };
    this.saveNote = this.saveNote.bind(this);
    this.closeSelectLabelModal = this.closeSelectLabelModal.bind(this);
    this.openSelectLabelModal = this.openSelectLabelModal.bind(this);
  }
  componentDidMount(){
    if(this.props.note === undefined)
      return;

     this.setState({
       id: this.props.note.id,
       title: this.props.note.title,
       body: this.props.note.body,
       dateCreated: this.props.note.dateCreated,
       labels: this.props.note.labels
     }) 
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
      id: this.state.id,
      title: this.state.title,
      body: this.state.body,
      dateCreated: this.state.dateCreated  ? this.state.dateCreated : Date.now(),
      dateModified: Date.now(),
      labels: this.state.labels
    };

    if(note.id !== undefined && note.id !== null)
      this.props.notes.editNote(note)
    else
      this.props.notes.addNote(note);

    this.goBack();
  };
  openSelectLabelModal = () => this.setState({isModalVisible: true})
  closeSelectLabelModal = () => this.setState({isModalVisible: false})
  render() {
    return (
      <View style={styles.container}>
      <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={this.closeSelectLabelModal}
        >
          <SelectLabelModal
          closeModal = {this.closeSelectLabelModal}
          dataSource = {this.props.labels.labelsList}
          colorList = {this.props.labels.colors}
          />
        </Modal>
        <Header editor goBack={this.goBack} submit={this.saveNote} openLabelModal={this.openSelectLabelModal}/>
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
