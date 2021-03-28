import React from 'react';
import { Hint } from './Hint.jsx'
import { Grid } from '@material-ui/core';
import { PRESENTS } from './constants';

export const Main = () => {
  const renderHint = (presentId) => {
    return (
      <Hint 
        presentId={presentId}
      />
    );
  };

  return(
    <div>
      <Grid container alignItems="center" justify="center">
        <Grid item alignItems="center" justify="center" xs={12} >
        <h3>ヒントをクリックするとプレゼントが当選するよ！</h3>
        </Grid>
        <Grid item>
        {PRESENTS.map((present) =>
          renderHint(present.id)
          )}
        </Grid>
      </Grid>
    </div>
  );
};