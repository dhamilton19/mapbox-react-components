'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _isArray = require('../../../node_modules/lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _isEmpty = require('../../../node_modules/lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assert(value) {
	if (!(this instanceof assert)) {
		return new assert(value);
	}
	this.value = value;
}

assert.prototype.isNotEmpty = function (message) {
	if (!(0, _isArray2.default)(this.value) || (0, _isEmpty2.default)(this.value)) throw new Error(message);
	return true;
};

exports.default = assert;