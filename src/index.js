import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import SwapiService from "./services/swapi-service"

const swapi = new SwapiService()

var ghpages = require('gh-pages');
ghpages.publish('build', function(err) {});

ReactDOM.render(<App />, document.getElementById('root'));

