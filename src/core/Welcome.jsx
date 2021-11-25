import React from 'react';
import { Container, Grid, Typography, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Pokeball from '../images/Poké_Ball_icon.jpeg';
import { PokeballButton } from './coreStyles';
import './core.css';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    diplay: 'flex',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(#3269B3, #F5F6F6)',
    minHeight: '100vh'
  },
  pokeballButton: {
    "& hover": {
      cursor: 'pointer',
    }
  },
  welcomeText: {
    "-webkit-text-stroke-width": '3px',
    "-webkit-text-stroke-color": '#3269B3',
    color: "#FFCB03",
    fontWeight: '800',
  }
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
          <Grid item xs={12} justifyContent={xs || sm ? "center" : "flex-end"}>
            <Typography
              className={classes.welcomeText}
              variant={'h3'}
              fontWeight={800}
              textAlign={xs || sm ? "center" : "center"}
            >
              TRY IT
            </Typography>
          </Grid>
          <Grid item xs={12} justifyContent={xs || sm ? "center" : "center"} textAlign={xs || sm ? "center" : "center"}>
            <Link to="/pokedex">
              <PokeballButton>
                <img
                  className={clsx("Pokeball-logo", classes.pokeballButton)}
                  alt="pokeball"
                  src={Pokeball}
                  style={{
                    width: xs || sm ? '270px' : '500px'
                  }}
                />
              </PokeballButton>
            </Link>
          </Grid>
        </Grid>
        <Grid item container justifyContent={xs || sm ? 'center' : 'flex-start'} xs={12} sm={6}>
          <Typography
            className={classes.welcomeText}
            variant="h2"
            textAlign="center"
            fontWeight={800}
          >
            Welcome to my Pokédex!
          </Typography>
          <Typography variant="caption" style={{ marginLeft: '1rem', color: 'black', fontWeight: 800 }} textAlign="end">
            By Gabriel Max
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Welcome;
