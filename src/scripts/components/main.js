'use strict';

var AzReactjsFirstStepsApp = require('./AzReactjsFirstStepsApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={AzReactjsFirstStepsApp}>
    <Route name="/" handler={AzReactjsFirstStepsApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
