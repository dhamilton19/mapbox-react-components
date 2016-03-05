import React, { Component, PropTypes } from 'react';
import L from 'mapbox.js';


export default class GeoJSONLayer extends Component {

    static propTypes = {
        children: PropTypes.any,
        map: PropTypes.object,
        onFeatureClick: PropTypes.func,
        onFeatureDblClick: PropTypes.func
    };

    componentWillReceiveProps(props) {
        const { map } = props;

        if(!this.layer && map) {
            this.layer = L.mapbox.featureLayer().addTo(map);

            this.setListeners();
        }
    }

    componentDidMount() {
        this.render();
    }

    render() {
        const { children } = this.props;

        let childrenWithProps = React.Children.map(children, (child) => {
            return child ? React.cloneElement(child, { layer: this }) : null;
        });

        return <div>{childrenWithProps}</div>;
    }

    setListeners() {
        const { onFeatureClick, onFeatureDblClick } = this.props;

        if(onFeatureClick){
            this.layer.on("click", (e) => {
                onFeatureClick(e.layer.feature);
            });
        }

        if(onFeatureDblClick){
            this.layer.on("dblclick", (e) => {
                onFeatureDblClick(e.layer.feature);
            });
        }
    }

    setFeatures(features) {
        this.layer.setGeoJSON({
            type: 'FeatureCollection',
            features
        })
    }

};
