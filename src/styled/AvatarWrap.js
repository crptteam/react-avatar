import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
  display: inline-block;
  border-radius: 50%;
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.background};
  position: relative;
`;

const AvatarWrap = props => {

  const merged = Object.assign(
    {},
    defaultTheme.Avatar,
    props.theme && props.theme.Avatar ? props.theme.Avatar : {}
  );

  const theme = getThemeAsPlainTextByKeys(
    merged,
    props.color,
    props.size
  );

  return <Elem {...theme} {...props} />;
};

export default AvatarWrap;
