require('./MarkerCluster');

import { PropTypes } from 'react';
import L from 'mapbox.js';

import GeoJsonLayer from './GeoJsonLayer';


export default class ClusterGeoJsonLayer extends GeoJsonLayer {

	static propTypes = {
		animateAddingMarkers: PropTypes.bool,
		chunkedLoading: PropTypes.bool,
		map: PropTypes.object,
		showCoverageOnHover: PropTypes.bool,
		singleMarkerMode: PropTypes.bool,
		spiderfyOnMaxZoom: PropTypes.bool,
		zoomToBoundsOnClick: PropTypes.bool
	};

	static defaultProps = {
		animateAddingMarkers: true,
		chunkedLoading: true,
		showCoverageOnHover: true,
		singleMarkerMode: false,
		spiderfyOnMaxZoom: true,
		zoomToBoundsOnClick: true
	};

	createLayer(map, options) {
		const { spiderfyOnMaxZoom, showCoverageOnHover, zoomToBoundsOnClick, singleMarkerMode, animateAddingMarkers, chunkedLoading } = this.props;

		const geoJsonLayer = this.getLayer(options);

		const markers = L.markerClusterGroup({
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

}
