import Feature from './Feature';


export default class Marker extends Feature {

    constructor({coordinates, title, description, color, size, symbol}){
        super(coordinates);
        this.coordinates = coordinates;
        this.title = title;
        this.description = description;
        this.color = color;
        this.size = size;
        this.symbol = symbol;
    }

    getType() {
        return 'Point';
    }

    getProperties() {
        return {
            title: this.title,
            description: this.description,
            'marker-color': this.color,
            'marker-size': this.size,
            'marker-symbol': this.symbol
        };
    }

};