import React, { PropTypes, Component } from 'react';
import L from 'mapbox.js';
require('./AwesomeMarkers/leaflet.awesome-markers.js');
require('./AwesomeMarkers/leaflet.awesome-markers.css');
require('./style.css');

import { Marker } from '../Feature';

export default class Markers extends Component {

    static propTypes = {
        layer: PropTypes.object,
        markers: PropTypes.array.isRequired,
        icon: PropTypes.object.isRequired
    };

    shouldComponentUpdate() {
        return false;
    }

    componentWillReceiveProps(props) {
        const { layer, markers, icon } = props;

        if(layer){
            const options = {
                title: 'test',
                icon: L.AwesomeMarkers.icon({...icon})
            };

            const features = markers.map((marker) => {
                return marker.toGeoJSON();
            });

            layer.setFeatures(features, options);
        }
    }

    render() {
        return null;
    }
};