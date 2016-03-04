import _ from 'lodash';


export default class Feature {

    getType() {
        throw new TypeError("Function must be overridden.");
    }

    getProperties() {
        throw new TypeError("Function must be overridden.");
    }

    getGeoJSON() {
        const properties =  _.omitBy(this.getProperties(), _.isUndefined);

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