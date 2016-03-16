import expect from 'expect';

import deepDifference from '../deepDifference.js';


describe('deepDifference', () => {

	describe('when first array is equal to second array', () => {

		describe('when arrays have 2 sub arrays', () => {

			it('then return empty array', () => {
				expect(deepDifference(
					[[1, 2], [2, 3]],
					[[1, 2], [2, 3]]
				)).toEqual([]);
			});

		});

		describe('when arrays have 3 sub arrays', () => {

			it('then return empty array', () => {
				expect(deepDifference(
					[[1, 2], [2, 3], [1, 4]],
					[[1, 2], [2, 3], [1, 4]]
				)).toEqual([]);
			});

		});

	});

	describe('when first array is not equal to second array', () => {

		describe('when arrays have 2 sub arrays', () => {

			it('then return difference array', () => {
				expect(deepDifference(
					[[1, 3], [2, 3]],
					[[1, 2], [2, 3]]
				)).toEqual([[1, 3], [1, 2]]);
			});

		});

		describe('when arrays have 3 sub arrays', () => {

			it('then return difference array', () => {
				expect(deepDifference(
					[[1, 2], [1, 3], [1, 4]],
					[[1, 2], [1, 3], [1, 5]]
				)).toEqual([[1, 4], [1, 5]]);
			});

		});

	});


});
