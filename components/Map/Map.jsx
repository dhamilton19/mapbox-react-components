import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import L from 'mapbox.js';


export default class Map extends Component {

    static propTypes = {
        accessToken : PropTypes.string.isRequired,
        children: PropTypes.any,
        layer : PropTypes.string,
        center: PropTypes.array.isRequired,
        zoom: PropTypes.number.isRequired,
        minZoom: PropTypes.number,
        maxZoom: PropTypes.number,
        zoomControl: PropTypes.bool
    };

    static defaultProps = {
        layer: 'mapbox.streets',
        zoomControl: true
    };

    componentWillMount() {
        L.mapbox.accessToken = this.props.accessToken;
    }

    componentDidMount() {
        const { layer, center } = this.props;

        this.center = center;

        const options = _.omit(_.omitBy(this.props, _.isUndefined), ["accessToken", "layer", "children"]);

        this.map = L.mapbox.map(ReactDOM.findDOMNode(this), layer, options);

        this.forceUpdate();
    }

    componentWillReceiveProps(props) {
        const { center } = props;

        if(_.difference(this.center, center).length > 0){
            this.center = center;
            this.map.setView(this.center, 9);
        }
    }

    render() {
        const { children } = this.props;

        let childrenWithProps = React.Children.map(children, (child) => {
            return child ? React.cloneElement(child, {map: this.map}) : null;
        });

        return (
            <div id="map">
                {childrenWithProps}
            </div>
        );
    }

};