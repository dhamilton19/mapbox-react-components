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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _mapbox = require('mapbox.js');

var _mapbox2 = _interopRequireDefault(_mapbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Markers: {
		displayName: 'Markers'
	}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	filename: 'components/LeafletFeature/Markers.jsx',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
	filename: 'components/LeafletFeature/Markers.jsx',
	components: _components,
	locals: [],
	imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
	};
}

require('./AwesomeMarkers');

var Markers = _wrapComponent('Markers')((_temp = _class = function (_Component) {
	_inherits(Markers, _Component);

	function Markers() {
		_classCallCheck(this, Markers);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Markers).apply(this, arguments));
	}

	_createClass(Markers, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(props) {
			var layer = props.layer;
			var markers = props.markers;
			var icon = props.icon;


			if (layer) {
				var options = {
					title: 'test',
					icon: _mapbox2.default.AwesomeMarkers.icon(_extends({}, icon))
				};

				var features = markers.map(function (marker) {
					return marker.toGeoJSON();
				});

				layer.setFeatures(features, options);
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
	}]);

	return Markers;
}(_react2.Component), _class.propTypes = {
	icon: _react2.PropTypes.object.isRequired,
	layer: _react2.PropTypes.object,
	markers: _react2.PropTypes.array.isRequired
}, _temp));

exports.default = Markers;