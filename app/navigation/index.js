import { Navigation } from "react-native-navigation";

export const goToEditor = (componentId, params) => {
    Navigation.showModal({
        component:{
            name: "navigation.noteIt.NoteEditorScreen",
            passProps: {...params}
        }
    })
}