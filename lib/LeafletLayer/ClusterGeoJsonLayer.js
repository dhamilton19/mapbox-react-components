'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _mapbox = require('mapbox.js');

var _mapbox2 = _interopRequireDefault(_mapbox);

var _GeoJsonLayer2 = require('./GeoJsonLayer');

var _GeoJsonLayer3 = _interopRequireDefault(_GeoJsonLayer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./MarkerCluster');

var ClusterGeoJsonLayer = function (_GeoJsonLayer) {
	_inherits(ClusterGeoJsonLayer, _GeoJsonLayer);

	function ClusterGeoJsonLayer() {
		_classCallCheck(this, ClusterGeoJsonLayer);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ClusterGeoJsonLayer).apply(this, arguments));
	}

	_createClass(ClusterGeoJsonLayer, [{
		key: 'createLayer',
		value: function createLayer(map, options) {
			var _props = this.props;
			var spiderfyOnMaxZoom = _props.spiderfyOnMaxZoom;
			var showCoverageOnHover = _props.showCoverageOnHover;
			var zoomToBoundsOnClick = _props.zoomToBoundsOnClick;
			var singleMarkerMode = _props.singleMarkerMode;
			var animateAddingMarkers = _props.animateAddingMarkers;
			var chunkedLoading = _props.chunkedLoading;


			var geoJsonLayer = this.getLayer(options);

			var markers = _mapbox2.default.markerClusterGroup({
				spiderfyOnMaxZoom: spiderfyOnMaxZoom,
				showCoverageOnHover: showCoverageOnHover,
				zoomToBoundsOnClick: zoomToBoundsOnClick,
				singleMarkerMode: singleMarkerMode,
				animateAddingMarkers: animateAddingMarkers,
				chunkedLoading: chunkedLoading
			});

			markers.addLayer(geoJsonLayer);

			map.addLayer(markers);

			return markers;
		}
	}]);

	return ClusterGeoJsonLayer;
}(_GeoJsonLayer3.default);

ClusterGeoJsonLayer.propTypes = {
	animateAddingMarkers: _react.PropTypes.bool,
	chunkedLoading: _react.PropTypes.bool,
	map: _react.PropTypes.object,
	showCoverageOnHover: _react.PropTypes.bool,
	singleMarkerMode: _react.PropTypes.bool,
	spiderfyOnMaxZoom: _react.PropTypes.bool,
	zoomToBoundsOnClick: _react.PropTypes.bool
};
ClusterGeoJsonLayer.defaultProps = {
	animateAddingMarkers: true,
	chunkedLoading: true,
	showCoverageOnHover: true,
	singleMarkerMode: false,
	spiderfyOnMaxZoom: true,
	zoomToBoundsOnClick: true
};
exports.default = ClusterGeoJsonLayer;