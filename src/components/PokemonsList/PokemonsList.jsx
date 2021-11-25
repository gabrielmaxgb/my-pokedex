import React, { useEffect } from 'react';
import { Container, Grid, Typography, useMediaQuery } from '@mui/material';
import { connect } from 'react-redux';
import { getAllPokemonsData as getAllPokemonsDataAction } from '../../app/actions';
import Genericloading from '../loading/GenericLoading';
import PokemonsCard from './PokemonsCard';
import { useTheme } from '@mui/material/styles';

const Pokemonslist = (props) => {
  const {
    getAllPokemonsData,
    appState,
  } = props;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only('xs'));
  const sm = useMediaQuery(theme.breakpoints.only('sm'));

  useEffect(() => {
    getAllPokemonsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderAllPokemons = () => {
    const pokemonArray = Array.from(appState.pokemonData.pokemon);
    return appState.filterValue === undefined || appState.filterValue === "" ? (
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
      <Grid container alignItems="center" justifyContent="center" xs={12}>
        <Typography variant={xs || sm ? 'h5' : 'h3'} fontWeight={650} marginTop="2rem" color="#8D8D8D">
          Click on the pokemon you have already captured!
        </Typography>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="flex-start"
        xs={12}
        style={{
          margin: '2rem 0',
          padding: '.5rem',
          borderRadius: '8px',
          backgroundColor: '#313131',
          // backgroundColor: '#FFCB03',
          // border: '6px solid #3269B3'
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
