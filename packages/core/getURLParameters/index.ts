/**
 * getURLParameters
 * @param url
 * @returns object
 */
export const getURLParameters = (url: string) => (
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a: Record<string, string>, v: string) => (
      (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
    ), {})
);
