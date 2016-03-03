import _ from 'lodash';

export default class Line {

    constructor(coordinates, stroke, width, opacity){
        this.coordinates = coordinates;
        this.stroke = stroke;
        this.width = width;
        this.opacity = opacity;
    }

    getLine() {
        let properties = {
            stroke: this.stroke,
            width: this.width,
            opacity: this.opacity
        };

        properties = _.omitBy(properties, _.isUndefined);

        return {
            type: 'Feature',
            geometry: {
                type: 'LineString',
                coordinates: this.coordinates
            },
            properties
        };
    }

};
