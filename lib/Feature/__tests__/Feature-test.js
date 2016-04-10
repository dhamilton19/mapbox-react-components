'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _Feature = require('../Feature.js');

var _Feature2 = _interopRequireDefault(_Feature);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Feature.Feature', function () {

	var feature = undefined;

	describe('#constructor', function () {

		feature = new _Feature2.default({ coordinates: [1, 2] });

		describe('#getType', function () {

			it('override error is thrown', function () {
				(0, _expect2.default)(feature.getType).toThrow('Function must be overridden.');
			});
		});

		describe('#toGeoJson', function () {

			beforeEach(function () {
				_expect2.default.spyOn(feature, 'getProperties').andCall(function () {
					return null;
				});
				_expect2.default.spyOn(feature, 'getType').andCall(function () {
					return 'Point';
				});
			});

			afterEach(function () {
				_expect2.default.restoreSpies();
			});

			it('override error is thrown', function () {
				(0, _expect2.default)(feature.toGeoJson()).toEqual({
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [1, 2]
					},
					properties: {}
				});
			});
		});

		describe('#getProperties', function () {

			it('override error is thrown', function () {
				(0, _expect2.default)(feature.getProperties).toThrow('Function must be overridden.');
			});
		});
	});
});