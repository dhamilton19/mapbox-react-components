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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

var _omitBy = require('lodash/omitBy');

var _omitBy2 = _interopRequireDefault(_omitBy);

var _isUndefined = require('lodash/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _difference = require('lodash/difference');

var _difference2 = _interopRequireDefault(_difference);

var _mapbox = require('mapbox.js');

var _mapbox2 = _interopRequireDefault(_mapbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Map: {
		displayName: 'Map'
	}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	filename: 'components/Map/Map.jsx',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
	filename: 'components/Map/Map.jsx',
	components: _components,
	locals: [],
	imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
	};
}

require('mapbox.js/theme/style.css');
require('./styles.css');

var Map = _wrapComponent('Map')((_temp = _class = function (_Component) {
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


			this.center = center;

			var options = (0, _omit2.default)((0, _omitBy2.default)(this.props, _isUndefined2.default), ['accessToken', 'layer', 'children']);

			this.map = _mapbox2.default.mapbox.map(_reactDom2.default.findDOMNode(this), layer, options);

			this.forceUpdate();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(props) {
			var center = props.center;


			if ((0, _difference2.default)(this.center, center).length > 0) {
				this.center = center;
				this.map.setView(this.center, 9);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var children = this.props.children;


			var childrenWithProps = _react3.default.Children.map(children, function (child) {
				return child ? _react3.default.cloneElement(child, { map: _this2.map }) : null;
			});

			return _react3.default.createElement(
				'div',
				{ id: 'map' },
				childrenWithProps
			);
		}
	}]);

	return Map;
}(_react2.Component), _class.propTypes = {
	accessToken: _react2.PropTypes.string.isRequired,
	center: _react2.PropTypes.array.isRequired,
	children: _react2.PropTypes.any,
	layer: _react2.PropTypes.string,
	maxZoom: _react2.PropTypes.number,
	minZoom: _react2.PropTypes.number,
	zoom: _react2.PropTypes.number.isRequired,
	zoomControl: _react2.PropTypes.bool
}, _class.defaultProps = {
	layer: 'mapbox.streets',
	zoomControl: true
}, _temp));

exports.default = Map;