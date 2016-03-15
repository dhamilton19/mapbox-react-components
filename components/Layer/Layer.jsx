import React, { Component, PropTypes } from 'react';
import isArray from 'lodash/isArray';


export default class Layer extends Component {

	static propTypes = {
		children: PropTypes.array
	};

	componentDidMount() {
		this.forceUpdate();
	}

	setListeners() {
	}

	setFeatures(features, options) {
		this.updateLayer(isArray(features) ? features : [features], options);
	}

	updateLayer() {
		throw new TypeError('Function must be overridden.');
	}

	render() {
		const { children } = this.props;

		const childrenWithProps = React.Children.map(children, (child) => {
			return child ? React.cloneElement(child, {layer: this}) : null;
		});

		return <div>{childrenWithProps}</div>;
	}

}
