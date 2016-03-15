'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _Control = require('../Control.jsx');

var _Control2 = _interopRequireDefault(_Control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Control', function () {

	var control = undefined;

	describe('#render', function () {

		control = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(_Control2.default, null));

		it('renders as null', function () {
			(0, _expect2.default)(control).toExist();
		});

		it('renders as 1111', function () {
			(0, _expect2.default)(_reactAddonsTestUtils2.default.isDOMComponent(control)).toBe(false);
		});
	});
});