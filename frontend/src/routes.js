import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/**
 * Switch: Apenas uma rota por momento
 */

import Testing from './pages/Testing';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Testing} />
        <Route path="/register" component={Register} />

        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}
