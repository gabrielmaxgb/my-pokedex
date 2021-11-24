import { Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { styled } from "@mui/material/styles";
import { typeColors } from '../../app/config/consts';

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: '.2rem',
    color: 'red',
    "& .MuiChip-colorPrimary": {
      color: 'pink',
    }
  }
}));

const InfoChip = styled(Chip)((props) => {
  return ({
    "& .MuiChip-label": {
      color: typeColors[props.chipColor],
    }
  }
  );
});

const InfoTag = (props) => {
  const {
    typeArray
  } = props;
  const classes = useStyles();

  return (
    <InfoChip
      className={classes.chip}
      label={typeArray}
      chipColor={typeArray}
      size="small"
      variant="outlined"
    />
  );
}

export default InfoTag;
