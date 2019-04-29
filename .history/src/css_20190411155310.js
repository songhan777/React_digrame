import { createMuiTheme } from '@material-ui/core/styles';
const themDefault = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            //main: '#e91e63',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary:{
            //light: '#0066ff',
            //main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            //contrastText: '#ffcc00',
        },
        // error: will use the default color
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