import React, { Component } from 'react';
import L from 'mapbox.js';


export default class Layer extends Component {

    componentWillReceiveProps(props) {
        const { map } = props;

        if(!this.markerLayer) {
            this.markerLayer = L.mapbox.featureLayer().addTo(map);
        }
    }

    componentDidMount() {
        this.render();
    }

    render() {
        const { children } = this.props;

        let childrenWithProps = React.Children.map(children, (child) => {
            return React.cloneElement(child, { markerLayer: this.markerLayer });
        });

        return <div>{childrenWithProps}</div>;
    }

};