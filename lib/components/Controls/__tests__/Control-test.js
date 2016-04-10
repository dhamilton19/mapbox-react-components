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

describe('Controls.Control', function () {

	var control = undefined;

	describe('#render', function () {

		control = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(_Control2.default, null));

		it('component should exist', function () {
			(0, _expect2.default)(control).toExist();
		});

		it('component should not have dom node', function () {
			(0, _expect2.default)(_reactAddonsTestUtils2.default.isDOMComponent(control)).toBe(false);
		});

		describe('#componentWillReceiveProps', function () {

			var spy = undefined;

			beforeEach(function () {
				spy = _expect2.default.spyOn(control, 'addControl').andCall(function () {});
			});

			afterEach(function () {
				spy.restore();
			});

			describe('when no props', function () {

				it('#addControl not called', function () {
					control.componentWillReceiveProps({});
					(0, _expect2.default)(spy.calls.length).toEqual(0);
				});
			});

			describe('when props with position', function () {

				it('#addControl called', function () {
					control.componentWillReceiveProps({ position: 'bottomright' });
					(0, _expect2.default)(spy.calls.length).toEqual(1);
				});
			});
		});

		describe('#shouldComponentUpdate', function () {

			it('returns false', function () {
				(0, _expect2.default)(control.shouldComponentUpdate()).toEqual(false);
			});
		});

		describe('#getType', function () {

			it('override error is thrown', function () {
				(0, _expect2.default)(control.getType).toThrow('Function must be overridden.');
			});
		});
	});
});