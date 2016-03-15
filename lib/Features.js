'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Features = function (_Component) {
    _inherits(Features, _Component);

    function Features() {
        _classCallCheck(this, Features);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Features).apply(this, arguments));
    }

    _createClass(Features, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            var layer = props.layer;
            var list = props.list;


            if (layer) {
                this.renderFeatures(layer, list);
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }, {
        key: 'renderFeatures',
        value: function renderFeatures(layer, features) {
            if (features && features.length > 0) {
                layer.setFeatures(features.map(function (feature) {
                    return feature.toGeoJson();
                }));
            }
        }
    }]);

    return Features;
}(_react.Component);

Features.propTypes = {
    layer: _react.PropTypes.object,
    item: _react.PropTypes.object,
    list: _react.PropTypes.array
};
exports.default = Features;
;
