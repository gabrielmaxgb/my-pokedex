import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/styles';

const Spinner = styled(CircularProgress)({
  "& .MuiCircularProgress-circle": {
    color: '#EE6B2F',
  },
});

const Genericloading = (props) => {
  return (
    <Container maxWidth="xs">
      <Grid container alignItems="center" justifyContent="center" xs={12} style={{ backgroundColor: 'inherit', minHeight: '75vh' }}>
        <Typography variant="button" margin="1rem">
          Loading...
        </Typography>
        <Spinner thickness={2} />
      </Grid>
    </Container>
  );
}

export default Genericloading;
