import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, array, select } from '@storybook/addon-knobs/react';

import Avatar from '../components/Avatar';
import { COLORS, SIZES } from '../constants';

var elements = storiesOf('Avatar', module);

elements.addDecorator(withKnobs);

elements.add('round', function () {
  return React.createElement(
    'div',
    null,
    React.createElement(Avatar, { abbr: '\u0415\u0421', size: SIZES.large, color: COLORS.dark })
  );
});