import React, { PureComponent, Component } from "react";
import { StyleSheet, FlatList, View, Text, Animated, Easing } from "react-native";
import NoteCard from "components/NoteCard";
import { SwipeListView } from "react-native-swipe-list-view";
import UnderNoteCard from "../UnderNoteCard";
import { dimensions } from "constants/styles";

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.rowTranslateAnimatedValue = new Animated.Value(0);
  }
  onSwipeValueChange = () => {
    var easing = Easing.ease;
    this.rowTranslateAnimatedValue.setValue(0)
      Animated.timing(
        this.rowTranslateAnimatedValue,
        {
          toValue: 1,
          duration: 100,
          easing
        }
    ).start()
  };
  // renderItem = ({ item }) => (
  //   <NoteCard
  //     key={item.key}
  //     title={item.title}
  //     description={item.body}
  //     dateCreate={item.dateCreate}
  //   />
  // );
  renderItem = ({ item }) => (
    <Animated.View
      style={{
        flex:1,
        height: this.rowTranslateAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [100, 0]
        })
      }}
    >
      <NoteCard
        key={item.key.toString()}
        title={item.title}
        description={item.body}
        dateCreate={item.dateCreate}
      />
    </Animated.View>
  );
  render() {
    return (
      <SwipeListView
        useFlatList
        style={styles.list}
        data={this.props.dataSource}
        renderItem={this.renderItem}
        renderHiddenItem={(data, rowMap) => <UnderNoteCard />}
        // leftOpenValue={75}
        leftOpenValue={dimensions.fullWidth}
        rightOpenValue={0}
        onSwipeValueChange={this.onSwipeValueChange}
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
