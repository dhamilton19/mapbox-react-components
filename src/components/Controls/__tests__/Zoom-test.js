import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import Control from '../Zoom.jsx';


describe('Controls.Zoom', () => {

	let control;

	describe('#render', () => {

		control = TestUtils.renderIntoDocument(<Control/>);

		describe('#getType', () => {

			it('zoom is returned', () => {
				expect(control.getType()).toBe('Zoom');
			});

		});


	});

});
