import { makeStyles, createStyles } from "@material-ui/core/styles";
import {Theme} from '@material-ui/core/styles/createMuiTheme';


export const useStyles = makeStyles((theme : Theme) => createStyles({
  CharacterBackground: {
    backgroundColor: "#24282F",
    padding: "3rem",
  },

  pagination: {
    "& > *": {
      margin: theme.spacing(2),
      color: 'white',
      backgroundColor: "white",
    },
  },
}));
