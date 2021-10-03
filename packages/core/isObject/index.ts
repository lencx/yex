/**
 * isObject
 * @param value - value The value to check.
 * @returns boolean - Returns `true` if `value` is an object, else `false`.
 */
export const isObject = (value: unknown): boolean => {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}
