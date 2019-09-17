import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Homepage  from './Homepage'
import TogglesPage from './TogglesPage';


const App = (props) => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={LoginPage}></Route>
          <Route path="/homepage" exact={true} component={Homepage}></Route>
          <Route path="/toggles" exact={true} component={TogglesPage}></Route>
        </Switch>
      </BrowserRouter>
    );
}

export default App;
