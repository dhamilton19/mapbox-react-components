import Control from './Control';


export default class Zoom extends Control {

	static defaultProps = {
		position: 'bottomright'
	};

	getType() {
		return 'Zoom';
	}

}
