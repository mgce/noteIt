import React, { PureComponent } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import NoteCard from "components/NoteCard";
import { SwipeListView } from "react-native-swipe-list-view";
import UnderNoteCard from "../UnderNoteCard"

export default class NoteList extends PureComponent {
  constructor(props) {
    super(props);
  }
  renderItem = ({ item }) => (
    <NoteCard
      key={item.key}
      title={item.title}
      description={item.description}
      creationDate={item.creationDate}
    />
  );
  render() {
    return (
      <SwipeListView
        useFlatList
        style={styles.list}
        data={this.props.dataSource}
        renderItem={this.renderItem}
        renderHiddenItem={ (data, rowMap) => (
          <UnderNoteCard/>
      )}
        leftOpenValue={75}
        rightOpenValue={-75}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    marginTop: 13,
    width: "100%"
  }
});
