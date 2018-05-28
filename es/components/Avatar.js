var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { defaultTheme } from '../theme/';

var ComponentName = 'Avatar';

import { SIZES, COLORS } from '../constants';

import AvatarWrap from '../styled/AvatarWrap';
import AvatarTextWrap from '../styled/AvatarTextWrap';
import InnerImg from '../styled/InnerImg';

var Avatar = function (_React$Component) {
  _inherits(Avatar, _React$Component);

  function Avatar() {
    _classCallCheck(this, Avatar);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Avatar.prototype.render = function render() {
    var _props = this.props,
        size = _props.size,
        src = _props.src,
        theme = _props.theme,
        color = _props.color,
        abbr = _props.abbr,
        otherProps = _objectWithoutProperties(_props, ['size', 'src', 'theme', 'color', 'abbr']);

    return React.createElement(
      AvatarWrap,
      _extends({
        src: src,
        size: size,
        theme: theme,
        color: color
      }, otherProps),
      src ? React.createElement(InnerImg, { src: src }) : React.createElement(
        AvatarTextWrap,
        { size: size, theme: theme, color: color },
        abbr
      )
    );
  };

  return Avatar;
}(React.Component);

Avatar.propTypes = process.env.NODE_ENV !== "production" ? {
  round: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  color: PropTypes.oneOf(Object.keys(COLORS)),
  theme: PropTypes.object,
  abbr: PropTypes.string,
  src: PropTypes.string
} : {};

Avatar.defaultProps = {
  round: false,
  size: SIZES.small,
  color: COLORS.light,
  theme: defaultTheme
};

Avatar.displayName = ComponentName;

export default Avatar;