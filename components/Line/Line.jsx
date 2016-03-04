import Feature from '../Feature';


export default class Line extends Feature {

    constructor({coordinates, stroke, width, opacity}){
        super();
        this.coordinates = coordinates;
        this.stroke = stroke;
        this.width = width;
        this.opacity = opacity;
    }

    getType() {
        return 'LineString';
    }

    getProperties() {
        return {
            stroke: this.stroke,
            width: this.width,
            opacity: this.opacity
        };
    }

};
