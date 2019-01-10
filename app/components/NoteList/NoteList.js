import React, { PureComponent, Component } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Animated,
  Easing
} from "react-native";
import NoteCard from "components/NoteCard";
import { SwipeListView } from "react-native-swipe-list-view";
import UnderNoteCard from "../UnderNoteCard";
import { dimensions } from "constants/styles";

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.rowTranslateAnimatedValue = new Animated.Value(1);
  }
  onSwipeValueChange = animatedItem => {
    const { key, value } = animatedItem;
    var ease = Easing.ease;
    this.rowTranslateAnimatedValue.setValue(1);
    if(value > dimensions.fullWidth/2 && !this.animationIsRunning){
      this.animationIsRunning = true;
      Animated.timing(this.rowTranslateAnimatedValue, {
        toValue: 0,
        duration: 200,
        ease
      }).start(() => {
        this.props.deleteAction(key);
        this.animationIsRunning = false;
      });
    }
    
  };
  renderItem = ({ item }) => (
      <Animated.View
        style={{
          // height: this.rowTranslateAnimatedValue.interpolate({
          //   inputRange: [0, 1],
          //   outputRange: [0, 50]
          // })
        }}
      >
        <NoteCard
          key={item.key}
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
        leftOpenValue={dimensions.fullWidth}
        disableLeftSwipe
        onSwipeValueChange={this.onSwipeValueChange}
        keyExtractor={item => item.key.toString()}
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
