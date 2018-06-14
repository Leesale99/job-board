import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Button, H1, H2, H3, H4, H5, H6, Input } from '../components/ui';

// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => (
//   <Welcome showApp={linkTo('Button')} />
// ));

storiesOf('Button', module)
  .add('Primary', () => (
    <Button onClick={action('clicked')}>Primary Button</Button>
  ))
  .add('Primary Outline', () => (
    <Button color="primary" outline onClick={action('clicked')}>
      Primary Button
    </Button>
  ))
  .add('Primary Dark', () => (
    <Button color="primaryDark" onClick={action('clicked')}>
      Primary Dark Button
    </Button>
  ))
  .add('Primary Dark Outline', () => (
    <Button color="primaryDark" outline onClick={action('clicked')}>
      Primary Dark Button
    </Button>
  ))
  .add('Danger', () => (
    <Button color="danger" onClick={action('clicked')}>
      Danger Button
    </Button>
  ))
  .add('Danger Outline', () => (
    <Button color="danger" outline onClick={action('clicked')}>
      Danger Button
    </Button>
  ))
  .add('Warning', () => (
    <Button color="warning" onClick={action('clicked')}>
      Warning Button
    </Button>
  ))
  .add('Warning Outline', () => (
    <Button color="warning" outline onClick={action('clicked')}>
      Warning Button
    </Button>
  ))
  .add('Accent', () => (
    <Button color="accent" onClick={action('clicked')}>
      Accent Button
    </Button>
  ))
  .add('Accent Outline', () => (
    <Button color="accent" outline onClick={action('clicked')}>
      Accent Button
    </Button>
  ))
  .add('Success', () => (
    <Button color="success" onClick={action('clicked')}>
      Success Button
    </Button>
  ))
  .add('Success Outline', () => (
    <Button color="success" outline onClick={action('clicked')}>
      Success Button
    </Button>
  ))
  .add('Small Size', () => (
    <Button size="sm" onClick={action('clicked')}>
      Small Button
    </Button>
  ))
  .add('Regular Size', () => (
    <Button size="regular" onClick={action('clicked')}>
      Regular Button
    </Button>
  ))
  .add('Medium Size', () => (
    <Button size="md" onClick={action('clicked')}>
      Medium Button
    </Button>
  ))
  .add('Large Size', () => (
    <Button size="lg" onClick={action('clicked')}>
      Large Button
    </Button>
  ))
  .add('Regular Shape', () => (
    <Button shape="regular" onClick={action('clicked')}>
      Regular Button
    </Button>
  ))
  .add('Circle Shape', () => (
    <Button shape="circle" onClick={action('clicked')}>
      Circle Button
    </Button>
  ))
  .add('Square Shape', () => (
    <Button shape="square" onClick={action('clicked')}>
      Square Button
    </Button>
  ))
  .add('Disabled', () => (
    <Button disabled onClick={action('clicked')}>
      Disabled Button
    </Button>
  ));

storiesOf('Typography', module).add('Headings', () => (
  <React.Fragment>
    <H1>Heading H1</H1>
    <H2>Heading H2</H2>
    <H3>Heading H3</H3>
    <H4>Heading H4</H4>
    <H5>Heading H5</H5>
    <H6>Heading H6</H6>
  </React.Fragment>
));

const InputWrapper = styled.div`
  max-width: 40rem;
  margin: 2rem;
`;

storiesOf('Form Elements', module).add('Input Text Field', () => (
  <InputWrapper>
    <Input placeholder="Text Field" />
  </InputWrapper>
));
