import config from '../../config';

import React, { Component } from 'react';
import _ from 'lodash';

import { Map, Layer, Markers } from '../../../components';
import MapMarker from '../MapMarker';


export default class MapPage extends Component {

    constructor() {
        super();
        this.state = {
            markers: []
        };
    }

    render() {
        return (
            <div>
                <Map
                    accessToken={config.accessToken}
                    center={[40, -74.50]}
                    zoom={10}
                    minZoom={3}
                    zoomControl={false}
                    zoomControlPosition={'bottomright'}>
                    <Layer>
                        <Markers markers={this.state.markers}/>
                    </Layer>
                </Map>
                <button onClick={this.onClick} type="button" style={{position: "absolute", height: 30, width: 100}}>+ Marker</button>
            </div>
        );
    }

    onClick = () => {
        const coords = [Math.floor(Math.random() * 80) + 70, Math.floor(Math.random() * 39) + 36];
        let markers = _.map(this.state.markers, _.clone);

        const marker = new MapMarker(coords, "test", "description");

        markers.push(marker);

        this.setState({markers});
    }
}