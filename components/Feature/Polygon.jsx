import Feature from './Feature';


export default class Polygon extends Feature {

    constructor({coordinates, stroke, strokeWidth, strokeOpacity, fill, fillOpacity}){
        super(coordinates);
        this.coordinates = coordinates;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        this.strokeOpacity = strokeOpacity;
        this.fill = fill;
        this.fillOpacity = fillOpacity;
    }

    getType() {
        return 'Polygon';
    }

    getProperties() {
        return {
            stroke: this.stroke,
            "stroke-width": this.strokeWidth,
            "stroke-opacity": this.strokeOpacity,
            fill: "#182e92",
            "fill-opacity": this.fillOpacity
        };
    }

};
