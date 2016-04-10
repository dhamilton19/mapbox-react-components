import React, { Component, PropTypes } from 'react';
import isArray from 'lodash/isArray';


/*Abstract class*/
export default class Layer extends Component {

	static propTypes = {
		children: PropTypes.array.isRequired
	};

	componentDidMount() {
		this.forceUpdate();
	}

	setListeners() {}

	//Called by a feature class to add features to layer.
	addFeaturesToLayer(features, options) {
		this.updateLayer(isArray(features) ? features : [features], options);
	}

	updateLayer() {
		throw new Error('Function must be overridden.');
	}

	render() {
		const { children } = this.props;

		const childrenWithProps = React.Children.map(children, (child) => {
			return child ? React.cloneElement(child, {layer: this}) : null;
		});

		return <div>{childrenWithProps}</div>;
	}

}
