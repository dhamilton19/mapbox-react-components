import config from '../../config';

import React, { Component } from 'react';
import _ from 'lodash';

import { Map, Marker } from '../../../components';


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
                    zoomControlPosition={'bottomright'}
                    markers={this.state.markers}
                />
                <button onClick={this.onClick} type="button" value="+" style={{position: "absolute", height: 100}}/>
            </div>
        );
    }

    onClick = () => {
        const coords = [Math.floor(Math.random() * 80) + 70, Math.floor(Math.random() * 39) + 36];
        const markers = _.map(this.state.markers, _.clone);

        markers.push(Marker({coords, title: 'test', description: 'test'}));
        this.setState({markers});
    }
}