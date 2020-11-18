import * as React from 'react'; 
import { useStyles } from "../../styles/jss/Character/CharacterInfoCardJSS";
import { Card, Box, CardContent, Typography } from "@material-ui/core/"
import { Char } from "../Types/ComponentTypes";


interface Props {
  char : Char
}

const CharInfoCard : React.FC<Props> =  ({ char }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h2">{char.name}</Typography>
          <Box display="flex" alignItems="center">
            <Typography variant="h6" gutterBottom>
              {char.status}
            </Typography>
            {char.status === "Alive" ? (
              <div className={classes.greenLight}></div>
            ) : (
              <div className={classes.redLight}></div>
            )}
          </Box>
          <Box my={3} display="flex" alignItems="center">
            <Typography style={{ marginRight: "0.6rem" }}>
              Species :{" "}
            </Typography>
            <Typography variant="h5">{char.species}</Typography>
          </Box>
          <Box display="flex" alignItems="center" my={3}>
            <Typography style={{ marginRight: "0.6rem" }}>Type : </Typography>
            {char.type === "" ? (
              <Typography variant="h5">No Type</Typography>
            ) : (
              <Typography variant="h5">{char.type}</Typography>
            )}
          </Box>
          <Box my={3} display="flex" alignItems="center">
            <Typography style={{ marginRight: "0.6rem" }}>Gender :</Typography>
            <Typography variant="h5">{char.gender}</Typography>
          </Box>
          <Box my={3} display="flex" alignItems="center">
            <Box display="flex" justifyContent="space-between">
              <Typography style={{ marginRight: "0.4rem" }}>Origin:</Typography>
              <Typography variant="h5">{char.origin.name}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default CharInfoCard;
