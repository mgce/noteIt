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

const noteList = [
  {
    key: "1",
    title: "Notatka 1 test",
    body:
      "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis...",
    creationDate: "5 min ago"
   }
  // {
  //   key: "2",
  //   title: "Notatka 2",
  //   description:
  //     "Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis...",
  //   creationDate: "5 min ago"
  // },
  // {
  //   key: "3",
  //   title: "Notatka 3",
  //   description:
  //     "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis...",
  //   creationDate: "5 min ago"
  // },
  // {
  //   key: "4",
  //   title: "Notatka 4",
  //   description:
  //     "Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis...",
  //   creationDate: "5 min ago"
  // },
  // {
  //   key: "5",
  //   title: "Notatka 5",
  //   description: "Test",
  //   creationDate: "5 min ago"
  // },
  // {
  //   key: "6",
  //   title: "Notatka 6",
  //   description: "Test",
  //   creationDate: "5 min ago"
  // },
  // {
  //   key: "7",
  //   title: "Notatka 7",
  //   description: "Test",
  //   creationDate: "5 min ago"
  // },
  // {
  //   key: "8",
  //   title: "Notatka 8",
  //   description: "Test",
  //   creationDate: "5 min ago"
  // }
];

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
  }
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    console.log(this);
    this.drawer._root.open();
  };
  openEditor = () => {
    goToEditor(this.props.componentId);
  };
  listIsEmpty = () => {
    return this.props.notes.notesList.length === 0;
  };
  render() {
    let content;
    if (this.listIsEmpty()) content = <EmptyList openEditor={this.openEditor} />;
    else {
      content = (
        <React.Fragment>
          <NoteList dataSource={this.props.notes.notesList} />
          <ActionButton buttonColor="#716AFF" onPress={this.openEditor} />
        </React.Fragment>
      );
    }

    const drawerContent = (<DrawerContent goBack={this.closeDrawer} />)

    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={drawerContent}
      >
        <View style={{ flex: 1, backgroundColor: "#F4F4F4" }}>
          <Header home title="Your Notes" openDrawer={this.openDrawer} />
          {content}
        </View>
      </Drawer>
    );
  }
}
