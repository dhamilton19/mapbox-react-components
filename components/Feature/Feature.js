import omitBy from 'lodash/omitBy';
import isUndefined from 'lodash/isUndefined';


export default class Feature {

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