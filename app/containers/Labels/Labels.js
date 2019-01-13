import React, { Component } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { observer, inject } from "mobx-react/native";
import { colors, fonts, fontStyles, dimensions } from "../../constants/styles";
import Modal from "react-native-modal";
import EditLabelModal from "../../components/EditLabelModal/EditLabelModal";
import { Pencil } from "../../assets/icons";
import LabelItem from "components/LabelItem";

@inject("labels")
@observer
export default class Labels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      activeLabelName: "",
      activeLabelColorId: 0
    };
    this.renderItem = this.renderItem.bind(this);
    this.openModal = this.openModal.bind(this);
  }
  openModal = label => {
    this.setState({
      activeLabelName: label.name,
      activeLabelColorId: label.colorId
    });
    this.setState({
      isVisible: true
    });
  };
  closeModal = () => this.setState({ isVisible: false });
  getItemColor = item => {
    const color = this.props.labels.getColorById(item.colorId);
    return color.value;
  };
  renderItem = ({ item }) => (
    <LabelItem
      label={item}
      openModal={this.openModal}
      getItemColor={this.getItemColor}
    />
  );
  render() {
    return (
      <View style={styles.container}>
        <Modal
          isVisible={this.state.isVisible}
          onBackdropPress={this.closeModal}
        >
          <EditLabelModal
            colors={this.props.labels.colors}
            labelName={this.state.activeLabelName}
            colorId={this.state.activeLabelColorId}
          />
        </Modal>
        <FlatList
          data={this.props.labels.labelsList}
          renderItem={this.renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5
  },
  itemContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 38,
    paddingRight: 40,
    paddingBottom: 10
  },
  circle: {
    alignItems: "flex-end",
    borderRadius: 7,
    backgroundColor: colors.primary,
    width: 7,
    height: 7
  },
  title: {
    ...fontStyles.gilroy,
    color: colors.textPrimary,
    fontSize: fonts.lg,
    paddingLeft: 15
  }
});
