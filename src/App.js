import React from 'react';
import { Main } from './Main.jsx';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Present } from './Present.jsx';
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
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route
          exact
          path='/presents/:presentId'
          render={({match}) =>
            <Present 
              match={match}
            />
          }
        />
      </Switch>
    </Router>
  );
}

export default App;