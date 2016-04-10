'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assert = require('../assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var innerDifference = function innerDifference(first, second) {
	var different = false;
	for (var i = 0; i < first.length; i++) {
		if (first[i] !== second[i] && !different) different = true;
	}
	return different;
};

var difference = function difference(first, second) {
	(0, _assert2.default)(first).isNotEmpty('Array cannot be empty');
	(0, _assert2.default)(second).isNotEmpty('Array cannot be empty');

	var differenceArray = [];
	for (var i = 0; i < first.length; i++) {
		var found = false;
		for (var j = 0; j < second.length; j++) {
			if (!found && !innerDifference(first[i], second[j])) {
				found = true;
				break;
			}
		}
		if (!found) differenceArray.push(first[i]);
	}
	return differenceArray;
};

exports.default = function (first, second) {
	return [].concat(_toConsumableArray(difference(first, second)), _toConsumableArray(difference(second, first)));
};