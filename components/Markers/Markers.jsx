import React, { Component, PropTypes } from 'react';
import L from 'mapbox.js';


export default class Markers extends Component {

    static propTypes = {
        markers: PropTypes.array
    };

    static defaultProps = {
        markers: []
    };

    componentWillReceiveProps(props) {
        const { markerLayer, markers } = props;

        if(markerLayer) {
            this.renderMarkers(markerLayer, markers);
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return null;
    }

    renderMarkers(markerLayer, markers) {
        if(markers && markers.length > 0) {
            markerLayer.setGeoJSON({
                type: 'FeatureCollection',
                features: markers
            });
        }
    }

};