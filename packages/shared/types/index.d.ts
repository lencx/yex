/**
 * isObject
 * @param value - value The value to check.
 * @returns boolean - Returns `true` if `value` is an object, else `false`.
 */
declare const isObject: (value: unknown) => boolean;

/**
 * isColor
 * @param color
 * @returns boolean
 */
declare const isColor: (color: string) => boolean;

/**
 * getURLParameters
 * @param url
 * @returns object
 */
declare const getURLParameters: (url: string) => Record<string, string>;

export { getURLParameters, isColor, isObject };
