import { Navigation } from "react-native-navigation";

export const goToEditor = (componentId) => {
    Navigation.showModal({
        component:{
            name: "navigation.noteIt.NoteEditorScreen"
        }
    })
}