import { Marker } from '../../../components';


export default class Marker2 extends Marker {

    constructor({coordinates, title, description, size}){
        super({coordinates, title, description, color: '#D32F2F', size, symbol: 'star'});
    }
}