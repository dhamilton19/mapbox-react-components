import config from '../../config';
import data from '../../data';

import React, { Component } from 'react';
import map from 'lodash/map';
import clone from 'lodash/clone';

import { Map, Control, FeatureLayer, LeafletLayer, Features, Feature, LeafletFeature } from '../../../components';
import { Marker1, Marker2 } from '../Markers';


export default class MapPage extends Component {

    constructor() {
        super();
        this.state = {
            markers: [],
            lines: this.getLines(),
            polygons: this.getPolygons()
        };
    }

    componentDidMount() {
        this.render();
    }

    render() {
        return (
            <div>
                <Map
                    accessToken={config.mapboxAccessToken}
                    center={[36, 70]}
                    zoom={3}
                    minZoom={3}
                    zoomControl={false}>
                    <Control.Zoom position={'bottomright'}/>
                    <FeatureLayer
                        onFeatureClick={this.handleFeatureClick}
                        onFeatureDblClick={this.handleFeatureDblClick}>
                        <Features.Markers list={this.state.markers}/>
                    </FeatureLayer>
                    <FeatureLayer>
                        <Features.Lines list={this.state.lines}/>
                    </FeatureLayer>
                    <FeatureLayer>
                        <Features.Polygons list={this.state.polygons}/>
                    </FeatureLayer>
                    <LeafletLayer.LGeoJsonLayer>
                        <LeafletFeature.Markers
                            markers={this.getMarkers()}
                            icon={{icon: 'done', markerColor: 'red'}}/>
                    </LeafletLayer.LGeoJsonLayer>
                    <LeafletLayer.ClusterGeoJsonLayer>
                        <LeafletFeature.Markers
                            markers={this.getMarkers()}
                            icon={{icon: 'done', markerColor: 'red'}}/>
                    </LeafletLayer.ClusterGeoJsonLayer>
                </Map>
                <button onClick={this.onButtonClick} type="button" style={{position: "absolute", height: 30, width: 100}}>+ Marker</button>
            </div>
        );
    }

    onButtonClick = () => {
        const coordinates = [Math.floor(Math.random() * 80) + 70, Math.floor(Math.random() * 39) + 36];
        let markers = map(this.state.markers, clone);

        const flag = Math.floor(Math.random() * 2) + 1;
        let marker;

        if(flag === 1){
            marker = new Marker1({
                coordinates,
                title: "test",
                description: "description"
            });
        }
        else{
            marker = new Marker2({
                coordinates,
                title: "test",
                description: "description"
            });

        }

        markers.push(marker);

        this.setState({markers});
    };

    handleFeatureClick = (value) => {
        console.log("Single click: ${value}", value);
    };

    handleFeatureDblClick = (value) => {
        console.log("Double click: ${value}", value);
    };

    getLines() {
        const properties = {
            "stroke": "#ea0006",
            "stroke-width": 3,
            "stroke-opacity": 1
        };

        return data.lines.map((item) => {
            return new Feature.Line({coordinates: item, ...properties});
        });
    }

    getPolygons() {
        const properties = {
            "stroke": "#471d8d",
            "stroke-width": 2.6,
            "stroke-opacity": 12,
            "fill": "#182e92",
            "fill-opacity": 1
        };

        return data.polygons.map((item) => {
            return new Feature.Polygon({coordinates: item, ...properties});
        });
    }

    getMarkers() {
        let markers = [];
        for(let i=0;i<10;i++){
            const coordinates = [Math.floor(Math.random() * 80) + 70, Math.floor(Math.random() * 39) + 36];
            markers.push(new LeafletFeature.Marker({coordinates, popup: {content: "heiiilo"}}));
        }
        markers.push(new LeafletFeature.Marker({coordinates: [75, 37]}));
        return markers;
    }
}