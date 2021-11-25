import React from 'react';
import { makeStyles } from '@mui/styles';
import Header from '../components/Header/Header'
import Pokemonslist from '../components/PokemonsList/PokemonsList';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#F5F6F6',
    minHeight: '100vh',
  }
}));

const Pokedex = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Pokemonslist />
    </div>
  );
}

export default Pokedex;
