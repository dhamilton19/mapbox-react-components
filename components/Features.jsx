import React, { Component, PropTypes } from 'react';


export default class Features extends Component {

    static propTypes = {
        layer: PropTypes.object,
        item: PropTypes.object,
        list: PropTypes.array
    };

    componentWillReceiveProps(props) {
        const { layer, list } = props;

        if(layer) {
            this.renderFeatures(layer, list);
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return null;
    }

    renderFeatures(layer, features) {
        if(features && features.length > 0) {
            layer.setFeatures(features.map((feature) => {
                return feature.toGeoJSON();
            }));
        }
    }

};
