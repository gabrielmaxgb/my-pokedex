import React from 'react';
import { Container, Grid, Typography, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import { minHeight } from '@mui/system';
import Pokeball from '../images/Poké_Ball_icon.jpeg';
import { PokeballButton } from './coreStyles';
import './core.css';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    diplay: 'flex',
    alignItems: 'center',

    backgroundColor: '#8D8D8D',
    minHeight: '100vh'
  },
}));

function Welcome() {
  const classes = useStyles();
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only('xs'));
  const sm = useMediaQuery(theme.breakpoints.only('sm'));

  return (
    <Container
      className={classes.root}
      maxWidth="false"
      component="div"
    >
      <Grid container alignItems="center" xs={12} style={{ minHeight: '100vh' }}>
        <Grid item container justifyContent={xs || sm ? "center" : "flex-end"} xs={12} sm={6}>
          <Link to="/pokedex">
            <PokeballButton>
              <img className={"Pokeball-logo"} alt="pokeball" src={Pokeball} style={{ width: xs || sm ? '200px' : '500px' }} />
            </PokeballButton>
          </Link>
        </Grid>
        <Grid item container justifyContent={xs || sm ? 'center' : 'flex-start'} xs={12} sm={6}>
          <Typography variant="h2" textAlign="center">
            Welcome to my Pokédex!
          </Typography>
          <Typography variant="caption" style={{ marginLeft: '1rem' }} textAlign="end">
            By Gabriel Max
          </Typography>
        </Grid>
      </Grid>
      {/* <Grid
        container
        // direction={xs ? 'column' : 'row'}
        alignItems="center"
        justifyContent="center"
        xs={12}
        style={{
          minHeight: '100vh'
        }}
      >
        <Link to="/pokedex">
          <PokeballButton>
            <img className={"Pokeball-logo"} alt="pokeball" src={Pokeball} style={{ width: xs ? '200px' : '500px' }} />
          </PokeballButton>
        </Link>
        <Typography variant="h2">
          Welcome to my Pokédex!
        </Typography>
        <Typography variant="caption" style={{ marginLeft: '1rem' }}>
          By Gabriel Max
        </Typography>
      </Grid> */}
    </Container>
  )
}

export default Welcome;
