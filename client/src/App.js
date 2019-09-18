import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Header, Footer } from './commons';
import { HomePage, PostPage, PostCreationPage } from './components';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/posts/:id" component={PostPage} />
            <Route path="/create-post" component={PostCreationPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
