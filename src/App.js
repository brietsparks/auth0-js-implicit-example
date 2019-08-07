import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Public, LoggedOut, LoginCallback, Private, Root } from './pages';

const basename = 'auth0-js-implicit-example';

function App() {
  return (
    <div>
      <CssBaseline />
      <Router basename={basename}>
        <Route exact path="/" component={Root} />
        <Route exact path="/public" component={Public} />
        <Route exact path="/private" component={Private} />
        <Route exact path="/login-callback" component={LoginCallback} />
        <Route exact path="/logged-out" component={LoggedOut} />
      </Router>
    </div>
  );
}

export default App;
