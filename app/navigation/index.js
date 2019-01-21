import { Navigation } from "react-native-navigation";

export const goToHome = () => {
    Navigation.setRoot({
        root: {
          stack: {
            children:[
              {
                component:{
                  name: "navigation.noteIt.HomeScreen",
                  options:{
                    topBar:{
                      visible: false,
                      drawBehind: true
                    }
                  }
                }
              }
            ]
          }
        }
      });
}

export const backToHome = (componentId) => {
    Navigation.popToRoot(componentId);
}

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