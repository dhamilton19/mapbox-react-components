import expect from 'expect';

import Feature from '../Marker.js';


describe('Feature.Marker', () => {

	let feature;

	describe('#constructor', () => {

		const returnedProperties = {
			title: 'title',
			description: 'description',
			'marker-color': '#ccc',
			'marker-size': 'medium',
			'marker-symbol': 'arrow'
		};

		feature = new Feature({coordinates: [1, 2], title: 'title', description: 'description', color: '#ccc', size: 'medium', symbol: 'arrow'});

		describe('#getType', () => {

			it('returns Point', () => {
				expect(feature.getType()).toEqual('Point');
			});

		});

		describe('#toGeoJson', () => {

			it('geoJson is returned', () => {
				expect(feature.toGeoJson()).toEqual({
					type: 'Feature',
					geometry: {
						type: 'Point',
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
