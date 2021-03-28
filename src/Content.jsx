import React from 'react';
import { Card } from '@material-ui/core';

export const Content = ({present}) => {
  return(
    <Card>
      <img 
          src={`${window.location.origin}/public/${present.imgUrl}`} 
          alt={`${present.name}の画像`}
          id={"present_img"}
      />
      <p>{present.name}</p>
    </Card>
  );
};