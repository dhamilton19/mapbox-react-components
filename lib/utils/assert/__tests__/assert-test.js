'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _assert = require('../assert.js');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('assert', function () {

	var errorMessage = 'error';

	describe('#isNotEmpty', function () {

		describe('when value is null', function () {

			it('then error should be thrown', function () {
				(0, _expect2.default)(function () {
					(0, _assert2.default)(null).isNotEmpty(errorMessage);
				}).toThrow(errorMessage);
			});
		});

		describe('when value is array', function () {

			describe('when value is empty', function () {

				it('then error should be thrown', function () {
					(0, _expect2.default)(function () {
						(0, _assert2.default)([]).isNotEmpty(errorMessage);
					}).toThrow(errorMessage);
				});
			});

			describe('when value is not empty', function () {

				it('then true should be returned', function () {
					(0, _expect2.default)((0, _assert2.default)([1, 2, 3]).isNotEmpty()).toBe(true);
				});
			});
		});
	});
});