import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/deepOrange'
const themDefault = createMuiTheme({
    custom: {//自定义主题颜色
        primary: {
            //light:
            //dark:
            //main:
            //contrastText:
        },
        //barShadowColor:'rgba(108,148,204)'
    },
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: 'rgba(59,76,113)',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary:{
            //light: '#0066ff',
            main: orange[500],
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
        },
        secondary: {
           main: '#ffeb3d'
        }
    }

})
export const themeObj = { themDefault, themeGreen }