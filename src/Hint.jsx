import React from 'react';
import { Link,MemoryRouter } from 'react-router-dom';
import { PRESENTS, HINTSCOLORS } from './constants';
import Present from './Present.jsx';
import styled from 'styled-components';

export const Hint = ({presentId}) => {
  const presentHint = PRESENTS[presentId-1].hint;
  const hintColor = HINTSCOLORS[presentId];
  
  return(
    <div>
      <Button color={hintColor} to={`./presents/${presentId}`} >
        {presentHint}
      </Button>
    </div>
  );
}

const Button = styled(Link)`
  display       : inline-block;
  border-radius : 5%;          /* 角丸       */
  font-size     : 18pt;        /* 文字サイズ */
  text-align    : center;      /* 文字位置   */
  width         : 402px;
  cursor        : pointer;     /* カーソル   */
  padding       : 12px 12px;   /* 余白       */
  margin        : 12px;
  background    : ${({color}) => color};     /* 背景色     */
  color         : #000000;     /* 文字色     */
  line-height   : 1em;         /* 1行の高さ  */
  transition    : .3s;         /* なめらか変化 */
  box-shadow    : 6px 6px 3px #666666;  /* 影の設定 */
  border        : 2px solid #000066;    /* 枠の指定 */
  &:hover {
    box-shadow    : none;        /* カーソル時の影消去 */
    color         : ${({color}) => color};     /* 文字色     */
    text-shadow:
      1px 0 0 #945F4B,
      0 1px 0 #945F4B;
    background    : #ffffff;     /* 背景色     */
  }
`