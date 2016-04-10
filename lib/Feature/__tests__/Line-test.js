'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _Line = require('../Line.js');

var _Line2 = _interopRequireDefault(_Line);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Feature.Line', function () {

	var feature = undefined;

	describe('#constructor', function () {

		var properties = { stroke: 1, width: 1, opacity: 1 };
		feature = new _Line2.default(_extends({ coordinates: [1, 2] }, properties));

		describe('#getType', function () {

			it('returns LineString', function () {
				(0, _expect2.default)(feature.getType()).toEqual('LineString');
			});
		});

		describe('#toGeoJson', function () {

			it('geoJson is returned', function () {
				(0, _expect2.default)(feature.toGeoJson()).toEqual({
					type: 'Feature',
					geometry: {
						type: 'LineString',
						coordinates: [1, 2]
					},
					properties: properties
				});
			});
		});

		describe('#getProperties', function () {

			it('returns properties', function () {
				(0, _expect2.default)(feature.getProperties()).toEqual(properties);
			});
		});
	});
});