import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Verification from './components/Verification/Verification'
import Accepted from './components/Accepted/Accepted'

import { Provider } from "react-redux";
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
         <Switch>
          <Route path="/rejoindre-salon/:token" children={<Verification/>} />
          <Route path="/salon" children={<Accepted/>} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;

