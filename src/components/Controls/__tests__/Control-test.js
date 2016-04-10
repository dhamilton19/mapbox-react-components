import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import Control from '../Control.jsx';


describe('Controls.Control', () => {

	let control;

	describe('#render', () => {

		control = TestUtils.renderIntoDocument(<Control/>);

		it('component should exist', () => {
			expect(control).toExist();
		});

		it('component should not have dom node', () => {
			expect(TestUtils.isDOMComponent(control)).toBe(false);
		});

		describe('#componentWillReceiveProps', () => {

			let spy;

			beforeEach(() => {
				spy = expect.spyOn(control, 'addControl').andCall(() => {});
			});

			afterEach(() => {
				spy.restore();
			});

			describe('when no props', () => {

				it('#addControl not called', () => {
					control.componentWillReceiveProps({});
					expect(spy.calls.length).toEqual(0);
				});

			});

			describe('when props with position', () => {

				it('#addControl called', () => {
					control.componentWillReceiveProps({position: 'bottomright'});
					expect(spy.calls.length).toEqual(1);
				});

			});

		});

		describe('#shouldComponentUpdate', () => {

			it('returns false', () => {
				expect(control.shouldComponentUpdate()).toEqual(false);
			});

		});

		describe('#getType', () => {

			it('override error is thrown', () => {
				expect(control.getType).toThrow('Function must be overridden.');
			});

		});


	});

});
