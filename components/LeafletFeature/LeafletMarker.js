import Marker from '../Feature/Marker';


export default class LeafletMarker extends Marker {

	constructor({coordinates, popup}) {
		super({coordinates});
		this.popup = popup;
	}

	getProperties() {
		return {
			popup: this.popup
		};
	}

}
