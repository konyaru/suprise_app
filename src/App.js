import React from 'react';
import { Main } from './Main.jsx';
import { createStyles, makeStyles } from '@material-ui/styles';

// const useStyles = makeStyles(() => 
//   createStyles({
//     "main": {
//       display: "grid",
//       alignItems: "center",
//       justify: "center"
//     }
//   })
// );

function App() {
  // const classes = useStyles();
  return(
    <div>
      <Main />
    </div>
  );
}

export default App;