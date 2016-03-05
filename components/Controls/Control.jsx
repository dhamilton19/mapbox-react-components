import React, { Component } from 'react';
import L from 'mapbox.js';


export default class Control extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return null;
    }

    addControl(options, map) {
        if(map) new L.Control[this.getType()](options).addTo(map);
    }

};