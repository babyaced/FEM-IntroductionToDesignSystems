import {blue, neutral,yellow,green,red} from './colors';
import {primaryFont} from './typography';

export const defaultTheme = {
    primaryColor: blue[200],
    primaryColorHover: blue[100],
    primaryColorActive: blue[100],
    textColorOnPrimary: neutral[100],
    textColor: neutral[600],
    textColorInverted: neutral[100],
    disabled: blue[300],
    textColorOnDisabled: neutral[300],
    primaryFont,

    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
      }
},

export const darkTheme = {
    primaryColor: neutral[100],
    primaryColorHover: neutral[200],
    primaryColorActive: neutral[100],
    textColorOnPrimary: blue[400],
    textColor: blue[300],
    textColorInverted: blue[400],
    disabled: neutral[500],
    textColorOnDisabled: neutral[400],
    primaryFont,

    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
      }
}