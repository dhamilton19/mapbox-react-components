import React, { Component, PropTypes } from 'react';


export default class Features extends Component {

    static propTypes = {
        layer: PropTypes.object,
        item: PropTypes.object,
        list: PropTypes.array
    };

    componentWillReceiveProps(props) {
        const { layer, item, list } = props;

        if(layer) {
            this.renderFeature(layer, item);
            this.renderFeatures(layer, list);
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return null;
    }

    renderFeature(layer, feature) {
        if(feature) layer.setFeatures(feature.getGeoJSON());
    }

    renderFeatures(layer, features) {
        if(features && features.length > 0) {
            layer.setFeatures(features.map((feature) => {
                return feature.getGeoJSON();
            }));
        }
    }

};
