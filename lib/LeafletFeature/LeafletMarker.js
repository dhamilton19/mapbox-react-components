'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Marker2 = require('../Feature/Marker');

var _Marker3 = _interopRequireDefault(_Marker2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LeafletMarker = function (_Marker) {
	_inherits(LeafletMarker, _Marker);

	function LeafletMarker(_ref) {
		var coordinates = _ref.coordinates;
		var popup = _ref.popup;

		_classCallCheck(this, LeafletMarker);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LeafletMarker).call(this, { coordinates: coordinates }));

		_this.popup = popup;
		return _this;
	}

	_createClass(LeafletMarker, [{
		key: 'getProperties',
		value: function getProperties() {
			return {
				popup: this.popup
			};
		}
	}]);

	return LeafletMarker;
}(_Marker3.default);

exports.default = LeafletMarker;