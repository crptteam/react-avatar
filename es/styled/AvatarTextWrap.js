var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  js-display: flex;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0);\n  letter-spacing: 0.2px;\n  font-family: ', ';\n  font-size: ', ';\n  font-weight: ', ';\n  color: ', ';\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  js-display: flex;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0);\n  letter-spacing: 0.2px;\n  font-family: ', ';\n  font-size: ', ';\n  font-weight: ', ';\n  color: ', ';\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

var Elem = styled.div(_templateObject, function (props) {
  return props.fontFamily;
}, function (props) {
  return props.fontSize;
}, function (props) {
  return props.fontWeight;
}, function (props) {
  return props.color;
});

var AvatarTextWrap = function AvatarTextWrap(props) {

  var theme = getThemeAsPlainTextByKeys(props.theme || defaultTheme, props.color, props.size);

  return React.createElement(Elem, _extends({}, theme, props, { color: theme.color }));
};

export default AvatarTextWrap;