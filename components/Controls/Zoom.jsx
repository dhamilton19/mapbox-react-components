import Control from './Control';
import { PropTypes } from 'react';


export default class Zoom extends Control {

	static propTypes = {
		map: PropTypes.object,
		position: PropTypes.string
	};

	static defaultProps = {
		position: 'bottomright'
	};

	getType() {
		return 'Zoom';
	}

}
