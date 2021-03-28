import React from 'react';
import { Main } from './Main.jsx';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Present } from './Present.jsx';

function App() {
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

