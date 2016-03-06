import React, { PropTypes } from 'react';
import L from 'mapbox.js';
import Layer from '../Layer';


export default class FeatureLayer extends Layer {

    static propTypes = {
        children: PropTypes.any,
        map: PropTypes.object,
        onFeatureClick: PropTypes.func,
        onFeatureDblClick: PropTypes.func
    };

    setListeners() {
        const { onFeatureClick, onFeatureDblClick } = this.props;

        if(onFeatureClick){
            this.getLayer().on("click", (e) => {
                onFeatureClick(e.layer.feature);
            });
        }

        if(onFeatureDblClick){
            this.getLayer().on("dblclick", (e) => {
                onFeatureDblClick(e.layer.feature);
            });
        }
    }

    updateLayer(features) {
        if(!this.getLayer()){
            const { map } = this.props;
            const layer = L.mapbox.featureLayer().addTo(map);
            this.setLayer(layer);
            this.setListeners();
        }

        this.getLayer().setGeoJSON({
            type: 'FeatureCollection',
            features
        });
    }

};
