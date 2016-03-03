import React, { Component, PropTypes } from 'react';
import L from 'mapbox.js';


export default class Layer extends Component {

    static propTypes = {
        map: PropTypes.object
    };

    componentWillReceiveProps(props) {
        const { map } = props;

        if(!this.layer && map) {
            this.layer = L.mapbox.featureLayer().addTo(map);
        }
    }

    componentDidMount() {
        this.render();
    }

    render() {
        const { children } = this.props;

        let childrenWithProps = React.Children.map(children, (child) => {
            return React.cloneElement(child, { layer: this.layer });
        });

        return <div>{childrenWithProps}</div>;
    }

};
