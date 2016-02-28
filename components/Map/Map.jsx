import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import L from 'mapbox.js';


export default class Map extends Component {

    static propTypes = {
        accessToken : PropTypes.string.isRequired,
        layer : PropTypes.string,
        center: PropTypes.array.isRequired,
        zoom: PropTypes.number.isRequired,
        minZoom: PropTypes.number,
        maxZoom: PropTypes.number,
        zoomControl: PropTypes.bool,
        zoomControlPosition: PropTypes.string,
        markers: PropTypes.array
    };

    static defaultProps = {
        layer: 'mapbox.streets',
        zoomControl: true,
        markers: []
    };

    componentWillMount() {
        L.mapbox.accessToken = this.props.accessToken;
    }

    componentDidMount() {
        const { layer, center, zoom, maxZoom, minZoom, zoomControl, zoomControlPosition } = this.props;

        let options = {
            center,
            zoom,
            maxZoom,
            minZoom,
            zoomControl
        };

        _.omit(options, _.isNull);

        const map = L.mapbox.map(document.getElementById('map'), layer, options);
        if(zoomControlPosition) new L.Control.Zoom({position: zoomControlPosition}).addTo(map);

        this.markerLayer = L.mapbox.featureLayer().addTo(map);
        this.renderMarkers(this.props);
    }

    componentWillReceiveProps(props) {
        this.renderMarkers(props.markers);
    }

    render() {
        return <div id='map'/>;
    }

    renderMarkers(markers) {
        if(markers && markers.length > 0) {
            this.markerLayer.setGeoJSON({
                type: 'FeatureCollection',
                features: markers
            });
        }
    }

};