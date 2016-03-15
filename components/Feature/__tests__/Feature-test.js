import expect from 'expect';

import Feature from '../Feature.js';


describe('Feature.Feature', () => {

	let feature;

	describe('#constructor', () => {

		feature = new Feature({coordinates: [1, 2]});

		describe('#getType', () => {

			it('override error is thrown', () => {
				expect(feature.getType).toThrow('Function must be overridden.');
			});

		});

		describe('#toGeoJson', () => {

			beforeEach(() => {
				expect.spyOn(feature, 'getProperties').andCall(() => { return null; });
				expect.spyOn(feature, 'getType').andCall(() => { return 'Point'; });
			});

			afterEach(() => {
				expect.restoreSpies();
			});

			it('override error is thrown', () => {
				expect(feature.toGeoJson()).toEqual({
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [1, 2]
					},
					properties: {}
				});
			});

		});

		describe('#getProperties', () => {

			it('override error is thrown', () => {
				expect(feature.getProperties).toThrow('Function must be overridden.');
			});

		});

	});

});
