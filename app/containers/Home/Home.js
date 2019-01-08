import React, { Component } from "react";
import { View } from "react-native";
import { Drawer } from "native-base";
import Header from "components/Header";
import NoteList from "components/NoteList";
import DrawerContent from "components/DrawerContent";
import ActionButton from 'react-native-action-button';
import NoteEditor from "../NoteEditor/NoteEditor";
import Modal from "react-native-modal";
import { colors, dimensions } from "constants/styles";
import {goToEditor} from "navigation"
import {observer, inject} from 'mobx-react/native'

const noteList = [
  {
    key: "1",
    title: "Notatka 1 test",
    description:
      "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis...",
    creationDate: "5 min ago"
  },
  {
    key: "2",
    title: "Notatka 2",
    description:
      "Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis...",
    creationDate: "5 min ago"
  },
  {
    key: "3",
    title: "Notatka 3",
    description:
      "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis...",
    creationDate: "5 min ago"
  },
  {
    key: "4",
    title: "Notatka 4",
    description:
      "Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis...",
    creationDate: "5 min ago"
  },
  {
    key: "5",
    title: "Notatka 5",
    description: "Test",
    creationDate: "5 min ago"
  },
  {
    key: "6",
    title: "Notatka 6",
    description: "Test",
    creationDate: "5 min ago"
  },
  {
    key: "7",
    title: "Notatka 7",
    description: "Test",
    creationDate: "5 min ago"
  },
  {
    key: "8",
    title: "Notatka 8",
    description: "Test",
    creationDate: "5 min ago"
  }
];

@inject("notes")
@observer
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEditorVisible: false
    }
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    console.log(this);
    this.drawer._root.open()
  };
  openEditor = () => {
    goToEditor(this.props.componentId)
  }
  render() {
    return (
      <Drawer ref={(ref) => { this.drawer = ref; }}
      content={<DrawerContent closeDrawer={this.closeDrawer}/>}>
        <View style={{ flex: 1, backgroundColor: "#F4F4F4" }}>
          <Header 
          home
          title="Your Notes" 
          openDrawer={this.openDrawer}/>
          <NoteList dataSource={noteList} />
          <ActionButton
          buttonColor="#716AFF"
          onPress={this.openEditor}
        />
        <Modal 
        deviceHeight = {dimensions.fullHeight}
        deviceWidth = {dimensions.fullWidth}
        backdropColor = {colors.light}
        isVisible={this.state.isEditorVisible}>
            <NoteEditor />
          </Modal>
        </View>
      </Drawer>
    );
  }
}