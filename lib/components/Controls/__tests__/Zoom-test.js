'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _Zoom = require('../Zoom.jsx');

var _Zoom2 = _interopRequireDefault(_Zoom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Controls.Zoom', function () {

	var control = undefined;

	describe('#render', function () {

		control = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(_Zoom2.default, null));

		describe('#getType', function () {

			it('zoom is returned', function () {
				(0, _expect2.default)(control.getType()).toBe('Zoom');
			});
		});
	});
});