import expect from 'expect';

import assert from '../assert.js';


describe('assert', () => {

	const errorMessage = 'error';

	describe('#isNotEmpty', () => {

		describe('when value is null', () => {

			it('then error should be thrown', () => {
				expect(() => {
					assert(null).isNotEmpty(errorMessage);
				}).toThrow(errorMessage);
			});

		});

		describe('when value is array', () => {

			describe('when value is empty', () => {

				it('then error should be thrown', () => {
					expect(() => {
						assert([]).isNotEmpty(errorMessage);
					}).toThrow(errorMessage);
				});

			});

			describe('when value is not empty', () => {

				it('then true should be returned', () => {
					expect(assert([1, 2, 3]).isNotEmpty()).toBe(true);
				});

			});


		});

	});

});
