import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import L from 'mapbox.js';


export default class Map extends Component {

    static propTypes = {
        accessToken : PropTypes.string.isRequired,
        layer : PropTypes.string,
        center: PropTypes.array.isRequired,
        zoom: PropTypes.number.isRequired,
        minZoom: PropTypes.number,
        maxZoom: PropTypes.number,
        zoomControl: PropTypes.bool,
        zoomControlPosition: PropTypes.string
    };

    static defaultProps = {
        layer: 'mapbox.streets',
        zoomControl: true
    };

    componentWillMount() {
        L.mapbox.accessToken = this.props.accessToken;
    }

    componentDidMount() {
        const { layer, center, zoom, maxZoom, minZoom, zoomControl, zoomControlPosition } = this.props;

        let options = {
            center,
            zoom,
            maxZoom,
            minZoom,
            zoomControl
        };

        this.center = center;

        options = _.omitBy(options, _.isUndefined);

        this.map = L.mapbox.map(ReactDOM.findDOMNode(this), layer, options);

        if(zoomControlPosition) new L.Control.Zoom({position: zoomControlPosition}).addTo(this.map);

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
        let childrenWithProps;

        childrenWithProps = React.Children.map(children, (child) => {
            return React.cloneElement(child, {map: this.map});
        });

        return (
            <div id="map">
                {childrenWithProps}
            </div>
        );
    }

};