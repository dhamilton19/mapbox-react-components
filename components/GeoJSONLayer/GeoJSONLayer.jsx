import React, { PropTypes } from 'react';
import L from 'mapbox.js';

import Layer from '../Layer';


export default class GeoJsonLayer extends Layer {

    static propTypes = {
        children: PropTypes.any,
        map: PropTypes.object
    };

    getType() {
        return L.geoJson();
    }

    updateLayer(features, options) {
        this.getLayer().clearLayers();

        this.getType().addData(features, {
            pointToLayer: (feature, latlng) => {
                console.log(latlng);
                console.log(options);
                return L.marker(latlng, options);
            }
        });
    }

};
