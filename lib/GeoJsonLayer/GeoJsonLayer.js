'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mapbox = require('mapbox.js');

var _mapbox2 = _interopRequireDefault(_mapbox);

var _deepDifference = require('../../utils/deepDifference');

var _deepDifference2 = _interopRequireDefault(_deepDifference);

var _Layer2 = require('../Layer');

var _Layer3 = _interopRequireDefault(_Layer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GeoJsonLayer = function (_Layer) {
    _inherits(GeoJsonLayer, _Layer);

    function GeoJsonLayer() {
        _classCallCheck(this, GeoJsonLayer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GeoJsonLayer).apply(this, arguments));
    }

    _createClass(GeoJsonLayer, [{
        key: 'updateLayer',
        value: function updateLayer(features, options) {
            if (!this.features || this.haveFeaturesChanged(features)) {
                var map = this.props.map;

                this.features = features;

                if (this.getLayer()) this.getLayer().clearLayers();

                var layer = _mapbox2.default.geoJson(this.features, {
                    pointToLayer: function pointToLayer(feature, latlng) {
                        var marker = _mapbox2.default.marker(latlng, options);
                        if (feature.properties.popup) {
                            var popup = _mapbox2.default.popup().setContent(feature.properties.popup.content);
                            marker.bindPopup(popup);
                        }
                        return marker;
                    }
                }).addTo(map);

                this.setLayer(layer);
            }
        }
    }, {
        key: 'haveFeaturesChanged',
        value: function haveFeaturesChanged(newFeatures) {
            var first = newFeatures.map(function (feature) {
                return feature.geometry.coordinates;
            });

            var second = this.features.map(function (feature) {
                return feature.geometry.coordinates;
            });

            return (0, _deepDifference2.default)(first, second).length > 0;
        }
    }]);

    return GeoJsonLayer;
}(_Layer3.default);

GeoJsonLayer.propTypes = {
    children: _react.PropTypes.any,
    map: _react.PropTypes.object
};
exports.default = GeoJsonLayer;
;