import { createStyles  } from "@material-ui/core/styles";
import makeStyles from '@material-ui/core/styles/makeStyles';
import {Theme} from '@material-ui/core/styles/createMuiTheme';


export const useStyles = makeStyles((theme : Theme) => 
createStyles({
  root: {
    width: "100%",
  },
  nameBox: {
    width: "100%",
  },
  cardContent: {
    backgroundColor: theme.palette.secondary.main,
  },
  redLight: {
    height: "0.9rem",
    width: "0.9rem",
    marginRight: "0.375rem",
    background: "rgb(214, 61, 46)",
    borderRadius: "50%",
  },
  greenLight: {
    background: "rgb(57,255,20)",
    height: "0.9rem",
    width: "0.9rem",
    marginRight: "0.375rem",
    borderRadius: "50%",
  },
  media: {
    height: "100%",
    width: "100%",
  },
}));
