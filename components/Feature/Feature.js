import omitBy from 'lodash/omitBy';
import isUndefined from 'lodash/isUndefined';
import assert from '../../utils/assert';


export default class Feature {

    constructor(coordinates) {
        assert(coordinates).isNotEmpty('Missing Coordinates');
    }

    getType() {
        throw new TypeError("Function must be overridden.");
    }

    getProperties() {
        throw new TypeError("Function must be overridden.");
    }

    toGeoJSON() {
        const properties =  omitBy(this.getProperties(), isUndefined);

        return {
            type: 'Feature',
            geometry: {
                type: this.getType(),
                coordinates: this.coordinates
            },
            properties
        };
    }

};