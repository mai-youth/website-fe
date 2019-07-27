import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './components/HomePage/App';
import AdminLayout from './components/AdminPage/AdminLayout';
import ArticlesPage from './components/Articles/ArticlesPage';
import ArticleView from './components/Articles/ArticleView';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/app" />
        <Route path="/app" component={App} />
        <Route path="/articles/:id" component={ArticleView} />
        <Route path="/articles" component={ArticlesPage} />
        <Route path="/admin" component={AdminLayout} />
      </Switch>
    </BrowserRouter>
  );
}
