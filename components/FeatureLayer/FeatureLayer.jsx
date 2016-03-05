import React, { PropTypes } from 'react';
import Layer from '../Layer';


export default class FeatureLayer extends Layer {

    static propTypes = {
        children: PropTypes.any,
        map: PropTypes.object,
        onFeatureClick: PropTypes.func,
        onFeatureDblClick: PropTypes.func
    };

    getType() {
        return 'featureLayer';
    }

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

    setFeatures(features) {
        this.getLayer().setGeoJSON({
            type: 'FeatureCollection',
            features
        });
    }

};
