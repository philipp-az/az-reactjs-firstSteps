'use strict';

var AzReactjsFirstStepsApp = require('./AzReactjsFirstStepsApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  React.createElement(Route, {handler: AzReactjsFirstStepsApp}, 
    React.createElement(Route, {name: "/", handler: AzReactjsFirstStepsApp})
  )
);

Router.run(Routes, function (Handler) {
  React.render(React.createElement(Handler, null), content);
});
