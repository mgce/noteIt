import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../constants/styles";
import Header from "../Header";
import DrawerItem from "../DrawerItem"
import {goToLabels} from "navigation"
import {Content} from "native-base";

export default class DrawerContent extends React.PureComponent {
  constructor(props){
    super(props);
    this.navigateToLabels = this.navigateToLabels.bind(this);
  }
  navigateToLabels=()=>{
    this.props.goBack();
    goToLabels(this.props.componentId);
  }
  render() {
    return (
      <Content style={styles.container}>
        <Header inDrawer title="Menu" goBack={this.props.goBack} />
        <View style={styles.menuItemsContainer}>
          <DrawerItem active>
            Notes
          </DrawerItem>
          <DrawerItem>
            Add Note
          </DrawerItem>
          <DrawerItem>
            Trash
          </DrawerItem>
          <DrawerItem onPress={this.navigateToLabels}>
            Edit labels
          </DrawerItem>
          <DrawerItem>
            Contact us
          </DrawerItem>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
    flexDirection: "column"
  },
  menuItemsContainer: {
    paddingLeft: 50,
    marginTop: 73
  }
});
