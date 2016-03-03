import { Marker } from '../../../components';


export default class MapMarker extends Marker {

    constructor(coordinates, title, description, size){
        super(coordinates, title, description, '#D32F2F', size, 'star');
    }
}