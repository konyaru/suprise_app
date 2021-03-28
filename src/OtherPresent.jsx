import React from 'react';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import { DEVELOPMENT_PUBLIC_DIR, PRODUCTION_PUBLIC_DIR } from './constants';

export const OtherPresent = ({present}) => {
  const development_image = `${DEVELOPMENT_PUBLIC_DIR}${present.imgUrl}`
  const production_image = `${PRODUCTION_PUBLIC_DIR}${present.imgUrl}`
  return(
    <StyledCard alignItems="center" >
      <img 
          src={`${present.imgUrl}`} 
          alt={`${present.name}の画像`}
      />
      <p>{present.name}</p>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  margin: 10px 3px 0px 3px;
`;