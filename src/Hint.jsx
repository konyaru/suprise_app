import React from 'react';
import { Link,MemoryRouter } from 'react-router-dom';
import { PRESENTS } from './constants';
import Present from './Present.jsx';

export const Hint = ({presentId}) => {
  const presentHint = PRESENTS[presentId-1].hint;

  
  return(
    <div>
      <Link to={`/present/${presentId}`} >
        {presentHint}
      </Link>
    </div>
  );
}