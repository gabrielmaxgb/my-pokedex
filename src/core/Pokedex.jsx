import React from 'react';
import { makeStyles } from '@mui/styles';
// import { connect } from 'react-redux';
// import { getAllPokemonsData as getAllPokemonsDataAction } from '../app/actions';
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

// const mapStateToProps = (state) => ({
//   appState: state.appReducer,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getAllPokemonsData: () => dispatch(getAllPokemonsDataAction()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);

export default Pokedex;
