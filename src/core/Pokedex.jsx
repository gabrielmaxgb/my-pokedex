import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Header from '../components/Header/Header'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#F5F6F6',
    minHeight: '100vh',
  }
}));

const Pokedex = () => {
  const classes = useStyles();

  return (
    // <Container className={classes.root} maxWidth="false">
    <div className={classes.root}>
      <Header />
    </div>
    // </Container>
  );
}

export default Pokedex;
