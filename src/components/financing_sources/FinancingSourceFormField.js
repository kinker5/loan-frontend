import React from 'react';
import { TextInput } from 'react-admin';
import { Grid, Typography } from '@material-ui/core';

const FinancingSourceFormField = ({ record }) => {
  return (
    <>
      {/* Empty element wrapper to work around default styling */}
      <Grid container spacing={2}>
        <Grid container item xs={12} spacing={2}>
          <Typography variant="subtitle1" gutterBottom>
            Financing Source
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextInput fullWidth  label = 'Financing Source' source = 'name' id = 'financingSource2' />                    
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default FinancingSourceFormField;