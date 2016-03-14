import { PropTypes } from 'react';
import L from 'mapbox.js';
import Layer from '../Layer';


export default class FeatureLayer extends Layer {

	static propTypes = {
		children: PropTypes.any,
		map: PropTypes.object,
		onFeatureClick: PropTypes.func,
		onFeatureDblClick: PropTypes.func
	};

	setListeners() {
		const { onFeatureClick, onFeatureDblClick } = this.props;

		if (onFeatureClick) {
			this.layer.on('click', (e) => {
				onFeatureClick(e.layer.feature);
			});
		}

		if (onFeatureDblClick) {
			this.layer.on('dblclick', (e) => {
				onFeatureDblClick(e.layer.feature);
			});
		}
	}

	updateLayer(features) {
		if (!this.layer) {
			const { map } = this.props;
			this.layer = L.mapbox.featureLayer().addTo(map);
			this.setListeners();
		}

		this.layer.setGeoJSON({
			type: 'FeatureCollection',
			features
		});
	}

}
