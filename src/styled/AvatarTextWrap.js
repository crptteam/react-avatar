import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '@crpt/utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  js-display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0);
  letter-spacing: 0.2px;
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
`;

const AvatarTextWrap = props => {

  const theme = getThemeAsPlainTextByKeys(
    props.theme || defaultTheme,
    props.color,
    props.size
  );

  return <Elem {...theme} {...props} color={theme.color} />;
};

export default AvatarTextWrap;
