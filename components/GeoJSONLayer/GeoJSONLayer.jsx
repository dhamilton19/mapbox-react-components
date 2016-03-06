import React, { PropTypes } from 'react';
import L from 'mapbox.js';

import deepDifference from '../../utils/deepDifference';
import Layer from '../Layer';


export default class GeoJsonLayer extends Layer {

    static propTypes = {
        children: PropTypes.any,
        map: PropTypes.object
    };

    updateLayer(features, options) {
        if(!this.features || this.haveFeaturesChanged(features)) {
            const { map } = this.props;
            this.features = features;

            if (this.getLayer()) this.getLayer().clearLayers();

            const layer = L.geoJson(this.features, {
                pointToLayer: (feature, latlng) => {
                    let marker = L.marker(latlng, options);
                    if(feature.properties.popup) {
                        const popup = L.popup()
                            .setContent(feature.properties.popup.content);
                        marker.bindPopup(popup);
                    }
                    return marker;
                }
            }).addTo(map);

            this.setLayer(layer);
        }
    }

    haveFeaturesChanged(newFeatures) {
        const first = newFeatures.map((feature) => {
            return feature.geometry.coordinates;
        });

        const second = this.features.map((feature) => {
            return feature.geometry.coordinates;
        });

        return deepDifference(first, second).length > 0;
    }



};
