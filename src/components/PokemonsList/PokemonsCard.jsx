import React, { useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import InfoTag from './InfoTag';
import PokeballIcon from '../../images/pokeball1.png';
import FilledPokeballIcon from '../../images/filledPokeball.png';
import { typeColors } from '../../app/config/consts';

const useStyles = makeStyles((props) => ({
  root: {
    padding: '.5rem'
  },
  paperCard: {
    minWidth: '100%',
    height: 'fit-content',
    padding: '.5rem',
    "-moz-box-sizing": 'border-box',
    "box-sizing": 'border-box',
    objectFit: 'contain',
    border: (props) => `5px solid ${props.mainCardColor}`,

    "& :hover": {
      cursor: 'pointer',
    },
  },
  pokemonName: {
    color: props => props.mainCardColor,
    backgroundColor: 'inherit',
    border: props => `3px solid ${props.mainCardColor}`,
    padding: '.2rem',
    borderRadius: '8px',
  },
  pokemonImage: {
    minWidth: '100%',
  }
}));

const PokemonsCard = (props) => {
  const {
    pokemonData
  } = props;
  const [isCaptured, setCaptured] = useState(false);

  const useStylesProps = {
    mainCardColor: typeColors[pokemonData.type[0]],
  };
  const classes = useStyles(useStylesProps);

  const renderTypeChips = () => {
    const pokemonTypeArray = Array.from(pokemonData.type);
    return pokemonTypeArray.map(type => <InfoTag typeArray={type} />);
  };

  return (
    <Grid
      className={classes.root}
      item
      container
      justifyContent="center"
      alignItems="center"
      xs={12}
      sm={6}
      md={4}
      lg={3}
      onClick={() => setCaptured(!isCaptured)}
    >
      <Paper
        className={classes.paperCard}
        elevation={8}
        component="div"
      >
        <Grid container xs={12}>
          <Grid
            item
            container
            direction="column"
            alignItems="flex-start"
            xs={6}
          >
            <img
              src={pokemonData.img}
              alt={pokemonData.name}
              className={classes.pokemonImage}
            />
          </Grid>
          <Grid item container justifyContent="center" xs={6} style={{ backgroundColor: '' }}>
            <Grid item container direction="column" alignItems="center" xs={12}>
              <Typography className={classes.pokemonName} variant="h5" fontWeight={600}>
                {pokemonData.name}
              </Typography>
              <Typography variant="overline" fontWeight={600}>
                #{pokemonData.num}
              </Typography>
              <img
                src={isCaptured ? FilledPokeballIcon : PokeballIcon}
                alt="pokeball"
                width="25px"
              />
            </Grid>
            <Grid item container justifyContent="center" xs={12}>
            </Grid>
            <Grid item container justifyContent="center" xs={12}>
              {renderTypeChips()}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default PokemonsCard;
