import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Verification from './components/Verification'

import { Provider } from "react-redux";
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
         <Switch>
          <Route path="/rejoindre-salon/:token" children={<Verification/>} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;

