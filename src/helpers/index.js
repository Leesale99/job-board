export const flattenData = data =>
  Object.values(data).reduce((accumulator, currentValue) => {
    if (typeof currentValue === 'object') {
      currentValue = Object.values(currentValue);
    }

    return accumulator.concat(currentValue);
  }, []);
