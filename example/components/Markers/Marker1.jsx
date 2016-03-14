import { Feature } from '../../../components';


export default class Marker1 extends Feature.Marker {

	constructor({coordinates, title, description}) {
		super({coordinates, title, description, color: '#471d8d', size: 'large', symbol: 'circle'});
	}
}
