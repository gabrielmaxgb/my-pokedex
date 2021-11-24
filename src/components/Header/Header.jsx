import React, { useState } from 'react';
import {
  Container,
  Grid,
  TextField, Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import { SearchButton } from './headerStyles';
import { connect } from 'react-redux';
import {
  // changeTestState as changeTestStateAction,
  setSearchFilterValue as setSearchFilterValueAction
} from '../../app/actions';

const useStyles = makeStyles(theme => ({
  headerInputArea: {
    dispĺay: 'flex',
    alignItems: 'center',

    backgroundColor: '#313131',
    padding: '1.5rem 0',
  },
  inputField: {
    backgroundColor: 'transparent',
    "& .MuiOutlinedInput-root": {
      borderColor: 'white'
    },
  }
}));

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#F5F6F6"
  },
  "& label": {
    color: "#F5F6F6"
  },
  "& .MuiInputBase-input": {
    color: '#F5F6F6'
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: '3px solid #F5F6F6',
    },
    "&:hover fieldset": {
      borderColor: "#F5F6F6"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#F5F6F6"
    }
  }
});

const Header = (props) => {
  const {
    // changeTestState,
    setSearchFilterValue,
    appState
  } = props;
  const [filterValue, setFilterValue] = useState(undefined)
  const classes = useStyles();

  const handleSearchClick = () => {
    setSearchFilterValue(filterValue);
    console.log(appState);
  };

  const handleKeyDown = (event) => {
    const filter = event.target.value;
    setFilterValue(filter);
    if (event.key === 'Enter') {
      console.log(filter);
      setSearchFilterValue(filterValue);
    }
  }

  return (
    <>
      <Container maxWidth="false">
        <Container maxWidth="xl">
          <Typography variant="h4" color="#8D8D8D" padding=".7rem 0">
            Pokédex
          </Typography>
        </Container>
      </Container>
      <Container className={classes.headerInputArea} maxWidth="false">
        <Container maxWidth="xl">
          <Grid container alignItems="center" xs={12}>
            <CssTextField
              label="Name or Number"
              id="custom-css-outlined-input"
              onChange={(event) => setFilterValue(event.target.value)}
              onKeyDown={(event) => handleKeyDown(event)}
            />
            <SearchButton onClick={() => handleSearchClick()}>
              <SearchIcon fontSize="large" sx={{ color: '#F5F6F6' }} />
            </SearchButton>
          </Grid>
        </Container>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => ({
  appState: state.appReducer,
});

const mapDispatchToProps = (dispatch) => ({
  // changeTestState: () => dispatch(changeTestStateAction()),
  setSearchFilterValue: (filterParam) => dispatch(setSearchFilterValueAction(filterParam)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
