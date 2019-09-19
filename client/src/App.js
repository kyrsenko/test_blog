import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Header, Footer } from './commons';
import {
  HomePage,
  PostPage,
  PostCreationPage,
  PostEditPage
} from './components';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Header />
          <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/posts/:id" component={PostPage} />
            <Route path="/create-post" component={PostCreationPage} />
            <Route path="/edit-post/:id" component={PostEditPage} />
          </Switch>
          </main>
          <Footer />
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
