import { Navigation } from "react-native-navigation";

export const goToEditor = (componentId, params) => {
    Navigation.showModal({
        component:{
            name: "navigation.noteIt.NoteEditorScreen",
            passProps: {...params}
        }
    })
}

export const goToLabels = (componentId) => {
    Navigation.push(componentId, {
        component:{
            name:"navigation.noteIt.LabelsScreen",
            options:{
                topBar:{
                  visible: false,
                  drawBehind: true
                }
              }
        }
    })
}