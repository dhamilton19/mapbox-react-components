'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Features: {
		displayName: 'Features'
	}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	filename: 'components/Features/Features.jsx',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
	filename: 'components/Features/Features.jsx',
	components: _components,
	locals: [],
	imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
	};
}

var Features = _wrapComponent('Features')((_temp = _class = function (_Component) {
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
		key: 'renderFeatures',
		value: function renderFeatures(layer, features) {
			if (features && features.length > 0) {
				layer.setFeatures(features.map(function (feature) {
					return feature.toGeoJSON();
				}));
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);

	return Features;
}(_react2.Component), _class.propTypes = {
	item: _react2.PropTypes.object,
	layer: _react2.PropTypes.object,
	list: _react2.PropTypes.array
}, _temp));

exports.default = Features;