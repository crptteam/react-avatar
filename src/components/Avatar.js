import React from 'react';
import PropTypes from 'prop-types';
import { defaultTheme } from '../theme/';

const ComponentName = 'Avatar';

import { SIZES, COLORS } from '../constants';

import AvatarWrap from '../styled/AvatarWrap';
import AvatarTextWrap from '../styled/AvatarTextWrap';
import InnerImg from '../styled/InnerImg';


class Avatar extends React.Component {
  render() {
    const { size, src, theme, color, abbr, ...otherProps } = this.props;

    return (
      <AvatarWrap
        src={src}
        size={size}
        theme={theme}
        color={color}
        {...otherProps}
      >
        {src ? (
          <InnerImg src={src} />
        ) : (
          <AvatarTextWrap size={size} theme={theme} color={color}>
            {abbr}
          </AvatarTextWrap>
        )}
      </AvatarWrap>
    );
  }
}

Avatar.propTypes = {
  round: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  color: PropTypes.oneOf(Object.keys(COLORS)),
  theme: PropTypes.object
};

Avatar.defaultProps = {
  round: false,
  size: SIZES.small,
  color: COLORS.light,
  theme: defaultTheme
};

Avatar.displayName = ComponentName;

export default Avatar;
