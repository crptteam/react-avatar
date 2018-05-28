var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  border-radius: 50%;\n  width: ', ';\n  height: ', ';\n  background: ', ';\n  position: relative;\n'], ['\n  display: inline-block;\n  border-radius: 50%;\n  width: ', ';\n  height: ', ';\n  background: ', ';\n  position: relative;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

var Elem = styled.div(_templateObject, function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, function (props) {
  return props.background;
});

var AvatarWrap = function AvatarWrap(props) {

  var theme = getThemeAsPlainTextByKeys(props.theme || defaultTheme, props.color, props.size);

  return React.createElement(Elem, _extends({}, theme, props));
};

export default AvatarWrap;