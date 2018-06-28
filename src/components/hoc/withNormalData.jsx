// @flow
import React, { type ComponentType } from 'react';
import { flattenData } from '../../helpers';

type P = {
  data: { [string]: mixed }
};

const withNormalData = (
  WrappedComponent: ComponentType<any>
): ComponentType<any> =>
  function WithNormalData(props: P) {
    const dataValues = flattenData(props.data);

    WithNormalData.displayName = `WithNormalData(SearchResult)`;
    return <WrappedComponent {...props} data={dataValues} />;
  };

export default withNormalData;
