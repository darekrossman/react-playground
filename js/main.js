import React  from 'react';
import Router from 'react-router';
import App    from './App.react';

let Route = Router.Route; 
 
var routes = (
  <Route name="app" path="/" handler={App}>
    // add sub-routes here
  </Route>
); 

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
}); 



 

