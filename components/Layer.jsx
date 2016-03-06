import React, { Component } from 'react';
import isArray from 'lodash/isArray';
import L from 'mapbox.js';


export default class Layer extends Component {

    componentDidMount() {
        this.forceUpdate();
    }

    render() {
        const { children } = this.props;

        let childrenWithProps = React.Children.map(children, (child) => {
            return child ? React.cloneElement(child, { layer: this }) : null;
        });

        return <div>{childrenWithProps}</div>;
    }

    getLayer() {
        return this.layer;
    }

    setLayer(layer) {
        this.layer = layer;
    }

    setListeners() {}

    setFeatures(features, options) {
        features = isArray(features) ? features : [features];
        this.updateLayer(features, options);
    }

    updateLayer(features, options) {
        throw new TypeError("Function must be overridden.");
    }

};
