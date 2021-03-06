import {StyleSheet, Dimensions} from 'react-native'

export const colors = {
    light: "#F4F4F4",
    primary: "#716AFF",
    primaryDarker: "#4c47aa",
    textPrimary: "#545454",
    textSecondary:"#A0A0A0"
}

export const fonts = {
    xl: 30,
    lg: 22,
    md: 14,
    sm: 11
}

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
  }

  export const fontStyles = {
      gilroy : {
        fontFamily: "Gilroy",
        fontWeight: "900"
      },
      interUi : {
        fontFamily: "Inter UI",
        fontWeight: "normal"
      }
  }