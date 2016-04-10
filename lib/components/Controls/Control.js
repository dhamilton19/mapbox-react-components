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

var _mapbox = require('mapbox.js');

var _mapbox2 = _interopRequireDefault(_mapbox);

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Control: {
		displayName: 'Control'
	}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	filename: 'src/components/Controls/Control.jsx',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
	filename: 'src/components/Controls/Control.jsx',
	components: _components,
	locals: [],
	imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
	};
}

var Control = _wrapComponent('Control')((_temp = _class = function (_Component) {
	_inherits(Control, _Component);

	function Control() {
		_classCallCheck(this, Control);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Control).apply(this, arguments));
	}

	_createClass(Control, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(props) {
			var position = props.position;
			var map = props.map;


			var options = (0, _omit2.default)(props, ['map']);

			if (position) this.addControl(options, map);
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate() {
			return false;
		}
	}, {
		key: 'getType',
		value: function getType() {
			throw new Error('Function must be overridden.');
		}
	}, {
		key: 'addControl',
		value: function addControl(options, map) {
			if (map && !this.control) this.control = new _mapbox2.default.Control[this.getType()](options).addTo(map);
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);

	return Control;
}(_react2.Component), _class.propTypes = {
	map: _react2.PropTypes.object,
	position: _react2.PropTypes.string
}, _temp));

exports.default = Control;