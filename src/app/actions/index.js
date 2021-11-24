import axios from "axios";

export const CHANGE_TEST_STATE = 'CHANGE_TEST_STATE';
export const GET_ALL_POKEMONS_LOADING = 'GET_ALL_POKEMONS_LOADING';
export const GET_ALL_POKEMONS_DATA = 'GET_ALL_POKEMONS_DATA';
export const SET_SEARCH_FILTER_VALUE = 'SET_SEARCH_FILTER_VALUE';

const POKEMON_BASE_API = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';

export const changeTestState = () => ({
  type: CHANGE_TEST_STATE,
  payload: 'tested'
});

export const getAllPokemonsData = () => {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_POKEMONS_LOADING,
      payload: true,
    });
    axios
      .get(POKEMON_BASE_API)
      .then((response) => {
        // console.log(response.data)
        dispatch({
          type: GET_ALL_POKEMONS_DATA,
          payload: response.data,
        });
        dispatch({
          type: GET_ALL_POKEMONS_LOADING,
          payload: false,
        });
      })
      .catch((e) => {
        dispatch({
          type: GET_ALL_POKEMONS_DATA,
          payload: false,
        });
        console.log(e);
      });
  };
};

export const setSearchFilterValue = (filterParam) => {
  console.log('setSearchFilterValue')
  console.log(filterParam);
  return dispatch => dispatch({
    type: SET_SEARCH_FILTER_VALUE,
    payload: filterParam,
  })
};