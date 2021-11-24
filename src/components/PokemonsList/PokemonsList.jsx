import React, { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import { connect } from 'react-redux';
import { getAllPokemonsData as getAllPokemonsDataAction } from '../../app/actions';
import Genericloading from '../loading/GenericLoading';
import PokemonsCard from './PokemonsCard';

const Pokemonslist = (props) => {
  const {
    getAllPokemonsData,
    appState,
  } = props;

  useEffect(() => {
    getAllPokemonsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderAllPokemons = () => {
    console.log(Array.from(appState.pokemonData.pokemon))
    const pokemonArray = Array.from(appState.pokemonData.pokemon);
    return appState.filterValue === undefined ? (
      pokemonArray.map((pokemonData) => <PokemonsCard pokemonData={pokemonData} />)
    ) : (
      pokemonArray
        .filter((pokemonData) => pokemonData.name.toLowerCase().includes(appState.filterValue.toLowerCase()) || pokemonData.num.includes(appState.filterValue))
        .map((pokemonData) => <PokemonsCard pokemonData={pokemonData} />)
    )
  };

  if (appState.getAllPokemonsLoading) {
    return <Genericloading />;
  }

  return (
    <Container maxWidth="xl">
      <Grid
        container
        alignItems="center"
        justifyContent="flex-start"
        xs={12}
        style={{
          padding: '2rem 0',
        }}
      >
        {appState.pokemonData !== undefined && renderAllPokemons()}
      </Grid>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  appState: state.appReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getAllPokemonsData: () => dispatch(getAllPokemonsDataAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pokemonslist);