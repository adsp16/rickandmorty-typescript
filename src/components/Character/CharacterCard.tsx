import React from 'react'; 
import { Link } from "react-router-dom";
import { useStyles } from "../../styles/jss/Character/CharacterCardJSS";
import {Character} from '../../redux/reducers/characters'

import {
  Card,
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

interface Props {
  char : Character;
}


const CharacterCard : React.FC<Props> = ({char}) => {

  const classes = useStyles();

  return (
      <React.Fragment>
      {char ? <Link style={{ textDecoration: "none" }} to={`/characters/${char.id}`}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              alt={char.name}
              image={char.image}
              title={char.name}
            />
            <CardContent className={classes.cardContent}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                className={classes.nameBox}
              >
                {char.status === "Alive" ? (
                  <span className={classes.greenLight}></span>
                ) : (
                  <span className={classes.redLight}></span>
                )}
                <Typography variant="h5" noWrap>
                  {char.name.slice(0, 18)}
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link> : null}
      
    </React.Fragment>
  );
};

export default CharacterCard;
