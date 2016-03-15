import { Component, PropTypes } from 'react';
import L from 'mapbox.js';

import omit from 'lodash/omit';


export default class Control extends Component {

	static propTypes = {
		map: PropTypes.object,
		position: PropTypes.string
	};

	componentWillReceiveProps(props) {
		const { position, map } = props;

		const options = omit(props, ['map']);

		if (position) this.addControl(options, map);
	}

	shouldComponentUpdate() {
		return false;
	}

	getType() {
		throw new Error('Function must be overridden.');
	}

	addControl(options, map) {
		if (map && !this.control) this.control = new L.Control[this.getType()](options).addTo(map);
	}

	render() {
		return null;
	}

}
