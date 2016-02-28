'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _mapbox = require('mapbox.js');

var _mapbox2 = _interopRequireDefault(_mapbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = function (_Component) {
    _inherits(Map, _Component);

    function Map() {
        _classCallCheck(this, Map);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Map).apply(this, arguments));
    }

    _createClass(Map, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _mapbox2.default.mapbox.accessToken = this.props.accessToken;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props;
            var layer = _props.layer;
            var center = _props.center;
            var zoom = _props.zoom;
            var maxZoom = _props.maxZoom;
            var minZoom = _props.minZoom;
            var zoomControl = _props.zoomControl;
            var zoomControlPosition = _props.zoomControlPosition;


            var options = {
                center: center,
                zoom: zoom,
                maxZoom: maxZoom,
                minZoom: minZoom,
                zoomControl: zoomControl
            };

            this.center = center;

            _lodash2.default.omit(options, _lodash2.default.isUndefined);

            this.map = _mapbox2.default.mapbox.map(document.getElementById('map'), layer, options);
            if (zoomControlPosition) new _mapbox2.default.Control.Zoom({ position: zoomControlPosition }).addTo(this.map);

            this.markerLayer = _mapbox2.default.mapbox.featureLayer().addTo(this.map);
            this.renderMarkers(this.props);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            var center = props.center;


            if (this.center !== center) {
                this.center = center;
                this.map.setView(this.center, 9);
            }

            this.renderMarkers(props.markers);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { id: 'map' });
        }
    }, {
        key: 'renderMarkers',
        value: function renderMarkers(markers) {
            if (markers && markers.length > 0) {
                this.markerLayer.setGeoJSON({
                    type: 'FeatureCollection',
                    features: markers
                });
            }
        }
    }]);

    return Map;
}(_react.Component);

Map.propTypes = {
    accessToken: _react.PropTypes.string.isRequired,
    layer: _react.PropTypes.string,
    center: _react.PropTypes.array.isRequired,
    zoom: _react.PropTypes.number.isRequired,
    minZoom: _react.PropTypes.number,
    maxZoom: _react.PropTypes.number,
    zoomControl: _react.PropTypes.bool,
    zoomControlPosition: _react.PropTypes.string,
    markers: _react.PropTypes.array
};
Map.defaultProps = {
    layer: 'mapbox.streets',
    zoomControl: true,
    markers: []
};
exports.default = Map;
;