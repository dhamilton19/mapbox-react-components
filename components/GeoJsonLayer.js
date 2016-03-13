import React, { PropTypes } from 'react';
import L from 'mapbox.js';

import deepDifference from '../utils/deepDifference';
import Layer from './Layer';


export default class GeoJsonLayer extends Layer {

    static propTypes = {
        children: PropTypes.any,
        map: PropTypes.object
    };

    updateLayer(features, options) {
        if(!this.features || this.haveFeaturesChanged(features)) {
            const { map } = this.props;
            this.features = features;

            if (this.layer) this.layer.clearLayers();

            this.layer = this.createLayer(map, options);
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

    createLayer(map, options) {
        throw new Error('Must override this function');
    }

    getLayer(options) {
        return L.geoJson(this.features, {
            pointToLayer: (feature, latlng) => {
                let marker = L.marker(latlng, options);
                if(feature.properties.popup) {
                    const popup = L.popup()
                        .setContent(feature.properties.popup.content);
                    marker.bindPopup(popup);
                }
                return marker;
            }
        })
    }



};
