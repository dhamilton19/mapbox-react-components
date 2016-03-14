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

var Line = function (_Feature) {
	_inherits(Line, _Feature);

	function Line(_ref) {
		var coordinates = _ref.coordinates;
		var stroke = _ref.stroke;
		var width = _ref.width;
		var opacity = _ref.opacity;

		_classCallCheck(this, Line);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Line).call(this, coordinates));

		_this.coordinates = coordinates;
		_this.stroke = stroke;
		_this.width = width;
		_this.opacity = opacity;
		return _this;
	}

	_createClass(Line, [{
		key: 'getType',
		value: function getType() {
			return 'LineString';
		}
	}, {
		key: 'getProperties',
		value: function getProperties() {
			return {
				stroke: this.stroke,
				width: this.width,
				opacity: this.opacity
			};
		}
	}]);

	return Line;
}(_Feature3.default);

exports.default = Line;