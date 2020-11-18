import React from 'react'; 
import CharacterCard from "../../components/Character/CharacterCard";
import { Grid, Box, Container, CircularProgress } from "@material-ui/core";
import { RootState } from '../../redux/store/store';
import { useSelector } from "react-redux";
import { Character } from '../../redux/reducers/characters';

interface Props {
  isLoading : boolean;
};

const CharacterList : React.FC<Props> = ({ isLoading }) => {

  const charData = useSelector((state : RootState) => state.character.allCharacters);


  return (
    <React.Fragment>
      <Container maxWidth="xl">
        {isLoading ? (
          <Box
            style={{ height: "50vh" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress style={{ color: "white" }} />
          </Box>
        ) : (
          <Grid container spacing={2}>
            {charData.map((result : Character, index : number) => {
              return (
                <Grid component={'div' as any} item xs={12} s={6} md={4} lg={3} xl={2} key={index} >
                  <Box display="flex" justifyContent="center">
                    <CharacterCard char={result} />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Container>
    </React.Fragment>
  );
};

export default CharacterList;
