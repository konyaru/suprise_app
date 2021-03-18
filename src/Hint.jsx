import React from 'react';
import { PRESENTS } from './constants';

export const Hint = ({hintsIndex, isClicked, onClick}) => {
  const presentHint = PRESENTS[hintsIndex].hint;
  const hint_text = isClicked == true ?
    presentHint :
    'ヒント';
  return(
    <button
      onClick={onClick}
    >
      {hint_text}
    </button>
  );
}