import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {RootState} from "../../redux/store/store";
import {getLocation} from '../../redux/actions/location';
import { useStyles } from "../../styles/jss/Character/OriginSectionJSS";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const OriginSection : React.FC = () => {
  const classes = useStyles();
  const dispatch : Function = useDispatch();
  const char = useSelector((state : RootState) => state.character.character);
  const location = useSelector((state : RootState) => state.location.location);

  useEffect(() => {

    if (char) {
      const url = char.location.url;
      const sliced = url.slice(31);
      dispatch(getLocation(sliced))
        .then(() => {})
        .catch((err : object) => console.log(err));
    }
  }, [char, dispatch]);

  return (
    <div className={classes.root}>
      {char ? <Accordion className={classes.mainSection}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.downIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4" className={classes.heading}>
            Origin
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" alignItems="center">
            <Typography style={{ marginRight: "0.6rem" }}>
              Dimension :
            </Typography>
            <Typography variant="h5">{location.dimension}</Typography>
          </Box>
        </AccordionDetails>
        <AccordionDetails>
          <Box display="flex" alignItems="center">
            <Typography style={{ marginRight: "0.6rem" }}>Name :</Typography>
            <Typography variant="h5">{location.name}</Typography>
          </Box>
        </AccordionDetails>
        <AccordionDetails>
          <Box display="flex" alignItems="center">
            <Typography style={{ marginRight: "0.6rem" }}>Type:</Typography>
            <Typography variant="h5">{location.type}</Typography>
          </Box>
        </AccordionDetails>
      </Accordion> : null }
    
    </div>
  );
};

export default OriginSection;
