const PRIMITIVE_REGX = new RegExp(/^[sbn]/i);

const isPrimitive = (val) => val == null || PRIMITIVE_REGX.test(typeof val);

const isEmpty = (value) => {
  if (isPrimitive(value)) {
    throw Error("isEmpty function just can check object or array values");
  }

  const length = Array.isArray(value) ? value.length : Object.keys(value).length;

  return length === 0;
};

const getLowestPrice = (obj) => {
  if (isEmpty(obj)) return 0;

  return Math.min(...Object.values(obj));
};

export { getLowestPrice, isPrimitive, isEmpty };
