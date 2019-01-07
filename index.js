/** @format */

import { Navigation } from "react-native-navigation";
import Home from "containers/Home"
import NoteEditor from "containers/NoteEditor"
import { name as appName } from "./app.json";

Navigation.registerComponent(`navigation.noteIt.HomeScreen`, () => Home);
Navigation.registerComponent(`navigation.noteIt.NoteEditorScreen`, () => NoteEditor);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.noteIt.HomeScreen"
      }
    }
  });
});
