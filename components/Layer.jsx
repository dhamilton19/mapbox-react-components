import React, { Component } from 'react';
import L from 'mapbox.js';


export default class Layer extends Component {

    componentWillReceiveProps(props) {
        const { map } = props;

        if(!this.layer && map) {
            this.layer = L.mapbox[this.getType()]().addTo(map);

            this.setListeners();
        }
    }

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

    getType() {
        throw new TypeError("Function must be overridden.");
    }

    getLayer() {
        return this.layer;
    }

    setListeners() {}

    setFeatures(features) {}

};
