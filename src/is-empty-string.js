import isString from "@rojo2/is-string";

/**
 * Returns if the value passed is a string
 *
 * @param {*} value - Value
 * @param {Object} options - Options 
 * @returns {string} - Returns if it is a string
 */
export default function isEmptyString(value, options = {}) {
  const defaultOptions = {
    trim: false
  };

  const opts = {
    ...defaultOptions,
    ...options
  };

  if (!isString(value)) {
    return false;
  }
  if (opts.trim) {
    return !value.trim();
  }
  return !value.toString();
}
