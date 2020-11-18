import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { Box, Typography } from "@material-ui/core";
import CharacterList from "../components/Character/CharacterList";
import Header from "../components/layout/Header";
import { searchName, getAllChars } from '../redux/actions/characters';
import { useStyles } from "../styles/jss/Home/HomeJSS";
import { useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router";


interface Props extends RouteComponentProps { }

const Home: React.FC<Props> = () => {
  const classes = useStyles();
  const dispatch: any = useDispatch();
  const [isLoading, setisLoading] = useState(true);
  const [noChar, setNoChar] = useState(false);

  useEffect(() => {
    setisLoading(true);
    setNoChar(false);
    const timeout = setTimeout(() => {
      dispatch(getAllChars(1))
        .then(() => {
          setisLoading(false);
        })
        .catch(() => {
          setisLoading(false);
          setNoChar(true);
        });
    }, 1000);

    return () => clearTimeout(timeout);
  }, [dispatch]);

  const handleNextPage = (event : object, page: number) => {
    setisLoading(true);
    setNoChar(false);
    setTimeout(() => {
      dispatch(getAllChars(page))
        .then(() => {
          setisLoading(false);
        })
        .catch(() => {
          setisLoading(false);
          setNoChar(true);
        });
    }, 1000);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setisLoading(true);
    setNoChar(false);
    setTimeout(() => {
      dispatch(searchName(event.target.value))
        .then(() => {
          setisLoading(false);
        })
        .catch(() => {
          setNoChar(true);
        });
    }, 2000);
  };

  return (
    <React.Fragment>
      <div>
        <Header handleSearch={handleSearch} />
      </div>
      <div className={classes.CharacterBackground}>
        {noChar ? (
          <Typography align="center" variant="h2">
            No Characters Found!
          </Typography>
        ) : (
            <CharacterList isLoading={isLoading} />
          )}
      </div>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Pagination
          className={classes.pagination}
          count={20}
          onChange={handleNextPage}
        />
      </Box>
    </React.Fragment>
  );
};

export default Home;
