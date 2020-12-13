import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Auth from './views/Auth';

function Routes() {
  return (
    <Router>
      <div>
        <Switch>
         <Route path='/auth'>
           <Auth />
         </Route>
         <Redirect to='/auth' />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
