import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Base from "./pages/Base";
import { ConnectedRouter } from "connected-react-router";
import DetailContainer from "./containers/DetailContainer";
import HomePage from "./pages/HomePage/";
import { history } from "./redux/configStore";

export default class Routes extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Base>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/detail/:id" component={DetailContainer} />
          </Switch>
        </Base>
      </ConnectedRouter>
    );
  }
}
