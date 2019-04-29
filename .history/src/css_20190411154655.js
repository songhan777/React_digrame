import { createMuiTheme } from '@material-ui/core/cre';
const themDefault = createMuiTheme({
    palette: {
        primary: {
            main: '#e91e63'
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