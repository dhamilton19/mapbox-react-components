export default ({coords, title, description}) => {
    return {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: coords
        },
        properties: {
            title,
            description,
            'marker-color': '#D32F2F',
            'marker-symbol': 'circle'
        }
    }

};