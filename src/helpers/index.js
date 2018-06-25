// @flow

export const flattenData = (data: { [string]: mixed }): Array<mixed> =>
  Object.values(data).reduce((accumulator, currentValue) => {
    if (typeof currentValue === 'object') {
      currentValue = Object.values(currentValue);
    }

    return accumulator.concat(currentValue);
  }, []);

export const fake = 'fake eslint';
