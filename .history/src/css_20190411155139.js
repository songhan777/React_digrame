import { createMuiTheme } from '@material-ui/core/styles';
const themDefault = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#e91e63'
        },
        secondary:{

        }
    }

})
const themeGreen = createMuiTheme({
    palette: {
        primary: {
            main: '#11cb5f'
        }
    }

})
export const themeObj = { themDefault, themeGreen }