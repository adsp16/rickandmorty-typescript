import React, { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import { useStyles } from "../styles/jss/Character/CharacterJSS";
import { Box, Grid, Container } from "@material-ui/core";
import NotFound404 from "../components/Error/NotFound404";
import { useSelector, useDispatch } from "react-redux";
import {RootState } from "../redux/store/store";
import {getSingleChar} from "../redux/actions/characters";
import {RouteComponentProps} from 'react-router-dom';
import CharacterCard from "../components/Character/CharacterCard";
import OriginSection from "../components/Character/OriginSection";
import CharInfoCard from "../components/Character/CharInfoCard";

 type TParams = {id : string}
 

 interface Props extends RouteComponentProps<TParams> {}


const Character : React.FC<Props> = ({match}) => {
  const classes = useStyles();
  const dispatch : any  = useDispatch();
  const [charState, setCharState] = useState(0);
  const char = useSelector((state : RootState) => state.character.character)

  const id= parseInt(match.params.id);

  useEffect(() => {

    const timer = setTimeout(() => {
        dispatch(getSingleChar(id)).then(() => {
          setCharState(1);
        })
        .catch(()=> console.log('done'));
    }, 1000);
    return () => clearTimeout(timer);
  }, [dispatch, id]);

  const Char = () => {
    switch (charState) {
      case 0:
        return (
          <Box display="flex" justifyContent="center" alignItems="center">
            <CircularProgress />
          </Box>
        );
      case 1:
        return (
          <Grid spacing={2} container>
            <Grid item xs={12} md={6}>
              <CharacterCard char={char} />
            </Grid>
            <Grid item xs={12} md={6}>
              <CharInfoCard char={char} />
            </Grid>
            <Grid item xs={12}>
              <OriginSection />
            </Grid>
          </Grid>
        );
      case 2:
        return <NotFound404 />;
      default:
        return "Should never make it here";
    }
  };

  return (
    <React.Fragment>
      <Box className={classes.charWrapper}>
        <Container disableGutters>{Char()}</Container>
      </Box>
    </React.Fragment>
  );
};

export default Character;
