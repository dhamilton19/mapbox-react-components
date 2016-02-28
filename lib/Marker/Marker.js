'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var coords = _ref.coords;
    var title = _ref.title;
    var description = _ref.description;


    return {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: coords
        },
        properties: {
            title: title,
            description: description,
            'marker-color': '#D32F2F',
            'marker-symbol': 'circle'
        }
    };
};