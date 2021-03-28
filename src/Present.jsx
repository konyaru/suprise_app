import { Grid } from '@material-ui/core';
import React from 'react';
import { PRESENTS } from './constants';
import { Content } from './Content.jsx';
import { OtherPresent } from './OtherPresent.jsx';
import Confetti from 'react-confetti'
import styled from 'styled-components';


export const Present = ({match}) => {
  const presentId = match.params.presentId;
  const presentsIndex = presentId - 1;
  const present = PRESENTS[presentsIndex];
  const otherPresents = PRESENTS.filter(present => present.id != presentId);
  const confettiHeight = window.outerHeight * 1.15;

  const renderContent = (present) => {
    return (
      <Content
        present={present}
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
    <BgConfetti
      height={confettiHeight}
    >
    </BgConfetti>
    <Front>
      <Grid container alignItems="center" justify="center">
        <Grid item alignItems="center" justify="center" xs={7} md={5} lg={4} >
          <h2><span>本田さんおめでとう！</span></h2>
          {renderContent(present)}
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center">
        {otherPresents.map((present) => 
          renderOtherPresent(present)
        )}
      </Grid>
    </Front>
    </div>
  );
};

const BgConfetti = styled(Confetti)`
  position: absolute;
  top:0;
  left:0;
  width:100%;
  z-index: -1;
`;

const Front = styled.div`
  position: absolute;
  top:0;
  left:0;
  width:100%;
  z-index: 10;
`;