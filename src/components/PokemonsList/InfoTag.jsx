import { Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: '.4rem',
  }
}));

const InfoTag = (props) => {
  const {
    typeArray
  } = props;
  const classes = useStyles();

  return (
    <Chip
      className={classes.chip}
      label={typeArray}
      size="small"
    />
  );
}

export default InfoTag;
