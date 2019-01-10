import React, { Component } from "react";
import { View } from "react-native";
import { Drawer } from "native-base";
import Header from "components/Header";
import NoteList from "components/NoteList";
import EmptyList from "components/EmptyList";
import DrawerContent from "components/DrawerContent";
import ActionButton from "react-native-action-button";
import { goToEditor } from "navigation";
import { observer, inject } from "mobx-react/native";


@inject("notes")
@observer
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditorVisible: false
    };
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.editNote = this.editNote.bind(this);
  }
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    console.log(this);
    this.drawer._root.open();
  };
  openEditor = (params) => {
    goToEditor(this.props.componentId, params);
  };
  listIsEmpty = () => {
    return this.props.notes.notesList.length === 0;
  };
  render() {
    return (
      <Drawer
        ref={ref => {this.drawer = ref;}}
        content={<DrawerContent goBack={this.closeDrawer} />}>
        <View style={{ flex: 1, backgroundColor: "#F4F4F4" }}>
          <Header home title="Your Notes" openDrawer={this.openDrawer} />
          {this.renderContent()}
        </View>
      </Drawer>
    );
  }
  deleteNote = (note) => {
    this.props.notes.deleteNote(note);
  }
  editNote = (key) => {
    var note = this.props.notes.findByKey(key);
    this.openEditor(note);
  }
  renderContent = () => {
    if (this.listIsEmpty()) return <EmptyList openEditor={this.openEditor} />;
    return (
      <React.Fragment>
        <NoteList 
        dataSource={this.props.notes.notesList} 
        onPress={this.editNote}
        deleteAction={this.deleteNote}
        openEditor={this.openEditor}/>
        <ActionButton buttonColor="#716AFF" onPress={this.openEditor} />
      </React.Fragment>
    );
  };
}
