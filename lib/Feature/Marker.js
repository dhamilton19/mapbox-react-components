'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Feature2 = require('./Feature');

var _Feature3 = _interopRequireDefault(_Feature2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Marker = function (_Feature) {
	_inherits(Marker, _Feature);

	function Marker(_ref) {
		var coordinates = _ref.coordinates;
		var title = _ref.title;
		var description = _ref.description;
		var color = _ref.color;
		var size = _ref.size;
		var symbol = _ref.symbol;

		_classCallCheck(this, Marker);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Marker).call(this, coordinates));

		_this.coordinates = coordinates;
		_this.title = title;
		_this.description = description;
		_this.color = color;
		_this.size = size;
		_this.symbol = symbol;
		return _this;
	}

	_createClass(Marker, [{
		key: 'getType',
		value: function getType() {
			return 'Point';
		}
	}, {
		key: 'getProperties',
		value: function getProperties() {
			return {
				title: this.title,
				description: this.description,
				'marker-color': this.color,
				'marker-size': this.size,
				'marker-symbol': this.symbol
			};
		}
	}]);

	return Marker;
}(_Feature3.default);

exports.default = Marker;