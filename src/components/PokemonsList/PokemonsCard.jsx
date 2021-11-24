import { Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import InfoTag from './InfoTag';

const useStyles = makeStyles((theme) => ({
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
    border: '10px solid black',

    "& :hover": {
      cursor: 'pointer',
    }
  },
  pokemonImage: {
    minWidth: '100%',
  }
}));

const PokemonsCard = (props) => {
  const {
    pokemonData
  } = props;
  const classes = useStyles();

  // console.log(pokemonData);

  const renderTypeChips = () => {
    const pokemonTypeArray = Array.from(pokemonData.type);
    // console.log(pokemonTypeArray.map(type => <InfoTag typeArray={type} />));
    return pokemonTypeArray.map(type => <InfoTag typeArray={type} />);
  };

  return (
    <Grid className={classes.root} item justifyContent="center" alignItems="center" container xs={12} sm={6} md={4} lg={3}>
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
          // sm={6}
          >
            <img src={pokemonData.img} alt={pokemonData.name} className={classes.pokemonImage} />
            {/* <Typography variant="overline" fontWeight={600}>
              #{pokemonData.num}
            </Typography> */}
          </Grid>
          <Grid item container justifyContent="center" xs={6} style={{ backgroundColor: '' }}>
            <Grid item container direction="column" alignItems="center" xs={12}>
              <Typography variant="h5">
                {pokemonData.name}
              </Typography>
              <Typography variant="overline" fontWeight={600}>
                #{pokemonData.num}
              </Typography>
            </Grid>
            <Grid item container justifyContent="center" xs={12}>
            </Grid>
            <Typography variant="h5">
              Type:
            </Typography>
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