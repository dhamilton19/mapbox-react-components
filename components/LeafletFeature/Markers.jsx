require('./AwesomeMarkers');

import { PropTypes, Component } from 'react';
import L from 'mapbox.js';


export default class Markers extends Component {

	static propTypes = {
		icon: PropTypes.object.isRequired,
		layer: PropTypes.object,
		markers: PropTypes.array.isRequired
	};

	componentWillReceiveProps(props) {
		const { layer, markers, icon } = props;

		if (layer) {
			const options = {
				title: 'test',
				icon: L.AwesomeMarkers.icon({...icon})
			};

			const features = markers.map((marker) => {
				return marker.toGeoJSON();
			});

			layer.setFeatures(features, options);
		}
	}

	shouldComponentUpdate() {
		return false;
	}

	render() {
		return null;
	}
}
