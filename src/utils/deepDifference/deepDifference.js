import assert from '../assert';


const innerDifference = (first, second) => {
	let different = false;
	for (let i = 0; i < first.length; i++) {
		if (first[i] !== second[i] && !different) different = true;
	}
	return different;
};

const difference = (first, second) => {
	assert(first).isNotEmpty('Array cannot be empty');
	assert(second).isNotEmpty('Array cannot be empty');

	const differenceArray = [];
	for (let i = 0; i < first.length; i++) {
		let found = false;
		for (let j = 0; j < second.length; j++) {
			if (!found && !innerDifference(first[i], second[j])) {
				found = true;
				break;
			}
		}
		if (!found) differenceArray.push(first[i]);
	}
	return differenceArray;
};

export default (first, second) => [...difference(first, second), ...difference(second, first)];
