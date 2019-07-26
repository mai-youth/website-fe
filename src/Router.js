import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/HomePage/App';
import AdminLayout from './components/AdminPage/AdminLayout';
import ContactPage from './components/ContactPage/ContactPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/admin" component={AdminLayout} />
        <Route exact path="/contact" component={ContactPage} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  );
}
