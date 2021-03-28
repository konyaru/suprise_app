import React from 'react';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import { DEVELOPMENT_IMAGES_DIR, PRODUCTION_IMAGES_DIR } from './constants';

export const OtherPresent = ({present}) => {
  const development_images = `${DEVELOPMENT_IMAGES_DIR}${present.imgUrl}`
  const production_images = `${PRODUCTION_IMAGES_DIR}${present.imgUrl}`
  return(
    <StyledCard alignItems="center" >
      <img 
          src={production_images} 
          alt={`${present.name}の画像`}
      />
      <p>{present.name}</p>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  margin: 10px 3px 0px 3px;
`;