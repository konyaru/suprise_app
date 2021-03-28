import React from 'react';
import { Card } from '@material-ui/core';
import { DEVELOPMENT_IMAGES_DIR, PRODUCTION_IMAGES_DIR } from './constants';

export const Content = ({present}) => {
  const development_images = `${DEVELOPMENT_IMAGES_DIR}${present.imgUrl}`
  const production_images = `${PRODUCTION_IMAGES_DIR}${present.imgUrl}`
  return(
    <Card>
      <img 
          src={production_images} 
          alt={`${present.name}の画像`}
          id={"present_img"}
      />
      <p>{present.name}</p>
    </Card>
  );
};