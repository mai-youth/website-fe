import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/homepage/App';
import ArticlesPage from './components/articles/ArticlesPage';
import ArticleView from './components/articles/ArticleView';
import AdminPage from './components/admin/AdminPage';
import ContactPage from './components/ContactPage/ContactPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route path="/articles/:id" component={ArticleView} />
        <Route path="/articles" component={ArticlesPage} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  );
}
