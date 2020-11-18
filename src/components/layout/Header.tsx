import React from "react";
import { useStyles } from "../../styles/jss/Home/HeaderJSS";
import { Box, Paper, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import rickMorty from "../../styles/svg/30.svg";


interface Props {
  handleSearch : (event : React.ChangeEvent<HTMLInputElement> ) => void;
} 

const Header : React.FC<Props> = ({ handleSearch }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.headerWrapper}>
        <img
          alt="Character"
          className={classes.mainImage}
          src={rickMorty}
        ></img>
        <Box
          className={classes.searchBox}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Paper component="form" className={classes.root}>
            <InputBase
              onChange={handleSearch}
              className={classes.input}
              placeholder="Search Characters"
              inputProps={{ "aria-label": "character search" }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Header;
