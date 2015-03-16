'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var imageURL = require('../../images/yeoman.png');

var AzReactjsFirstStepsApp = React.createClass({displayName: "AzReactjsFirstStepsApp",
  render: function() {
    return (
      React.createElement("div", {className: "main"}, 
        React.createElement(ReactTransitionGroup, {transitionName: "fade"}, 
          React.createElement("img", {src: imageURL})
        )
      )
    );
  }
});

module.exports = AzReactjsFirstStepsApp;
