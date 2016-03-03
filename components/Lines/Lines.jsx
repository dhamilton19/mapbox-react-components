import React, { Component, PropTypes } from 'react';
import L from 'mapbox.js';
import _ from 'lodash';


export default class Lines extends Component {

    static propTypes = {
        layer: PropTypes.object,
        lines: PropTypes.array,
        stroke: PropTypes.string,
        strokeWidth: PropTypes.number,
        strokeOpacity: PropTypes.number
    };

    componentWillReceiveProps() {
        const { layer, lines } = props;

        if(layer) {
            this.renderLines(layer, lines);
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return null;
    }

    renderLines(layer, lines) {
        if(lines && lines.length > 0) {

            const features = lines.map((line) => {
                return line.getLine();
            });

            layer.setGeoJSON({
                type: 'FeatureCollection',
                features: features
            });
        }
    }

};
