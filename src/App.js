import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Homepage  from './Homepage'

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Login}></Route>
          <Route path="/homepage" exact={true} component={Homepage}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
