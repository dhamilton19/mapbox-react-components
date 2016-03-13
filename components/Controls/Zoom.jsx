import Control from './Control';
import React, { PropTypes } from 'react';


export default class Zoom extends Control {

    static propTypes = {
        map: PropTypes.object,
        position: PropTypes.string
    };

    componentWillReceiveProps(props) {
        const { position, map } = props;

        if(position) this.addControl({position}, map);
    }

    getType() {
        return 'Zoom';
    }

};