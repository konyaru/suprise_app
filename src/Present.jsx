import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { PRESENTS } from './constants';
import { Content } from './Content.jsx';
import { OtherPresent } from './OtherPresent.jsx';
import styled from 'styled-components';

export const Present = ({match}) => {
  const presentId = match.params.presentId;
  const presentsIndex = presentId - 1;
  const present = PRESENTS[presentsIndex];
  const otherPresents = PRESENTS.filter(present => present.id != presentId);
  console.log(otherPresents);

  const renderContent = (present, isHit) => {
    return (
      <Content
        present={present}
        isHit={isHit}
      />
    );
  };

  const renderOtherPresent = (present) => {
    return (
      <OtherPresent
        present={present}
      />
    );
  };
    
  return(
    <div>
      <Grid container alignItems="center" justify="center">
        <Grid item alignItems="center" justify="center" xs={10} md={5} >
          <h2><span>本田さんおめでとう！</span></h2>
          {renderContent(present, true)}
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center">
        {otherPresents.map((present) => 
          renderOtherPresent(present)
        )}
      </Box>
    </div>
  );
};
