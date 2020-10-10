import React from 'react';
import './App.css';
import Users from './Pages/users/users'
import Login from './Pages/users/login';

import { Switch, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  let location = useLocation();

  if (location.pathname === '/login') {
    return (
      <div className="login">
        <Route path="/login" component={Login} />
      </div>
    )
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/users" component={Users} />
      </Switch>
    </div>
  );
}

export default App;
