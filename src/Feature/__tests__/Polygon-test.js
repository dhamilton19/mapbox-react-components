import expect from 'expect';

import Feature from '../Polygon.js';


describe('Feature.Polygon', () => {

	let feature;

	describe('#constructor', () => {

		const returnedProperties = {
			stroke: 1,
			'stroke-width': 1,
			'stroke-opacity': 1,
			fill: '#ccc',
			'fill-opacity': 1
		};

		feature = new Feature({coordinates: [1, 2], stroke: 1, strokeWidth: 1, strokeOpacity: 1, fill: '#ccc', fillOpacity: 1});

		describe('#getType', () => {

			it('returns Polygon', () => {
				expect(feature.getType()).toEqual('Polygon');
			});

		});

		describe('#toGeoJson', () => {

			it('geoJson is returned', () => {
				expect(feature.toGeoJson()).toEqual({
					type: 'Feature',
					geometry: {
						type: 'Polygon',
						coordinates: [1, 2]
					},
					properties: returnedProperties
				});
			});

		});

		describe('#getProperties', () => {

			it('returns properties', () => {
				expect(feature.getProperties()).toEqual(returnedProperties);
			});
		});

	});

});
