import React, { Component } from 'react';
import L from 'mapbox.js';


export default class Control extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return null;
    }

    getType() {
        throw new TypeError("Function must be overridden.");
    }

    addControl(options, map) {
        if(map && !this.control) {
            this.control = new L.Control[this.getType()](options).addTo(map);
        }
    }

};