import React from 'react';
import {
  Container,
  Grid,
  TextField, Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import { SearchButton } from './headerStyles';

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
    // color: "red"
    color: "#F5F6F6"
  },
  "& label": {
    color: "#F5F6F6"
  },
  // "& .MuiInput-underline:after": {
  //   borderBottomColor: "green"
  // },
  "& .MuiInputBase-input": {
    color: '#F5F6F6'
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      // borderColor: "#8D8D8D"
      border: '3px solid #F5F6F6',
      // backgroundColor: '#F5F6F6',
      // color: 'gray'
    },
    "&:hover fieldset": {
      borderColor: "#F5F6F6"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#F5F6F6"
    }
  }
});

const Header = () => {
  const classes = useStyles();

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
            />
            <SearchButton>
              <SearchIcon fontSize="large" sx={{ color: '#F5F6F6' }} />
            </SearchButton>
          </Grid>
        </Container>
      </Container>
    </>
  );
}

export default Header;
