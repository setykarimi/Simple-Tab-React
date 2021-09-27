import React from 'react';
import Home from './Pages/Home';
import { Route, Switch, Redirect } from 'react-router-dom';



function App() {
  return (
    <Switch>
      {/* <Route exact path="/home" render={props => <Home {...props}/>}/> */}
      <Redirect exact from="/home" to="/home/about" />
      <Route exact path="/home/:page?" render={props => <Home {...props}/>} />
    </Switch>
  );
}

export default App;
