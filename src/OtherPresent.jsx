import React from 'react';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';

export const OtherPresent = ({present}) => {
  return(
    <StyledCard alignItems="center" >
      <img 
          src={`${window.location.origin}/public/${present.imgUrl}`} 
          alt={`${present.name}の画像`}
      />
      <p>{present.name}</p>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  margin: 10px 3px 0px 3px;
`;