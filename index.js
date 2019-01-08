/** @format */
import React from "react";
import { Navigation } from "react-native-navigation";
import Home from "containers/Home"
import NoteEditor from "containers/NoteEditor"
import { name as appName } from "./app.json";
import MobxRnnProvider from './app/utils/MobxRnnProvider';
import store from "store"


function WrappedComponent(Component){
  return function inject(props){
    const EnhancedComponent = () => (
      <MobxRnnProvider store={store}>
        <Component {...props} />
      </MobxRnnProvider>
    );
    return <EnhancedComponent/>
  }
}

Navigation.registerComponent(`navigation.noteIt.HomeScreen`, () => WrappedComponent(Home));
Navigation.registerComponent(`navigation.noteIt.NoteEditorScreen`, () => WrappedComponent(NoteEditor));

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.noteIt.HomeScreen",
        passProps: {store}
      }
    }
  });
});
