import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Cards from "./Cards";
import "./MainContent.scss"


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs="auto">
        <Cards/>
      </Grid>
      <Grid item xs="auto">
        <Cards/>
      </Grid>
      <Grid item xs="auto">
        <Cards/>
      </Grid>
      <Grid item xs="auto">
        <Cards/>
      </Grid>
    </React.Fragment>
  );
}

function GridLayout() {
  return (
    <Box sx={{ flexGrow: 1, margin: '10px 0px 0px 8px', }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid container item spacing={4}>
          <FormRow />
        </Grid>
        <Grid container item spacing={4}>
          <FormRow />
        </Grid>
        <Grid container item spacing={4}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}

export default GridLayout