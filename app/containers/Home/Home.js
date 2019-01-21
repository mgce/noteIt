import React, { Component } from "react";
import NoteList from "components/NoteList";
import EmptyList from "components/EmptyList";
import ActionButton from "react-native-action-button";
import { goToEditor } from "navigation";
import { observer, inject } from "mobx-react/native";

@inject("notes", "labels")
@observer
export default class App extends Component {
  constructor(props) {
    super(props);
    this.deleteNote = this.deleteNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.props.labels.labelsList.forEach(label => {
      const color = this.props.labels.colors.find(c=>c.id === label.colorId);
      label.color = color;
    });
  }
  openEditor = params => {
    goToEditor(this.props.componentId, params);
  };
  listIsEmpty = () => {
    return this.props.notes.notesList.length === 0;
  };
  deleteNote = note => {
    this.props.notes.deleteNote(note);
  };
  editNote = key => {
    var note = this.props.notes.findByKey(key);
    this.openEditor({note});
  };
  render() {
    if (this.listIsEmpty()) return <EmptyList onPress={this.openEditor} />;
    return (
      <React.Fragment>
        <NoteList
          dataSource={this.props.notes.notesList}
          labelsSource={this.props.labels.labelsList}
          onPress={this.editNote}
          rightCardSwipe={this.deleteNote}
        />
        <ActionButton buttonColor="#716AFF" onPress={this.openEditor} />
      </React.Fragment>
    );
  }
}
