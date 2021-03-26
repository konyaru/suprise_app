import React from 'react';
import Card from '@material-ui/core/Card';

export const OtherPresent = ({present}) => {
  return(
    <Card>
      <img 
          src={`${window.location.origin}/public/${present.imgUrl}`} 
          alt={`${present.name}の画像`}
      />
      <p>{present.name}</p>
    </Card>
  );
};