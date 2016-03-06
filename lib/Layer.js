'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _mapbox = require('mapbox.js');

var _mapbox2 = _interopRequireDefault(_mapbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layer = function (_Component) {
    _inherits(Layer, _Component);

    function Layer() {
        _classCallCheck(this, Layer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Layer).apply(this, arguments));
    }

    _createClass(Layer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.forceUpdate();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var children = this.props.children;


            var childrenWithProps = _react2.default.Children.map(children, function (child) {
                return child ? _react2.default.cloneElement(child, { layer: _this2 }) : null;
            });

            return _react2.default.createElement(
                'div',
                null,
                childrenWithProps
            );
        }
    }, {
        key: 'getLayer',
        value: function getLayer() {
            return this.layer;
        }
    }, {
        key: 'setLayer',
        value: function setLayer(layer) {
            this.layer = layer;
        }
    }, {
        key: 'setListeners',
        value: function setListeners() {}
    }, {
        key: 'setFeatures',
        value: function setFeatures(features, options) {
            features = (0, _isArray2.default)(features) ? features : [features];
            this.updateLayer(features, options);
        }
    }, {
        key: 'updateLayer',
        value: function updateLayer(features, options) {
            throw new TypeError("Function must be overridden.");
        }
    }]);

    return Layer;
}(_react.Component);

exports.default = Layer;
;