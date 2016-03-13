import React, { PropTypes } from 'react';
import L from 'mapbox.js';

import GeoJsonLayer from './GeoJsonLayer';


export default class LGeoJsonLayer extends GeoJsonLayer {

    static propTypes = {
        children: PropTypes.any,
        map: PropTypes.object
    };

    createLayer(map, options) {
        return this.getLayer(options).addTo(map);
    }

};
