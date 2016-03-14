import { Component } from 'react';
import L from 'mapbox.js';

import omit from 'lodash/omit';


export default class Control extends Component {

	componentWillReceiveProps(props) {
		const { position, map } = props;

		const options = omit(this.props, ['map']);

		if (position) this.addControl(options, map);
	}

	shouldComponentUpdate() {
		return false;
	}

	getType() {
		throw new TypeError('Function must be overridden.');
	}

	addControl(options, map) {
		if (map && !this.control) {
			this.control = new L.Control[this.getType()](options).addTo(map);
		}
	}

	render() {
		return null;
	}

}
