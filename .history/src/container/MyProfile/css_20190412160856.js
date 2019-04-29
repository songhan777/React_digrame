import red from '@material-ui/core/colors/red'
import deepOrange from '@material-ui/core/colors/deepOrange'

const drawerWidth = 100;
export const styles = theme => ({
    root: {
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        //z-index: 1300,
        position: 'fixed',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        zIndex:-1,
        width: drawerWidth,
    },
    toolbar: {height:48} ,
    container: {
      height: '100%',
      backgroundColor: red[500],
      display: 'flex',
  },
  first: {
      flex: '1 1 auto',
      width: 100,
      backgroundColor: theme.palette.primary.main
  },
  secondiry: {
      flex: '1 1 auto',
      width: 150,
      backgroundColor: theme.palette.grey[200],
      padding:theme.spacing.unit * 1
  },
  first_Ava: {
      width: 100,
      height: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10 ,
  },
  active: {
      backgroundColor: theme.palette.grey[200],
       borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20, 
      //boxShadow:'inset 10px 0 0 rgba(59,76,113)'
  },
  avatar: {
      color: theme.palette.text,
      backgroundColor: deepOrange[500],
      width: 50,
      height: 50,
  },
  title: {
      marginTop: `${theme.spacing.unit * 2}px`
  },
  paper: {
      display: 'flex',
      alignItems:"center",
      marginTop: `${theme.spacing.unit * 2}px`
  },
    contentContainer:{
        width:`90%`,
        height:`100%`,
        position:`absolute`,
        top:`70px`,
        right:`1%`
    }
});