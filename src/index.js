function omit(obj, fields) {
  const shallowCopy = {...obj};
  for (const field of fields) {
    delete shallowCopy[field];
  }
  return shallowCopy;
}

export default omit;