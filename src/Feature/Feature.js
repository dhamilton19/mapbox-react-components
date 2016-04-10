import omitBy from '../../node_modules/lodash/omitBy';
import isUndefined from '../../node_modules/lodash/isUndefined';
import assert from '../utils/assert';


export default class Feature {

	constructor({coordinates}) {
		assert(coordinates).isNotEmpty('Missing Coordinates');
		this.coordinates = coordinates;
	}

	getType() {
		throw new Error('Function must be overridden.');
	}

	toGeoJson() {
		const properties = omitBy(this.getProperties(), isUndefined);

		return {
			type: 'Feature',
			geometry: {
				type: this.getType(),
				coordinates: this.coordinates
			},
			properties
		};
	}

	getProperties() {
		throw new Error('Function must be overridden.');
	}

}
