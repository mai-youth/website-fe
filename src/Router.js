import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/HomePage/App';
import ArticlesPage from './components/Articles/ArticlesPage';
import ArticleView from './components/Articles/ArticleView';
import AdminPage from './components/AdminPage/AdminPage';
import ContactPage from './components/ContactPage/ContactPage';
import ErrorMessage from './components/ErrorMessage';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route path="/articles/:id" component={ArticleView} />
        <Route path="/articles" component={ArticlesPage} />
        <Route path="/" component={<ErrorMessage errorCode={404} />} />
      </Switch>
    </BrowserRouter>
  );
}
