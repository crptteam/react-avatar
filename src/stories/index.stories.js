import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  select
} from '@storybook/addon-knobs/react';

import Avatar from '../components/Avatar';
import { COLORS, SIZES } from '../constants';

const elements = storiesOf('Avatar', module);

elements.addDecorator(withKnobs);

elements.add('round', () => {
  return (
    <div>
      <Avatar abbr="ЕС" size={SIZES.large} color={COLORS.dark} />
    </div>
  );
});
