'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var AzReactjsFirstStepsApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    AzReactjsFirstStepsApp = require('components/AzReactjsFirstStepsApp.js');
    component = React.createElement(AzReactjsFirstStepsApp);
  });

  it('should create a new instance of AzReactjsFirstStepsApp', function () {
    expect(component).toBeDefined();
  });
});
