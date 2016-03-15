import { Component, PropTypes } from 'react';


export default class Features extends Component {

	static propTypes = {
		item: PropTypes.object,
		layer: PropTypes.object,
		list: PropTypes.array
	};

	componentWillReceiveProps(props) {
		const { layer, list } = props;

		if (layer) {
			this.renderFeatures(layer, list);
		}
	}

	shouldComponentUpdate() {
		return false;
	}

	renderFeatures(layer, features) {
		if (features && features.length > 0) {
			layer.setFeatures(features.map((feature) => {
				return feature.toGeoJson();
			}));
		}
	}

	render() {
		return null;
	}

}
