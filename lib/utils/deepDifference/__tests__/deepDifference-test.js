'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _deepDifference = require('../deepDifference.js');

var _deepDifference2 = _interopRequireDefault(_deepDifference);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('deepDifference', function () {

	describe('when first array is equal to second array', function () {

		describe('when arrays have 2 sub arrays', function () {

			it('then return empty array', function () {
				(0, _expect2.default)((0, _deepDifference2.default)([[1, 2], [2, 3]], [[1, 2], [2, 3]])).toEqual([]);
			});
		});

		describe('when arrays have 3 sub arrays', function () {

			it('then return empty array', function () {
				(0, _expect2.default)((0, _deepDifference2.default)([[1, 2], [2, 3], [1, 4]], [[1, 2], [2, 3], [1, 4]])).toEqual([]);
			});
		});
	});

	describe('when first array is not equal to second array', function () {

		describe('when arrays have 2 sub arrays', function () {

			it('then return difference array', function () {
				(0, _expect2.default)((0, _deepDifference2.default)([[1, 3], [2, 3]], [[1, 2], [2, 3]])).toEqual([[1, 3], [1, 2]]);
			});
		});

		describe('when arrays have 3 sub arrays', function () {

			it('then return difference array', function () {
				(0, _expect2.default)((0, _deepDifference2.default)([[1, 2], [1, 3], [1, 4]], [[1, 2], [1, 3], [1, 5]])).toEqual([[1, 4], [1, 5]]);
			});
		});
	});
});