import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';

function Test2() {
  return (<div> Test2 </div>);
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login}></Route>
        <Route path="/test" exact={true} component={Test2}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
