import React from "react";
import { StyleSheet, View } from "react-native";
import { Form, Item, Input, Textarea, Label } from "native-base";
import { colors, fonts } from "constants/styles";
import Header from "components/Header";
import { Navigation } from "react-native-navigation";

export default class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }
  goBack(){
      Navigation.dismissAllModals();
  }
  render() {
    return (
      <View style={styles.container} >
        <Header editor goBack={this.goBack}/>
        <Form>
          <Item>
            <Input
              style={styles.title}
              placeholder="Title"
              placeholderTextColor={colors.primary}
            />
          </Item>
          <Textarea rowSpan={15} placeholder="Put your note here.." />
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
    paddingHorizontal: 5
    // height: dimensions.fullHeight,
    // width: dimensions.fullWidth
  },
  title: {
    color: colors.primary,
    fontFamily: "Gilroy",
    fontSize: fonts.lg,
    fontWeight: "900",
    paddingRight: 10 
  },
  textarea:{
    color: colors.textPrimary,
    fontFamily: "Inter UI",
    fontSize: fonts.md,
    fontWeight: "900",
  }
});
