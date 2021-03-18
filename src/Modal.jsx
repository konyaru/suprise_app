import React from 'react';
import { PRESENTS } from './constants';

export const Modal = ({isModal, presentsIndex, onClick}) => {
  if(isModal) {
    const presentName = PRESENTS[presentsIndex].name;
    const presentImgUrl = PRESENTS[presentsIndex].imgUrl;

    return (
      <div id="overlay" onClick={onClick}>
        <div id="content">
          <img 
            src={`${window.location.origin}/public/${presentImgUrl}`} 
            alt={`${presentName}の画像`}
            id="present_img"
          />
          <p>{presentName}</p>
          <button onClick={onClick}>
            閉じる
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  };
};