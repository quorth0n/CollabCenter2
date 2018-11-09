import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as React from 'react';

import Home from '../Home';
import Doc from '../Doc';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/doc/:padid" component={Doc} />
      </Switch>
    </BrowserRouter>
  );
};
