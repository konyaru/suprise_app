import React from 'react';
import { PresentsJson } from '../presents.json.js';

export const fetchPresents = () => {
  const presents = PresentsJson.presents;
  return presents;
};