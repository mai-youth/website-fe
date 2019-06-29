import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './components/homepage/App';
import AdminPage from './components/AdminPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/app" />
        <Route path="/app" component={App} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </BrowserRouter>
  );
}
