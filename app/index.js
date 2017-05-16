var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
var FormUpdateServer = require('./components/FormUpdateServer');
var LifeCycleMethods = require('./components/LifeCycleMethods');

ReactDOM.render(
  
  <LifeCycleMethods />,
  document.getElementById('app')
  );