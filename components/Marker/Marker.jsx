export default class Marker {

    constructor(coordinates, title, description, color, size, symbol){
        this.coordinates = coordinates;
        this.title = title;
        this.description = description;
        this.color = color;
        this.size = size;
        this.symbol = symbol;
    }

    getMarker() {
        let properties = {
            title: this.title,
            description: this.description,
            'marker-color': this.color,
            'marker-size': this.size,
            'marker-symbol': this.symbol
        };

        properties = _.omitBy(properties, _.isUndefined);

        return {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: this.coordinates
            },
            properties
        };
    }

};