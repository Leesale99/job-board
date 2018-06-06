import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Button from '../components/UI/Button';

// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => (
//   <Welcome showApp={linkTo('Button')} />
// ));

storiesOf('Button', module)
  .add('Default', () => (
    <Button onClick={action('clicked')}>Default Button</Button>
  ))
  .add('Primary', () => (
    <Button primary onClick={action('clicked')}>
      Primary Button
    </Button>
  ));