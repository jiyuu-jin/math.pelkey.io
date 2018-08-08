import * as React from 'react';
import App from './App';

import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Home, MembersPage,
    Addition } from './components';
import {Subtraction} from "./components/subtraction";
import GameView from "./components/gameView";

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid" style={{ paddingTop: 64 }}>
        <Route component={App} />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/members" component={MembersPage} />
          <Route path="/addition" component={Addition} />
          <Route path="/subtraction" component={Subtraction} />
          <Route path="/game" component={GameView} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
