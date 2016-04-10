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

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Layer: {
		displayName: 'Layer'
	}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	filename: 'src/components/Layer/Layer.jsx',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
	filename: 'src/components/Layer/Layer.jsx',
	components: _components,
	locals: [],
	imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
	};
}

/*Abstract class*/

var Layer = _wrapComponent('Layer')((_temp = _class = function (_Component) {
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
		key: 'setListeners',
		value: function setListeners() {}

		//Called by a feature class to add features to layer.

	}, {
		key: 'addFeaturesToLayer',
		value: function addFeaturesToLayer(features, options) {
			this.updateLayer((0, _isArray2.default)(features) ? features : [features], options);
		}
	}, {
		key: 'updateLayer',
		value: function updateLayer() {
			throw new Error('Function must be overridden.');
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var children = this.props.children;


			var childrenWithProps = _react3.default.Children.map(children, function (child) {
				return child ? _react3.default.cloneElement(child, { layer: _this2 }) : null;
			});

			return _react3.default.createElement(
				'div',
				null,
				childrenWithProps
			);
		}
	}]);

	return Layer;
}(_react2.Component), _class.propTypes = {
	children: _react2.PropTypes.array.isRequired
}, _temp));

exports.default = Layer;