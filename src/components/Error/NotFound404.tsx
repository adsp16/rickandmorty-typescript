import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import middleFinger from "../../styles/svg/14.svg";
import { useStyles } from "../../styles/jss/Utils/404JSS";

const NotFound404 : React.FC = () => {

  const classes = useStyles();
  let history = useHistory();

  const routeChange = () => {
    const path = "/";
    history.push(path);
  };

  return (
    <React.Fragment>
      <Box className={classes.container}>
        <Grid container>
          <Grid item xs={12}>
            <Box
              className={classes.container}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography gutterBottom variant="h3">
                404 Not Found
              </Typography>
              <Button onClick={routeChange} color="primary" variant="contained">
                Back To Safety
              </Button>
              <img alt="404" className={classes.fourOfour} src={middleFinger} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default NotFound404;
