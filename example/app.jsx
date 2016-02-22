'use strict';

import config from './config';

import React from 'react';
import ReactDOM from 'react-dom';
import L from 'mapbox.js';

import MapPage from './components/MapPage';

L.mapbox.accessToken = config.accessToken;

ReactDOM.render(
    <MapPage />,
    document.getElementById('app')
);