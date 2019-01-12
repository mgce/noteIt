import React, { Component } from "react";
import { View } from "react-native";
import { Drawer } from "native-base";
import Header from "components/Header";
import DrawerContent from "components/DrawerContent";

export default (mainWrapper = (WrappedComponent) => (params) =>
  class extends Component {
    constructor(props) {
      super(props);
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
    render() {
      return (
        <React.Fragment>
        <Drawer
          ref={ref => {
            this.drawer = ref;
          }}
          content={<DrawerContent goBack={this.closeDrawer} componentId={this.props.componentId}/>}
        >
          <View style={{ flex: 1, backgroundColor: "#F4F4F4" }}>
            <Header
              home
              title={params.headerTitle}
              openDrawer={this.openDrawer}
            />
            <WrappedComponent />
          </View>
        </Drawer>
        </React.Fragment>
      );
    }
  });
