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

var Polygon = function (_Feature) {
	_inherits(Polygon, _Feature);

	function Polygon(_ref) {
		var coordinates = _ref.coordinates;
		var stroke = _ref.stroke;
		var strokeWidth = _ref.strokeWidth;
		var strokeOpacity = _ref.strokeOpacity;
		var fill = _ref.fill;
		var fillOpacity = _ref.fillOpacity;

		_classCallCheck(this, Polygon);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Polygon).call(this, { coordinates: coordinates }));

		_this.stroke = stroke;
		_this.strokeWidth = strokeWidth;
		_this.strokeOpacity = strokeOpacity;
		_this.fill = fill;
		_this.fillOpacity = fillOpacity;
		return _this;
	}

	_createClass(Polygon, [{
		key: 'getType',
		value: function getType() {
			return 'Polygon';
		}
	}, {
		key: 'getProperties',
		value: function getProperties() {
			return {
				stroke: this.stroke,
				'stroke-width': this.strokeWidth,
				'stroke-opacity': this.strokeOpacity,
				fill: this.fill,
				'fill-opacity': this.fillOpacity
			};
		}
	}]);

	return Polygon;
}(_Feature3.default);

exports.default = Polygon;