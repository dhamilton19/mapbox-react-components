import { Marker } from '../../../components';


export default class Marker1 extends Marker {

    constructor({coordinates, title, description, size}){
        super({coordinates, title, description, color: '#471d8d', size: 'large', symbol: 'circle'});
    }
}