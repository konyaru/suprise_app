import React from 'react';
import { Card } from '@material-ui/core';
import { DEVELOPMENT_PUBLIC_DIR, PRODUCTION_PUBLIC_DIR } from './constants';

export const Content = ({present}) => {
  const development_image = `${DEVELOPMENT_PUBLIC_DIR}${present.imgUrl}`
  const production_image = `${PRODUCTION_PUBLIC_DIR}${present.imgUrl}`
  return(
    <Card>
      <img 
          src={production_image} 
          alt={`${present.name}の画像`}
          id={"present_img"}
      />
      <p>{present.name}</p>
    </Card>
  );
};