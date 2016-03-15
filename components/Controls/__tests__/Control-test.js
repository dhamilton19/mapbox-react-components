import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Control from '../Control.jsx';


describe('Control', function () {

	let control;

	describe('#render', function () {

		control = TestUtils.renderIntoDocument(<Control/>);

		it('renders as null', function () {
			expect(control).toExist();
		});

		it('renders as 1111', function () {
			expect(TestUtils.isDOMComponent(control)).toBe(false);
		});
	});

});
