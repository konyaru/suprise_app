import { Grid } from '@material-ui/core';
import React, { Fragment } from 'react';

export const Content = ({present, isHit}) => {
  const content = isHit ?
                  "present" :
                  "other_present";
  
  const md = isHit ?
             8 :
             3;
  
  return(
    <Fragment>
      <img 
          src={`${window.location.origin}/public/${present.imgUrl}`} 
          alt={`${present.name}の画像`}
          id={`${content}_img`}
        />
        <p>{present.name}</p>
    </Fragment>
  );
};