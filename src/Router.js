import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import App from './components/home/App';
import ArticlesPage from './components/articles/ArticlesPage';
import ArticleView from './components/articles/ArticleView';
import AdminPage from './components/admin/AdminPage';
import ContactPage from './components/contact/ContactPage';
import EventsPage from './components/events/EventsPage';
import GalleryPage from './components/gallery/GalleryPage';
import AuthPage from './components/auth/AuthPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/admin" component={AdminPage} />
        <Route exact path="/" component={App} />
        <Route exact path="/auth" component={AuthPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/events" component={EventsPage} />
        <Route path="/articles/:id" component={ArticleView} />
        <Route path="/articles" component={ArticlesPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  );
}
