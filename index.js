/** @format */

import { Navigation } from "react-native-navigation";
import Home from "containers/Home"
import NoteEditor from "containers/NoteEditor"
import { name as appName } from "./app.json";
import { Provider } from 'mobx-react/native';
import store from "store"

Navigation.registerComponentWithRedux(`navigation.noteIt.HomeScreen`, () => Home, Provider, store);
Navigation.registerComponentWithRedux(`navigation.noteIt.NoteEditorScreen`, () => NoteEditor, Provider, store);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.noteIt.HomeScreen"
      }
    }
  });
});
