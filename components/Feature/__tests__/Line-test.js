import expect from 'expect';

import Feature from '../Line.js';


describe('Feature.Line', () => {

	let feature;

	describe('#constructor', () => {

		const properties = {stroke: 1, width: 1, opacity: 1};
		feature = new Feature({coordinates: [1, 2], ...properties});

		describe('#getType', () => {

			it('returns LineString', () => {
				expect(feature.getType()).toEqual('LineString');
			});

		});

		describe('#toGeoJson', () => {

			it('geoJson is returned', () => {
				expect(feature.toGeoJson()).toEqual({
					type: 'Feature',
					geometry: {
						type: 'LineString',
						coordinates: [1, 2]
					},
					properties
				});
			});

		});

		describe('#getProperties', () => {

			it('returns properties', () => {
				expect(feature.getProperties()).toEqual(properties);
			});

		});

	});

});
