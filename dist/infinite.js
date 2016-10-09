'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _scrollTop = require('dom-helpers/query/scrollTop');

var _scrollTop2 = _interopRequireDefault(_scrollTop);

var _height = require('dom-helpers/query/height');

var _height2 = _interopRequireDefault(_height);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Infinite = function (_Component) {
  _inherits(Infinite, _Component);

  function Infinite() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Infinite);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Infinite.__proto__ || Object.getPrototypeOf(Infinite)).call.apply(_ref, [this].concat(args))), _this), _this.last = 0, _this.handle = function () {
      var _this2 = _this;
      var container = _this2.container;
      var scroller = _this2.scroller;
      var props = _this2.props;
      var disabled = props.disabled;
      var offset = props.offset;
      var reverse = props.reverse;
      var callback = props.callback;


      if (_this.props.disabled) {
        return;
      }

      var totalScroll = (0, _scrollTop2.default)(scroller);

      // If we're supposed to scroll downwards, and we're doing so.
      if (!reverse && _this.last < totalScroll) {
        var containerBottom = container.scrollHeight;
        var scrollerHeight = (0, _height2.default)(scroller);

        if (totalScroll + offset >= containerBottom - scrollerHeight) {
          callback();
        }
        // If we're supposed to scroll up, and we're doing so
        // wnd we've scrolled up to our "threshold"
      } else if (reverse && _this.last > totalScroll && totalScroll - offset <= 0) {
          callback();
        }

      _this.last = totalScroll;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // Last scroll, to check if we scrolled up or down


  _createClass(Infinite, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scroller.addEventListener('scroll', this.handle);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.scroller.removeEventListener('scroll', this.handle);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var offset = _props.offset;
      var disabled = _props.disabled;
      var container = _props.container;
      var callback = _props.callback;
      var reverse = _props.reverse;

      var props = _objectWithoutProperties(_props, ['children', 'offset', 'disabled', 'container', 'callback', 'reverse']);

      return _react2.default.createElement(
        'div',
        _extends({ ref: 'container' }, props),
        children
      );
    }
  }, {
    key: 'scroller',


    // The scrolling container, where we run the scroll listener.
    // The actual container doesn't trigger the scrolling event.
    get: function get() {
      return this.props.container ? this.refs.container : window;
    }

    // The actual container, where we perform the actual calculations with.

  }, {
    key: 'container',
    get: function get() {
      return this.props.container ? this.refs.container : document.querySelector('html, body');
    }
  }]);

  return Infinite;
}(_react.Component);

Infinite.propTypes = {
  callback: _react.PropTypes.func.isRequired,
  offset: _react.PropTypes.number,
  disabled: _react.PropTypes.bool,
  container: _react.PropTypes.bool,
  reverse: _react.PropTypes.bool
};
Infinite.defaultProps = {
  offset: 200,
  disabled: false,
  container: false,
  reverse: false
};
exports.default = Infinite;
