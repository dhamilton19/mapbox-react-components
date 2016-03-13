require('./Weather/leaflet.weather.css');
require('./Weather/leaflet.weather.js');

import Control from './Control';
import React, { PropTypes } from 'react';


export default class Weather extends Control {

    static propTypes = {
        map: PropTypes.object,
        apiKey: PropTypes.string.isRequired,
        position: PropTypes.string,
        units: PropTypes.string,
        lang: PropTypes.string
    };

    static defaultProps = {
        position: 'bottomleft',
        units: 'internal',
        lang: 'en'
    };

    componentWillReceiveProps(props) {
        const { apiKey, position, units, lang, map } = props;

        const options = {
            apiKey,
            position,
            units,
            lang
        };

        if(position) this.addControl(options, map);
    }

    getType() {
        return 'Weather';
    }

};