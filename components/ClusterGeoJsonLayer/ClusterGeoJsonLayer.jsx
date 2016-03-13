require('./MarkerCluster');

import React, { PropTypes } from 'react';
import L from 'mapbox.js';

import GeoJsonLayer from '../GeoJsonLayer';
import { Marker } from '../LeafletFeature';


export default class ClusterGeoJsonLayer extends GeoJsonLayer {

    static propTypes = {
        children: PropTypes.any,
        map: PropTypes.object,
        spiderfyOnMaxZoom: PropTypes.bool,
        showCoverageOnHover: PropTypes.bool,
        zoomToBoundsOnClick: PropTypes.bool,
        singleMarkerMode: PropTypes.bool,
        animateAddingMarkers: PropTypes.bool,
        chunkedLoading: PropTypes.bool
    };

    static defaultProps = {
        spiderfyOnMaxZoom: true,
        showCoverageOnHover: true,
        zoomToBoundsOnClick: true,
        singleMarkerMode: false,
        animateAddingMarkers: true,
        chunkedLoading: true
    };

    createLayer(map, options) {
        const { spiderfyOnMaxZoom, showCoverageOnHover, zoomToBoundsOnClick, singleMarkerMode, animateAddingMarkers, chunkedLoading } = this.props;

        const geoJsonLayer = this.getLayer(options);

        var markers = L.markerClusterGroup({
                spiderfyOnMaxZoom,
                showCoverageOnHover,
                zoomToBoundsOnClick,
                singleMarkerMode,
                animateAddingMarkers,
                chunkedLoading
        });

        markers.addLayer(geoJsonLayer);

        map.addLayer(markers);

        return markers;
    }

};
