import React, { Component, PropTypes } from 'react';
import L from 'mapbox.js';


export default class Markers extends Component {

    static propTypes = {
        layer: PropTypes.object,
        markers: PropTypes.array
    };

    componentWillReceiveProps(props) {
        const { layer, markers } = props;

        if(layer) {
            this.renderMarkers(layer, markers);
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return null;
    }

    renderMarkers(layer, markers) {
        if(markers && markers.length > 0) {

            const features = markers.map((marker) => {
                return marker.getMarker();
            });

            layer.setGeoJSON({
                type: 'FeatureCollection',
                features: features
            });
        }
    }

};
