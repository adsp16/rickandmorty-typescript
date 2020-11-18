import { makeStyles, createStyles } from "@material-ui/core/styles";
import {Theme} from '@material-ui/core/styles/createMuiTheme';


export const useStyles = makeStyles((theme : Theme) => 
createStyles({
  container: {
    height: "100vh",
    width: "100vw",
  },
  fourOfour: {
    width: 500,
    margin: "4rem 0rem",
  },
}));
