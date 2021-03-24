import React, { Fragment, useState } from 'react';
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
        <h3>ボタンを押すと4つのプレゼントのヒントが出てくるよ!</h3>
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