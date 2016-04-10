'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _Marker = require('../Marker.js');

var _Marker2 = _interopRequireDefault(_Marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Feature.Marker', function () {

	var feature = undefined;

	describe('#constructor', function () {

		var returnedProperties = {
			title: 'title',
			description: 'description',
			'marker-color': '#ccc',
			'marker-size': 'medium',
			'marker-symbol': 'arrow'
		};

		feature = new _Marker2.default({ coordinates: [1, 2], title: 'title', description: 'description', color: '#ccc', size: 'medium', symbol: 'arrow' });

		describe('#getType', function () {

			it('returns Point', function () {
				(0, _expect2.default)(feature.getType()).toEqual('Point');
			});
		});

		describe('#toGeoJson', function () {

			it('geoJson is returned', function () {
				(0, _expect2.default)(feature.toGeoJson()).toEqual({
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [1, 2]
					},
					properties: returnedProperties
				});
			});
		});

		describe('#getProperties', function () {

			it('returns properties', function () {
				(0, _expect2.default)(feature.getProperties()).toEqual(returnedProperties);
			});
		});
	});
});