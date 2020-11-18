import { makeStyles, createStyles } from "@material-ui/core/styles";
import {Theme} from '@material-ui/core/styles/createMuiTheme'; 


export const useStyles = makeStyles((theme : Theme) => createStyles({
  mainImage: {
    width: "100%",
    height: "100%",
    gridColumn: "1/-1",
    gridRow: "1/-1",
    fill: "#BBBBBB",
  },
  headerWrapper: {
    height: "50vh",
    display: "grid",
    gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    padding: "1rem",
  },
  searchBox: {
    gridColumn: "1/-1",
    gridRow: "3/4",
    width: "100%",
  },
  root: {
    padding: "6px 12px",
    display: "flex",
    alignItems: "center",
    width: 600,

    [theme.breakpoints.down("xs")]: {
      width: "auto",
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 6,
  },
}));
