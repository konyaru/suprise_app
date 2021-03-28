import { fetchPresents } from './apis/presents';

export const PRESENTS = fetchPresents();

export const HINTSCOLORS = {1: "#B77EB5", 
                            2: "#BFB6E3", 
                            3: "#B2D4FF", 
                            4: "#A2E3F7"
                          };

export const DEVELOPMENT_PUBLIC_DIR = `${window.location.origin}/public/`;
export const PRODUCTION_PUBLIC_DIR = "/public/";