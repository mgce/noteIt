import React, { PureComponent } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import { colors, fonts, fontStyles, dimensions } from "../../constants/styles";
import { Close } from "../../assets/icons/Icons";
import Circle from "components/Circle";

export default class SelectLabelList extends PureComponent {
  constructor(props) {
    super(props);
  }
  renderItem = ({ item }) => {
    const color = this.props.colorList.find(c => c.id === item.colorId);
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => console.log("clicked")}
      >
        <Circle style={{ backgroundColor: color.value }} />
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.close} onPress={this.props.closeModal}>
          <Close />
        </TouchableOpacity>
        <View>
          <FlatList
            data={this.props.dataSource}
            renderItem={this.renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    paddingHorizontal: 34,
    paddingVertical: 20
  },
  close: {
    alignItems: "flex-end"
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 5
  },
  title: {
    ...fontStyles.gilroy,
    color: colors.textPrimary,
    fontSize: fonts.lg,
    paddingLeft: 15
  }
});
