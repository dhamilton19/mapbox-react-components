'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _Polygon = require('../Polygon.js');

var _Polygon2 = _interopRequireDefault(_Polygon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Feature.Polygon', function () {

	var feature = undefined;

	describe('#constructor', function () {

		var returnedProperties = {
			stroke: 1,
			'stroke-width': 1,
			'stroke-opacity': 1,
			fill: '#ccc',
			'fill-opacity': 1
		};

		feature = new _Polygon2.default({ coordinates: [1, 2], stroke: 1, strokeWidth: 1, strokeOpacity: 1, fill: '#ccc', fillOpacity: 1 });

		describe('#getType', function () {

			it('returns Polygon', function () {
				(0, _expect2.default)(feature.getType()).toEqual('Polygon');
			});
		});

		describe('#toGeoJson', function () {

			it('geoJson is returned', function () {
				(0, _expect2.default)(feature.toGeoJson()).toEqual({
					type: 'Feature',
					geometry: {
						type: 'Polygon',
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