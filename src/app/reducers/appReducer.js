import {
  CHANGE_TEST_STATE,
  GET_ALL_POKEMONS_DATA,
  GET_ALL_POKEMONS_LOADING,
  SET_SEARCH_FILTER_VALUE
} from "../actions";

const INITIAL_STATE = {
  test: 'test',
  getAllPokemonsLoading: false,
  pokemonData: undefined,
  filterValue: undefined,
};

function appReducer(state = INITIAL_STATE, action) {
  const {
    payload
  } = action;
  switch (action.type) {
    case CHANGE_TEST_STATE:
      return {
        ...state,
        test: payload,
      };
    case GET_ALL_POKEMONS_LOADING:
      return {
        ...state,
        getAllPokemonsLoading: payload
      };
    case GET_ALL_POKEMONS_DATA:
      return {
        ...state,
        pokemonData: payload
      };
    case SET_SEARCH_FILTER_VALUE:
      return {
        ...state,
        filterValue: payload
      }
      default:
        return state;
  }
}

export default appReducer;