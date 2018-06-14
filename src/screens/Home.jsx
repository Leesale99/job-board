// @flow

import React from 'react';
import styled from 'styled-components';
import { Button, H1, H2, H3, H4, H5, H6, Input } from '../components/ui';

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 'hero hero cta1' 'hero hero cta2';
  max-width: 75%;
  margin: 300px auto;
`;

const Item = styled.div`
  background: ${({ theme }) => theme.getColor('warning')};
  text-align: center;
  font-size: 24px;
  padding: 15px;
`;

const Hero = Item.extend`
  grid-area: hero;
  min-height: 400px;
  background: teal;
  width: 100%;
`;

const Cta = Item.extend`
  grid-area: ${({ item }) => `cta${item}`};
`;

const ScreensHome = () => {
  return (
    <div>
      <Button color="warning" outline size="sm">
        Base Button
      </Button>
      <Button color="disabled">Base Button</Button>
      <Button color="danger" size="md">
        Base Button
      </Button>
      <Button color="warning" size="lg">
        Base Button
      </Button>
      <Button color="primary" size="xl">
        Base Button
      </Button>
      <Button shape="circle">Base Button</Button>
      <Button disabled shape="square">
        Base Button
      </Button>
      <H1>Hello Home Page!!!</H1>
      <H2>Hello Home Page!!!</H2>
      <H3>Hello Home Page!!!</H3>
      <H4>Hello Home Page!!!</H4>
      <H5>Hello Home Page!!!</H5>
      <H6>Hello Home Page!!!</H6>
      <Input placeholder="Enter your Name" />
      <Wrapper>
        <Hero>1</Hero>
        <Cta item={1}>5</Cta>
        <Cta item={2}>6</Cta>
      </Wrapper>
    </div>
  );
};

export default ScreensHome;
