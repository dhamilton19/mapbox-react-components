'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _mapbox = require('mapbox.js');

var _mapbox2 = _interopRequireDefault(_mapbox);

var _Layer2 = require('../Layer');

var _Layer3 = _interopRequireDefault(_Layer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeatureLayer = function (_Layer) {
	_inherits(FeatureLayer, _Layer);

	function FeatureLayer() {
		_classCallCheck(this, FeatureLayer);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(FeatureLayer).apply(this, arguments));
	}

	_createClass(FeatureLayer, [{
		key: 'setListeners',
		value: function setListeners() {
			var _props = this.props;
			var onFeatureClick = _props.onFeatureClick;
			var onFeatureDblClick = _props.onFeatureDblClick;


			if (onFeatureClick) {
				this.layer.on('click', function (e) {
					onFeatureClick(e.layer.feature);
				});
			}

			if (onFeatureDblClick) {
				this.layer.on('dblclick', function (e) {
					onFeatureDblClick(e.layer.feature);
				});
			}
		}
	}, {
		key: 'updateLayer',
		value: function updateLayer(features) {
			if (!this.layer) {
				var map = this.props.map;

				this.layer = _mapbox2.default.mapbox.featureLayer().addTo(map);
				this.setListeners();
			}

			this.layer.setGeoJSON({
				type: 'FeatureCollection',
				features: features
			});
		}
	}]);

	return FeatureLayer;
}(_Layer3.default);

FeatureLayer.propTypes = {
	children: _react.PropTypes.any,
	map: _react.PropTypes.object,
	onFeatureClick: _react.PropTypes.func,
	onFeatureDblClick: _react.PropTypes.func
};
exports.default = FeatureLayer;