// @flow

import React from 'react';
import { H2 } from '../ui';

type P = {
  resultId: string
};

const ResultDetails = ({ resultId }: P) => (
  <article className="details">
    <header className="details__header">
      <H2>{resultId}</H2>
    </header>
    <section>Content</section>
  </article>
);

export default ResultDetails;
