import { Component, PropTypes } from 'react';


export default class Features extends Component {

	static propTypes = {
		features: PropTypes.array.isRequired,
		layer: PropTypes.object
	};

	componentWillReceiveProps(props) {
		const { layer, features } = props;

		//We need to check if layer is available because layer cannot load until map is loaded.
		// Once the map has been loaded then the props will be updated and this function will be called.
		if (layer) this.renderFeatures(layer, features);
	}

	shouldComponentUpdate() {
		return false;
	}

	renderFeatures(layer, features) {
		if (features && features.length > 0) {
			layer.addFeaturesToLayer(features.map((feature) => {
				return feature.toGeoJson();
			}));
		}
	}

	render() {
		return null;
	}

}
